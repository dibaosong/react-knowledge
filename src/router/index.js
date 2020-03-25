import React from 'react';

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import { renderRoutes } from 'react-router-config';

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
	...Main,
	...NotFound
];

const BasicRoute = () => (
    <HashRouter>
    	<Switch>
    		<Route path='/' exact render={()=> (
               <Redirect to="/login" />
           )}/>
    	</Switch>
        <Switch>{renderRoutes(routes)}</Switch>
    </HashRouter>
);

export default BasicRoute;
