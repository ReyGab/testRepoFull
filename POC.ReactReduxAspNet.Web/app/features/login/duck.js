//https://github.com/mzabriskie/axios
//Polyfill for URLSearchParams
import URLSearchParams from 'url-search-params';
import Notifications from 'react-notification-system-redux';
import { browserHistory } from 'react-router'

import { createUserSession } from '../../util/auth';

const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

const notificationOpts = {
    // uid: 'once-please', // you can specify your own uid if required
    title: 'Login Error',
    message: 'Invalid email or password',
    position: 'tc',
    autoDismiss: 1
};

export default function reducer(state = {
    loginError: null,
    loginRequestPending: false

}, action = {}) {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            state = {
                ...state,
                loginRequestPending: true
            };
            return state;

        case LOGIN_USER_SUCCESS:
            state = {
                ...state,
                loginRequestPending: false
            };
            return state;

        case LOGIN_USER_ERROR:
            console.log(action);
            state = {
                ...state,
                loginRequestPending: false,
                loginError: action.error
            };

        default: return state;
    }
}

export function loginUser(credentials) {

    return function (dispatch, getState, {client}) {
        dispatch(loginUserRequest());

        //https://github.com/WebReflection/url-search-params
        var params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', credentials.email);
        params.append('password', credentials.password);

        client.post('/token', params).then(function (response) {

            dispatch(loginUserSuccess());
            
            console.log(response.data);

            createUserSession(
                response.data.access_token,
                response.data.refresh_token,
                response.data.Id
            );

        }).catch(function (error) {
            dispatch(loginUserError(error));
            dispatch(Notifications.error(notificationOpts));
        });

    }
}


function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    };
}


function loginUserSuccess() {
    return {
        type: LOGIN_USER_SUCCESS
    };
}

function loginUserError(error) {
    return { type: LOGIN_USER_ERROR, error };
}