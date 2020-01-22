import React, { Component } from 'react'
import { browserHistory, Link } from  'react-router'
import classnames from 'classnames';
import ListView from 'components/listView';
import Icon from 'components/icon'
import BaseComponent from 'core/baseComponent'
import Ajax from 'core/ajax';
import Util from 'core/util';

export default class VideoList extends BaseComponent {

	constructor(props){
		super(props);
		Util.setTitle("视频详情");
	}

	componentDidMount() {

	}

	componentWillUnmount() {
	 
	}

	render() {
		let { location } = this.props;
		return (
			<div className="pageWrap">
				<video id="player" controls preload="auto" poster={location.query.background} style={{'background': '#000'}}>
					<source src={location.query.source} type="video/mp4"></source>
				</video>
				<div className="weui-cells__title">选择要替换的头像</div>
				<div className="weui-flex avatar-list">
					<div className="avatar-item">
						<div className="avatar">
							<img src="https://s5.mogucdn.com/mlcdn/c45406/191204_0a7ecc5bjif6g7k1d7iaj8kl0k0k8_400x400.jpg_999x999.v1c0.81.webp" alt="范范饭" />
						</div>
						<Icon name="success"/>
					</div>
					<div className="avatar-item">
						<div className="avatar">
							<img src="https://s5.mogucdn.com/mlcdn/c45406/191204_0a7ecc5bjif6g7k1d7iaj8kl0k0k8_400x400.jpg_999x999.v1c0.81.webp" alt="范范饭" />
						</div>
						<Icon name="success"/>
					</div>
					<div className="avatar-item">
						<div className="avatar">
							<img src="https://s5.mogucdn.com/mlcdn/c45406/191204_0a7ecc5bjif6g7k1d7iaj8kl0k0k8_400x400.jpg_999x999.v1c0.81.webp" alt="范范饭" />
						</div>
						<Icon name="success"/>
					</div>
					<div className="avatar-item">
						<div className="avatar">
							<img src="https://s5.mogucdn.com/mlcdn/c45406/191204_0a7ecc5bjif6g7k1d7iaj8kl0k0k8_400x400.jpg_999x999.v1c0.81.webp" alt="范范饭" />
						</div>
						<Icon name="success"/>
					</div>																									
				</div>
				<a href="javascript:;" className="weui-btn weui-btn_primary weui-btn_loading faceBtn"><i class="weui-loading"></i>启动换脸</a>
			</div>
		)
	}

}