import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import loginReducer from './features/login/duck';
import {reducer as notifications} from 'react-notification-system-redux'

const reducers = combineReducers({
    loginReducer,
    notifications,
    form: formReducer
});

export default reducers;