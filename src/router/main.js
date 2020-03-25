import mainView from '@/view/public/main.jsx';

import homeView from '@/view/home/home.jsx'; //首页

import tableView from '@/view/table/table.jsx'; //table

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


