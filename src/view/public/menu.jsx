import React, { Component } from 'react';

import { Menu } from 'antd';

import api from '@/api/common/common';
import {Link} from "react-router-dom";

import store from '@/store/index';

const { SubMenu } = Menu;

class MenuLeft extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: []
        };
    }

    componentDidMount(){
        let menu = store.getState().user.menu;
        let menuTree = this.renderMenu(menu);
        this.setState({
            menu: menuTree
        })
    }

    //遍历菜单
    renderMenu(data){
        return data.map((item) => {
            if(!!item.childs){
                return (
                    <SubMenu
                        key={item.id}
                        title={<span>
                            <span>{item.name}</span>
                        </span>}
                    >
                        {this.renderMenu(item.childs)}
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={item.id}>
                        <Link to={item.path}>
                            {item.name}
                        </Link>
                    </Menu.Item>
                )
            }
        })
    }


    render() {
        return (
            <>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['2']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                >
                    {this.state.menu}
                </Menu>
            </>
        )
    }
}

export default MenuLeft;