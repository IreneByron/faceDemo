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
		let player = videoJs('player', {}, function(){ 
			videoJs.log('Your player is ready!');

		    // In this context, `this` is the player that was created by Video.js.
			// this.play();

			// How about an event listener?
			this.on('ended', function() {
			    videoJs.log('Awww...over so soon?!');
			});
		});
	}

	render() {
		let { location } = this.props;
		// console.log(this.props.videos);
		return (
			<div className="player">
				<video
				    id="player"
				    className="video-js"
				    controls
				    preload="auto"
				    poster={location.query.background}
				>
				  <source src={location.query.source} type="video/mp4"></source>
				</video>
			</div>
		)
	}

}