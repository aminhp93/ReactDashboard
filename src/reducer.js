import { combineReducers } from 'redux';

import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import settings from './reducers/settings';
import article from './reducers/article';

export default combineReducers({
	auth,
	article,
	common,
	home,
	settings
})
