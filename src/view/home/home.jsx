import React, { Component} from 'react';

import store from '@/store/index';

class Home extends Component {
	constructor(props) {
		super(props);

		this.changeZd = this.changeZd.bind(this);

		this.state = {
			"text": "中国"
		};
	}

	changeZd(text){
		store.dispatch({
			type: 'DICTIONARY',
			data: {
				"selectType": [
					{
						"value": 0,
						"name": "否"
					},
					{
						"value": 1,
						"name": "是"
					}
				]
			}
		})
	}


	render() {
		return (
			<div>
				{this.state.text}
				<button onClick={this.changeZd}>点击修改字典</button>
			</div>
		)
	}
}

export default Home;