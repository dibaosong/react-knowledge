import React, { Component } from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import api from '@/api/login/login';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	//登录
	onFinish = (values) => {
		api.login(values).then((res) => {
			console.log(res);
		})
	}


	render() {
		return (
			<div className="login-wrap">
				<div className="title tc fb">React后台管理系统</div>
				<div className="con bc">
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{ remember: true }}
						onFinish={this.onFinish}
					>
						<Form.Item
							name="username"
							rules={[{ required: true, message: '请输入用户名' }]}
						>
							<Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[{ required: true, message: '请输入密码' }]}
						>
							<Input
								size="large"
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="password"
								placeholder="密码"
							/>
						</Form.Item>
						<Form.Item>
							<Form.Item name="remember" valuePropName="checked" noStyle>
								<Checkbox>自动登录</Checkbox>
							</Form.Item>

							{/*<a className="login-form-forgot" href="">*/}
							{/*	忘记密码*/}
							{/*</a>*/}
						</Form.Item>

						<Form.Item>
							<Button type="primary" size="large" htmlType="submit" className="w">
								登录
							</Button>
							{/*<a href="">注册</a>*/}
						</Form.Item>
					</Form>
				</div>
			</div>
		)
	}
}

export default Login;