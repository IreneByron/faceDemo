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
		let width = document.body.clientWidth;
		let height = document.body.clientHeight;
		return (
			<div className="playerWrap">
				<video id="player" width={width} height={height} controls preload="auto" poster={location.query.background} style={{'background': '#000'}}>
					<source src={location.query.source} type="video/mp4"></source>
				</video>
			</div>
		)
	}

}