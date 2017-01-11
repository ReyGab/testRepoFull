//React
import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

//App
import NotFound from './shared-components/not-found';
import LoginContainer from './features/login/containers/login';
import MainContainer from './features/main/containers/main';

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={MainContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="*" component={NotFound}/>    
        </Router>
    );
};
