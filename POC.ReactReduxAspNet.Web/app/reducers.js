import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as notifications } from 'react-notification-system-redux'
import loginReducer from './features/login/duck';
import mainPageReducer from './features/main/duck';
import userReducer from './features/users/duck';

//http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const appReducer = combineReducers({
    loginReducer,
    mainPageReducer,
    userReducer,
    notifications,
    form
});


const rootReducer = (state, action) => {
    if (action.type === 'APP_USER_LOGOUT') {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;