import client from '../../api';

const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

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
            return state;

        default: return state;
    }
}

export function loginUser(credentials) {

    return function (dispatch) {
        dispatch(loginUserRequest());
        // setTimeout(function () {
        //     dispatch(loginUserSuccess());
        // }, 2000);


        var params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', credentials.email);
        params.append('password', credentials.password);

        client.post('/token', params).then(function (response) {
            console.log(response);
            dispatch(loginUserSuccess());
        }).catch(function (error) {
            console.log(error);
        });

    }
}


export function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    };
}


export function loginUserSuccess() {
    return {
        type: LOGIN_USER_SUCCESS
    };
}


// export function loginUserSuccess() {
//     return { type: LOGIN_USER_SUCCESS };
// }

// export function loginUserError() {
//     return { type: LOGIN_USER_ERROR };
// }