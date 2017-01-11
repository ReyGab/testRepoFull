import axios from 'axios'
import { browserHistory } from 'react-router'

function setAuthorizationHeader(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export function createUserSession(token, refreshToken,currentUserId) {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('currentUserId', currentUserId);
    setAuthorizationHeader(token);
    browserHistory.replace('/');
}

export function logoutUserSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('currentUserId');
    setAuthorizationHeader(false);
    browserHistory.replace('/login');
}

export default function checkIfUserHasSession() {
    const token = localStorage.getItem('token');
    if (token) {
        browserHistory.replace('/');
        setAuthorizationHeader(token);
    }
    else {
        browserHistory.replace('/login');
        setAuthorizationHeader(false);
    }
}
