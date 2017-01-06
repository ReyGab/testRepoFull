const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export default function reducer(state = {error : null}, action = {}) {
    switch (action.type) {
        case LOGIN_USER_PENDING:
            console.log('LOGIN_USER_PENDING');
            return state;

        case LOGIN_USER_SUCCESS:
            return state;

        case LOGIN_USER_ERROR:
            return state;

        default:
            return state;
    }
}

export function loginUserPending() {
    return { type: LOGIN_USER_PENDING };
}

export function loginUserSuccess() {
    return { type: LOGIN_USER_SUCCESS };
}

export function loginUserError() {
    return { type: LOGIN_USER_ERROR };
}