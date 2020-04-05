import React, { Component } from 'react';

import { renderRoutes } from 'react-router-config'
import { Link } from "react-router-dom"

import logoUrl from '@imgs/logo192.png'

import { Menu, Dropdown } from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined,
    EditOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import MenuLeft from './menu';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: props.route.routes,
            collapsed: false,
            avatar: 'https://himg.bdimg.com/sys/portrait/item/pp.1.1a3e55f2.J-hp2UWn4ZTZ4B-boxxaZQ.jpg?tt=1585406576138'
        }

    }


    //菜单收起展开
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link to="/about">
                        <SettingOutlined /> 帐户设置
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        <EditOutlined /> 密码修改
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <>
                <div className="header">
                    <div className="logo f18 fl">
                        <img className="db fl" src={logoUrl} alt="" />
                        <span>React后台管理</span>
                    </div>
                    <div className="bar fl">
                        <div className="fl">
                            <div className="bar-btn" onClick={this.toggleCollapsed}>
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </div>
                        </div>
                        <div className="fr">
                            <Dropdown overlay={menu} placement="bottomCenter">
                                <div className="user fl">
                                    <img src={this.state.avatar} alt=""/>
                                    <span>欢迎您，管理员</span>
                                </div>
                            </Dropdown>
                            <div className="user fl mr20">
                                <LogoutOutlined /> 退出登录
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body dis-flex">
                    <div className="left">
                        <MenuLeft></MenuLeft>
                    </div>
                    <div className="right flex">
                        {renderRoutes(this.state.route)}
                    </div>
                </div>
            </>
        )
    }
}

export default Main;