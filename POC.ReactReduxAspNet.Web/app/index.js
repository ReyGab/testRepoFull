// React 
import React from 'react';
import { render } from 'react-dom';

//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

//Helmet
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';

//App
import store from './store';
import getRoutes from './routes';
import NotificationsContainer from './shared-components/notifications';


console.log('[APP START]');

//http://www.material-ui.com/#/get-started/installation
injectTapEventPlugin();

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <div>
                <Helmet titleTemplate="TodoApp - %s" />
                {getRoutes()}
                <NotificationsContainer/>
            </div>
        </MuiThemeProvider>        
    </Provider>,
    document.getElementById('root')
);
