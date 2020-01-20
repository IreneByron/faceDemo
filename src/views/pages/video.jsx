import React, { Component } from 'react'
import { browserHistory, Link } from  'react-router'
import classnames from 'classnames';
import ListView from 'components/listView';
import Icon from 'components/icon'
import BaseComponent from 'core/baseComponent'
import Ajax from 'core/ajax';
import Util from 'core/util';

export default class VideoList extends BaseComponent {
	state = {
		params: {
			"outlineType": 12
		},
		ajaxUrl: "/mock/getVideoList",
		isEnd: false,
		list: [],
		currentIndex: 1
	}	

	constructor(props){
		super(props);
		Util.setTitle("视频");
		// this.onRefresh();
	}

	getList = () => {
		let params = Object.assign({}, this.state.params, { pageNum: this.state.currentIndex, pageSize: 10 });
		return Ajax.post(this.state.ajaxUrl, params, 1).then(data => {
			this.state.list = this.state.list.concat(data.data.list || []);
			this.state.isEnd = data.data.isEnd;
			this.state.currentIndex ++;
			this.setState(this.state);
		}, err => {
			this.state.isEnd = true;
			this.setState(this.state);
		});
	}

	onRefresh = () => {
		this.state.list = [];
		this.state.currentIndex = 1;
		return this.getList(this.state.currentIndex);
	}

	onLoad = () => {
		return this.getList(this.state.currentIndex); 
	}

	componentDidMount() {
		document.addEventListener("reload", function(data){
			window.location.reload();
		}, false);
	}

	render() {
		let params = this.state.params;
		let ajaxUrl = this.state.ajaxUrl;
		let list = this.props.videos;//this.state.list;
		// console.log(this.props.videos);
		return (
			<ListView onRefresh={this.onRefresh} onLoad={ this.onLoad } isEnd={this.state.isEnd}>
				<For each = "item" of = { list } index = "index">
					<div className="list-item" key={index}>
						<Link>
							<div className="detail-image">
								<img src = {item.background} />
							</div>
							<Icon name="custom-play" className="video-tag"/>
							<div className="detail-desc">{item.title}</div>
						</Link>

					</div>
	            </For>
			</ListView>
		)
	}
}