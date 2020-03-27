import axios from 'axios';

axios.defaults.timeout = 10000;

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


if (process.env.NODE_ENV == 'development') {
 axios.defaults.baseURL = '/';
} else if (process.env.NODE_ENV == 'production') {
 axios.defaults.baseURL = '/';
}

let pending = [];
let	cancelToken = axios.CancelToken;
let	cancelPending = (config) => {
	pending.forEach((item, index) => {
		if(!!config){
			if(item.u == config.url){
				item.f(); //取消请求
				pending.splice(index, 1); //移除当前请求记录
			};
		}else{
			item.f(); //取消请求
			pending.splice(index, 1); //移除当前请求记录
		}
	});
};
//axios 请求拦截器
axios.interceptors.request.use(config => {
	let token = localStorage.getItem('token');
	if (!!token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
		config.headers.Authorization = `token ${token}`;
	};
	cancelPending(config);
	config.cancelToken = new cancelToken((c) => {
		pending.push({'u': config.url, 'f': c});
	});
	return config;
}, err => {
	return Promise.reject(err);
});
//响应拦截器
axios.interceptors.response.use(response => {
	cancelPending(response.config);
	return response;
}, error => {
	if (error.response) {
		switch (error.response.status) {
			case 401:
				// 返回 401 清除token信息并跳转到登录页面
				localStorage.removeItem('token');
				//router.push({'name': 'login', 'query': {'redirect': router.currentRoute.fullPath}});
				break;
			default:
		}
	}
	return {data: {}};  // 返回接口返回的错误信息
});

export default {
	//封装 axios get请求
	get(url, data){
		return new Promise((resolve, reject) => {
			axios.get(url, {
				params: data
			}).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error)
			})
		})
	},
	//封装 axios post请求
	post(url, data){
		return new Promise((resolve, reject) => {
			axios.post(url, data).then((res) => {
				resolve(res.data);
			}, (error) => {
				reject(error)
			})
		})
	}
}