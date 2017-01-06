//React
import React from 'react';
import { Router, Route, IndexRoute, browserHistory  } from 'react-router';

//App
import NotFound from './shared-components/not-found';
import LoginContainer from './features/login/containers/login';

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={LoginContainer}/>
            <Route path="/sample" component={LoginContainer}/>
            <Route path="/sample2" component={LoginContainer}/>
            <Route path="/sample3" component={LoginContainer}/>
            <Route path="/sample/sample" component={LoginContainer}/>
            <Route path="*" component={NotFound}/>    
        </Router>
    );
};
