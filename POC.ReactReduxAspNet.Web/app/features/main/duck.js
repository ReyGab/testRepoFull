import { browserHistory } from 'react-router'
import client from '../../api';
import { logoutUserSession } from '../../util/auth';

const APP_USER_INFO_REQUEST = 'APP_USER_INFO_REQUEST';
const APP_USER_INFO_SUCCESS = 'APP_USER_INFO_SUCCESS';

export default function reducer(state = {
    currentUserInfoRequestPending: true,
    currentUser: null
}, action = {}) {
    switch (action.type) {
        case APP_USER_INFO_REQUEST:
            state = {
                ...state, currentUserInfoRequestPending: true
            };
            return state

        case APP_USER_INFO_SUCCESS:
            state = {
                ...state, currentUserInfoRequestPending: false,
                currentUser: action.currentUser
            };
            return state

        default: return state;
    }
}

function getCurrentUserInfoRequest() {
    return {
        type: APP_USER_INFO_REQUEST
    };
}

function getCurrentUserInfoSuccess(currentUser) {
    return {
        type: APP_USER_INFO_SUCCESS,
        currentUser
    };
}


export function getCurrentUserInfo() {
    return function (dispatch) {
        dispatch(getCurrentUserInfoRequest())        
        const currentUserId = localStorage.getItem('currentUserId');
        client.get(`api/user/GetUserByUserId/?id=${currentUserId}`).then(function (response) {
            setTimeout(() => {
                dispatch(getCurrentUserInfoSuccess({
                    userName: response.data.userName,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName
                }));
            }, 2000)

        }).catch(function (error) {
            console.log(error);
            console.log('You have been KICKED OUT!');
            logoutUserSession();
        });

    }
}


export function logoutCurrentUser() {
    return function (dispatch) {
        //http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
        dispatch({type:'APP_USER_LOGOUT'});
        logoutUserSession();
    }
}