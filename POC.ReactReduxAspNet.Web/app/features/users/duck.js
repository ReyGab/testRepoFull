import { browserHistory } from 'react-router'
import client from '../../api';

const APP_GET_USER_LIST_REQUEST = 'APP_GET_USER_LIST_REQUEST';
const APP_GET_USER_LIST_SUCCESS = 'APP_GET_USER_LIST_SUCCESS';
const APP_GET_USER_LIST_ERROR = 'APP_GET_USER_LIST_ERROR';

export default function reducer(state = {
    getUserListRequestPending: true,
    userList: []
}, action = {}) {
    switch (action.type) {
        case APP_GET_USER_LIST_REQUEST:
            state = {
                ...state, getUserListRequestPending: true
            };
            return state

        case APP_GET_USER_LIST_SUCCESS:
            state = {
                ...state, 
                getUserListRequestPending: false,
                userList : action.userList
            };
            return state


        case APP_GET_USER_LIST_ERROR:
            state = {
                ...state, getUserListRequestPending: false,
            };
            return state

        default: return state;
    }
}

function getUserListRequest() {
    return {
        type: APP_GET_USER_LIST_REQUEST
    };
}

function getUserListSuccess(userList) {
    return {
        type: APP_GET_USER_LIST_SUCCESS,
        userList
    };
}


function getUserListError() {
    return {
        type: APP_GET_USER_LIST_ERROR
    };
}

export function getUserList() {

    return function (dispatch) {

        dispatch(getUserListRequest())
        client.get(`api/user/GetAllUser`).then(function (response) {
            dispatch(getUserListSuccess(response.data));
        }).catch(function (error) {
            console.log(error)
            dispatch(getUserListError())
        });
    }
}