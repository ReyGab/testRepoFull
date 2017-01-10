//React
import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

//App
import NotFound from './shared-components/not-found';
import LoginContainer from './features/login/containers/login';
import MainPage from './features/main/components/main';

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={MainPage}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="*" component={NotFound}/>    
        </Router>
    );
};
