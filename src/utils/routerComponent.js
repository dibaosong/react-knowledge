import React, { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';

import { renderRoutes } from 'react-router-config';

import {asyncComponent as async} from '@/utils/asyncComponent.js';

import store from '@/store/index';

import Main from '@/router/main';


class RouterAuth extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    //根据菜单生成路由文件
    handleRouters(menu){
        let childRouter = [];
        menu.forEach((item) => {
            if(!!item.childs){
                childRouter = [...childRouter, ...this.handleRouters(item.childs)];
            }else{
                let component = item.component;
                let path = item.path;
                //根据es6module语法，由于import是静态执行，所以不能使用表达式和变量，
                //解决方法 es6模板字符串 import(`./path/${myFile}.jsx`)。
                // 注意：
                // ${myFile}变量前边一定要写一个带"/"的字符串。
                // ".jsx" 不能写在变量里，要写在字符串里。
                //目前只能一个页面对应一个js，如何按模块对应js？
                item.component = async(()=>import(/* webpackChunkName: "[request]" */ `@/${component}.jsx`));
                return childRouter.push(item)
            }
        })
        return childRouter
    }

    render() {
        let { location, config } = this.props;
        let { pathname } = location;
        console.log(location, config, pathname)

        let token = localStorage.getItem('token');

        let targetRouterConfig = config.find((item) => item.path === pathname);


        //如果是登录状态
        if(!!token){
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
                    //判断没有设置权限菜单，则根据菜单设置上
                    if(Main[0].routes.length == 0){
                        let menu = store.getState().user.menu;
                        let menus = this.handleRouters(menu);
                        Main[0].routes = menus;
                    }
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
                //路由不存在，直接进入登录页
                return <Redirect to='/login' />
            }
        }
    }
}

export default RouterAuth;