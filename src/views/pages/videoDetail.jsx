import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import classnames from 'classnames';
import ListView from 'components/listView';
import Icon from 'components/icon'
import BaseComponent from 'core/baseComponent'
import Ajax from 'core/ajax';
import Util from 'core/util';

export default class VideoList extends BaseComponent {

	constructor(props) {
		super(props);
		Util.setTitle("视频详情");
	}

	componentDidMount() {
		let player = document.getElementById("player");
		let vedioPause = document.getElementById("videoPause");
		//播放 暂停
		player.onclick = () => {
			if (player.paused) {
				player.play()
				vedioPause.style.display = "none";
			} else {
				player.pause();
				vedioPause.style.display = "block"
			}
		}
		//拖动进度条
		let bar = document.getElementById("bar")
		bar.onclick = (e) => {
			let time = player.duration * (e.offsetX / bar.width);
			console.log(time)
			player.currentTime = time;
		}

		//更新播放进度
		let line = document.getElementById("line")
		let current = document.getElementById("current");
		player.addEventListener("timeupdate", () => {
			//更新进度条
			let pValue = (player.currentTime / player.duration) * 100;
			line.style.width = `${pValue}%`
			//显示当前播放进度的时间
			current.innerText = this.getTimeBySecond(player.currentTime);
		})

		//播放结束时
		player.addEventListener("ended", () => {
			line.style.width = 0;
			player.currentTime = 0;
			//视频播放状态为设置为停止
			player.pause();
		})

		//当视频元数据加载时运行
		let totalTime = document.getElementById("totalTime");
		player.addEventListener("loadedmetadata", () => {
			//设置总时长
			totalTime.innerText = this.getTimeBySecond(player.duration)
		})
	}

	//将当前秒数转换为时间
	getTimeBySecond = (second) => {
		var hour = parseInt(second / (60 * 60));
		var minute = parseInt((second / 60) % 60);
		var second = parseInt(second % 60);
		return (hour < 10 ? "0" + hour : hour) + ":" + (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);
	}

	componentWillUnmount() {

	}

	render() {
		let { location } = this.props;
		let width = document.body.clientWidth;
		let height = document.body.clientHeight;
		return (
			<div className="playerWrap">
				<img
					id='videoPause'
					src="/static/play.svg"
					alt=""
					className="videoPause"
				/>
				<video
					id="player"
					width={width}
					height={height}
					// controls
					preload="auto"
					poster={location.query.background}
					style={{ 'background': '#000' }}

				>

					<source src={location.query.source} type="video/mp4"></source>
				</video>
				<div className="controls">
					<div className="progress">
						<div className="line" id='line'></div>
						<div className="bar" id='bar'></div>
					</div>
					<div className="times">
						<span className="current" id='current'>00:00:00</span>/
						<span className="totalTime" id='totalTime'>00:00:00</span>
					</div>
				</div>
			</div>
		)
	}

}