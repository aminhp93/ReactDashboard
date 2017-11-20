import { combineReducers } from 'redux';

import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';

export default combineReducers({
	auth,
	common,
	home
})
