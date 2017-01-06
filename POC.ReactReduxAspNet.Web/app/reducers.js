import { combineReducers } from 'redux';

import loginReducer from './features/login/duck';

const reducers = combineReducers({
    loginReducer
});

export default reducers;