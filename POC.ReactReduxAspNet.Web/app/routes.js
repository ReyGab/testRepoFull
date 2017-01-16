//React
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//App
import NotFound from './shared-components/not-found';
import Unauthorized from './shared-components/unauthorized';
import LoginContainer from './features/login/containers/login';
import MainContainer from './features/main/containers/main';
import UsersContainer from './features/users/containers/users';
import UsersList from './features/users/components/users-list';


import { syncHistoryWithStore } from 'react-router-redux'
import store from './store';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

export default () => {
    return (
        <Router history={history}>
            <Route path="/" component={MainContainer}>
                <IndexRoute component={UsersContainer} />
            </Route>
            <Route path="/login" component={LoginContainer} />
            <Route path="/unauthorized" component={Unauthorized} />
            <Route path="*" component={NotFound} />
        </Router>
    );
};
