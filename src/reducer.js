import { combineReducers } from 'redux';

import auth from './reducers/auth';
import article from './reducers/article';
import articleList from './reducers/articleList';
import common from './reducers/common';
import home from './reducers/home';
import editor from './reducers/editor';
import profile from './reducers/profile';
import settings from './reducers/settings';


export default combineReducers({
	auth,
	article,
	articleList,
	common,
	home,
	editor,
	profile,
	settings
})

