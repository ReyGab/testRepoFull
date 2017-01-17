import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import client from './api.js';

const middlewares = applyMiddleware(thunk.withExtraArgument({client}));

export default middlewares;