import mainView from '@/view/public/main.jsx';

import {asyncComponent as async} from '@/utils/asyncComponent.js';

const homeView = async(()=>import(/* webpackChunkName: "home" */ '@/view/home/home.jsx'));

const listView = async(()=>import(/* webpackChunkName: "tool" */ '@/view/tool/list.jsx'));


const main = [
	{
		path: '/',
		component: mainView,
		routes: [
			{
				path: '/home',
				component: homeView,
				exact: true
			},
			{
				path: '/tool/list',
				component: listView,
				exact: true
			}
		]
	}
];

export default main;


