import { createStore,compose } from 'redux';
import reducers from './reducers';
import middlewares from './middlewares';


//Hook redux dev tools
//https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(
    reducers,          //All Reducers
    compose(
        middlewares,//All Middleware,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
export default store;