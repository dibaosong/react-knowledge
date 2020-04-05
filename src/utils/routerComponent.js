import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';

import Main from '@/router/main';


class RouterAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let { location, config } = this.props;
        let { pathname } = location;
        console.log(location, config, pathname)

        let token = localStorage.getItem('token');

        let targetRouterConfig = config.find((item) => item.path === pathname);

        //如果是登录状态
        if(!!token){
            // let menu = localStorage.getItem('menu');
            // if(!menu){
            //     localStorage.setItem('menu', "123");
            //     return renderRoutes(Main);
            // }
            //如果进入登录页面，则直接重定向至首页
            if(pathname === '/login' || pathname === '/'){
                return <Redirect to='/home' />
            }else{
                //如果路由存在
                if(targetRouterConfig){
                    //如果是需要登录的或者是404页面则直接进入
                    if(targetRouterConfig.auth || pathname === '/404'){
                        let { component } = targetRouterConfig;
                        return <Route exact path={pathname} component={component} />
                    }else{//否则重定向到首页
                        return <Redirect to='/home' />
                    }
                }else{
                    //如果菜单中包含当前路由，则进入
                    let menuConfig = Main[0].routes.filter((item) => {
                        return item.path === pathname
                    });
                    if(menuConfig.length != 0){
                        return renderRoutes(Main);
                    }else{//不包含则进入404
                        return <Redirect to='/404' />
                    }
                }
            }
        }else{ //非登录状态
            //如果路由存在
            if(targetRouterConfig){
                //如果需要登录，则跳转到登录页
                if(targetRouterConfig.auth){
                    return <Redirect to='/login' />
                }else{//不需要登录，则正常进入
                    let { component } = targetRouterConfig;
                    return <Route exact path={pathname} component={component} />
                }
            }else{
                //如果菜单中包含当前路由，则进入
                let menuConfig = Main[0].routes.filter((item) => {
                    return item.path === pathname
                });
                if(menuConfig.length != 0){
                    return <Redirect to='/login' />
                }
                //如果
                if(pathname === '/'){
                    return <Redirect to='/login' />
                }else{
                    return <Redirect to='/404' />
                }
            }
        }
    }
}

export default RouterAuth;