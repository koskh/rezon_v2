import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducers from "./reducers";

// eslint-disable-next-line
const preloadedState = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || {} : {};

const store = createStore(
    combineReducers({
        ...Reducers
    }),
    preloadedState,
    applyMiddleware(thunkMiddleware)
);

export default store;
