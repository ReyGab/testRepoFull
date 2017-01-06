import { createStore } from 'redux';
import reducers from './reducers';

//Hook redux dev tools
//https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(reducers, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;