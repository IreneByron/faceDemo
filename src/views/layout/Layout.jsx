import React, { Component } from 'react'
import { browserHistory, Link } from  'react-router'
import classNames from 'classnames'
import Icon from 'components/icon'
import Util from 'core/util';

export default class Layout extends Component {

	tabBarDataListAudit = [
		{link: "video", tabName: "视频", icon: "custom-video", key: "video"},
		{link: "avatar", tabName: "头像", icon: "custom-avatar", key: "avatar"},
		{link: "opus", tabName: "作品", icon: "custom-opus", key: "opus"} 
	]

	constructor(props){
		super(props);
		props.actions.setNavList(this.tabBarDataListAudit);
		this.selectActiveMenu(props);
	}

	componentDidMount() {
	    Util.registerNotification("reload").then(success => {
	    	console.log("reload注册成功");
	    }, error => {
	    	console.log("reload注册失败," + error)
	    });
		document.getElementById("appWrapper").addEventListener("click", (e) => {
			let target = e.target;
			if( target && target.nodeName.toLocaleLowerCase() == "a" && target.className.indexOf('pushWindow') != -1 ) {
				e.preventDefault();
				Util.pushWindow(target.href);
				return false;
			}
			if( target && target.nodeName.toLocaleLowerCase() == "a" && target.className.indexOf('replaceHistory') != -1 ) {
				e.preventDefault();
				browserHistory.replace(target.getAttribute("href"));
				return false;
			}
			return true;
		},false);  
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		this.selectActiveMenu(nextProps);
	}

	selectActiveMenu = (props) => {
		let pathArr = props.location.pathname.split('/');
		if(pathArr[pathArr.length - 1] != props.activeMenu){
			props.actions.setActiveMenu(pathArr[pathArr.length - 1]);
		}
	}

	render() {
		let { children, tabBarDataList, activeArray, activeMenu } = this.props;
		if(activeArray.includes(activeMenu) && activeArray.length > 1){
			return (
				<div className="weui-tab">
					<div className="weui-tab__panel">
		            	{ children }
		            </div>
		            <div className="weui-tabbar">
		            	<For each = "item" of = { tabBarDataList } index = "index">
			                <Link to={ Util.absoluteUrl(item.link) } className={classNames({"weui-bar__item_on": activeMenu==item.key},"weui-tabbar__item replaceHistory")} key={item.key}>
			                	<Icon name={item.icon} className="weui-tabbar__icon"/>
			                    <p className="weui-tabbar__label">{item.tabName}</p>
			                </Link>
		                </For>
		            </div>
				</div>
			)
		}else{
			return (
				<div className="containerWrap">
					{ children }
				</div>
			)
		}
	}
}


