import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

import App from './components/App';

const defaultState = { appName: 'Dashboard' };
const reducer = function(state = defaultState, action){
	switch(action.type){
		case 'HOME_PAGE_LOADED':
			return { ...state, articles: action.payload.articles };
	}
	return state;
}
const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
