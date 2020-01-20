import {
	combineReducers
} from 'redux';

import layout from 'reducers/layout';
import video from 'reducers/video';
import avatar from 'reducers/avatar';
import opus from 'reducers/opus';

export default combineReducers({
	layout,
	video,
	avatar,
	opus,
});