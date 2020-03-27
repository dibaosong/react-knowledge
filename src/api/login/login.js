import $ from '@/api/api';

export default {
	/**
	 * 登录
	 * data: {username: 用户名    password: 密码    code: 验证码    remember: 自动登录}
	 */
	login(data){
		return $.post(
			'api/user/login',
			data
		);
	}
}

