import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import loginReducer from './features/login/duck';

const reducers = combineReducers({
    loginReducer,
    form: formReducer
});

export default reducers;