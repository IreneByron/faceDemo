import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
	videos: [{
		"id": "72739127321",
		"source": "https://hwvod.mogucdn.com/vodtransgzp1251964405/5285890796488586063/v.f30.mp4?t=1579406065081",
		"title": "素颜改造计划",
		"background": "https://s5.mogucdn.com/mlcdn/c45406/191206_51a7ck1l9je67gke1ajc3lhlg9243_900x1600.jpg"
	}, {
		"id": "72739127322",
		"source": "https://hwvod.mogucdn.com/vodtranscq1251964405/5285890797135365592/v.f30.mp4",
		"title": "素颜改造计划2",
		"background": "https://s11.mogucdn.com/mlcdn/c45406/191226_3e9ab6i2hh7k6ejgahhhk6dhej75h_480x880.png_640x999.v1c96.70.webp"
	}, {
		"id": "72739127323",
		"source": "https://hwvod.mogucdn.com/vodtransgzp1251964405/5285890796459202594/v.f30.mp4",
		"title": "素颜改造计划3",
		"background": "https://s5.mogucdn.com/mlcdn/c45406/191205_6kja692i1adjll1439f5cfej6ee69_1080x1920.jpg_640x999.v1c96.70.webp"
	}],
};

function handler(state = initialState, action) {
	return state
}

export default handler