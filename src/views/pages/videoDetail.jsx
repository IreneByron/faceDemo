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
		// this.onRefresh();
	}

	componentDidMount() {
		
	}

	render() {
		let params = this.state.params;
		let ajaxUrl = this.state.ajaxUrl;
		let list = this.props.videos;//this.state.list;
		// console.log(this.props.videos);
		return (
			<div id="player"></div>
		)
	}

}