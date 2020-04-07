import React, { Component } from 'react';

import { Menu } from 'antd';

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

import api from '@/api/common/common';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;

class MenuLeft extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: []
        };
    }

    componentDidMount(){
        //获取个人信息与系统菜单
        api.getMenu().then((res) => {
            //console.log(res)
            let menuTree = this.renderMenu(res.data.menu);
            this.setState({
                menu: menuTree
            })
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
                            <MailOutlined />
                            <span>{item.name}</span>
                        </span>}
                    >
                        {this.renderMenu(item.childs)}
                    </SubMenu>
                )
            }else{
                return (
                    <Menu.Item key={item.id}>
                        <PieChartOutlined />
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