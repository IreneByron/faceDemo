import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
	videos: [{
		"source": "https://hwvod.mogucdn.com/vodtransgzp1251964405/5285890796488586063/v.f30.mp4?t=1579406065081",
		"title": "素颜改造计划",
		"background": "https://s5.mogucdn.com/mlcdn/c45406/191206_51a7ck1l9je67gke1ajc3lhlg9243_900x1600.jpg"
	}, {
		"source": "https://hwvod.mogucdn.com/vodtransgzp1251964405/5285890796488586063/v.f30.mp4?t=1579406065081",
		"title": "素颜改造计划2",
		"background": "https://s5.mogucdn.com/mlcdn/c45406/191206_51a7ck1l9je67gke1ajc3lhlg9243_900x1600.jpg"
	}, {
		"source": "https://hwvod.mogucdn.com/vodtransgzp1251964405/5285890796488586063/v.f30.mp4?t=1579406065081",
		"title": "素颜改造计划3",
		"background": "https://s5.mogucdn.com/mlcdn/c45406/191206_51a7ck1l9je67gke1ajc3lhlg9243_900x1600.jpg"
	}],
};

function handler(state = initialState, action) {
	return state
}

export default handler