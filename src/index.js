import 'core-js/es/map';
import 'core-js/es/set';

import 'antd/dist/antd.css';

import '@/assets/sass/reset.css';
import '@/assets/sass/admin.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';

import store from '@/store/index';

import api from '@/api/common/common';

if (process.env.NODE_ENV == 'development') {
	//引入mock数据
	require('./mock/index');
}

//如果是登录状态，则刷新页面时需先获取到菜单后才能挂载路由页面
let token = localStorage.getItem('token');
if(!!token){
	//获取个人信息与系统菜单
	api.getMenu().then((res) => {
		if(res.success){
			store.dispatch({
				type: 'USER_MENU',
				data: res.data.menu
			})

			ReactDOM.render(
				<Router />,
				document.getElementById('root')
			);
		}
	})
}else{
	ReactDOM.render(
		<Router />,
		document.getElementById('root')
	);
}




