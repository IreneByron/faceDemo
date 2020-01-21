import React, { Component } from 'react'
import { browserHistory, Link } from  'react-router'
import classnames from 'classnames';
import videoJs from 'video.js';
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
		let { location } = this.props;
		let width =  
		this.player = videoJs('player', {'width': document.body.clientWidth, 'height': document.body.clientHeight, 'controls': true, preload: "auto", 'poster': location.query.background, 'sources': [{'src': location.query.source, 'type': 'video/mp4'}]}, function(){ 
			videoJs.log('Your player is ready!');

		    // In this context, `this` is the player that was created by Video.js.
			// this.play();

			// How about an event listener?
			this.on('ended', function() {
			    videoJs.log('Awww...over so soon?!');
			});
		});
	}

	componentWillUnmount() {
	    if (this.player) {
	    	this.player.dispose()
	    }
	}

	render() {
		return (
			<div className="playerWrap">
				<video id="player" className="video-js"></video>
			</div>
		)
	}

}