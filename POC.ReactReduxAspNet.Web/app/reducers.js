import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';
import { reducer as notifications} from 'react-notification-system-redux'
import loginReducer from './features/login/duck';

const reducers = combineReducers({
    loginReducer,
    notifications,
    form
});

export default reducers;