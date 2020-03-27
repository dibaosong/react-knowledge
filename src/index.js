import 'core-js/es/map';
import 'core-js/es/set';

import 'antd/dist/antd.css';

import '@/assets/sass/reset.css';
import '@/assets/sass/admin.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/index';

if (process.env.NODE_ENV == 'development') {
	//引入mock数据
	require('./mock/index');
}





ReactDOM.render(
	<Router />, 
	document.getElementById('root')
);

