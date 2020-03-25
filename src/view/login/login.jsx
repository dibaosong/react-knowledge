import React, { Component, Fragment } from 'react';

import { Button } from 'antd';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}


	render() {
		return (
			<Fragment>
				<Button type="primary">登录</Button>
			</Fragment>
		)
	}
}

export default Login;