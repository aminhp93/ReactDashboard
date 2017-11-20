import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

import reducer from './reducer';


const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;
