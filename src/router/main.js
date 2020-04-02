import mainView from '@/view/public/main.jsx';

import tableView from '@/view/table/table.jsx'; //table

import {asyncComponent as async} from '@/utils/asyncComponent.js';

const homeView = async(()=>import(/* webpackChunkName: "home" */ '@/view/home/home.jsx'));



const main = [
	{
		path: '/home',
		component: mainView,
		routes: [
			{
				component: homeView,
				exact: true
			}
		]
	},
	{
		path: '/table',
		component: mainView,
		routes: [
			{
				path: '/table/list',
				component: tableView,
				exact: true
			}
		]

	}
];

export default main;


