import React from 'react';

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import RouterAuth from '@/utils/routerComponent';

/*
HashRouter
1.用这个了就代表路径加上/#/
2.换成BrowserRouter了；路径就不需要加/#/
3.用HashRouter了就要把path的路径名字带上，如果首次加载默认的话要这样写： <Route exact path="/"  component={App}/>
*/

import Login from './login';

import Main from './main';

import NotFound from './notFound';

const routes = [
	...Login,
	...NotFound
];

const BasicRoute = () => (
    <HashRouter>
		<Switch>
			<RouterAuth config={routes}></RouterAuth>
		</Switch>
    </HashRouter>
);

export default BasicRoute;
