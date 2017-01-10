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

export function createUserSession(token) {
    localStorage.setItem('token', token);
    setAuthorizationHeader(token);
    browserHistory.replace('/');
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
