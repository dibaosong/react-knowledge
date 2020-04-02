import {asyncComponent as async} from '@/utils/asyncComponent.js';

const LoginView = async(()=>import(/* webpackChunkName: "login" */ '@/view/login/login.jsx')); //配置webpackChunkName，打包出来的异步chunk的名称


const login = [
	{
		path: '/login',
		component: LoginView,
		exact: true
	}
];

export default login;


