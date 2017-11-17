import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';

import App from './App';

const defaultState = { appName: 'Conduit' };
const reducer = function(state = defaultState, action){
	switch(action.type){
		case 'TOGGLE':
			return { ...state, checked: !state.checked };
	}
	return state;
}
const store = createStore(reducer);

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('root'));
