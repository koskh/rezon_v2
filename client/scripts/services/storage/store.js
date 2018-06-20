import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducers from "./reducers";

import { getPreloadedState} from "../auth/utils/preloadedState";

// eslint-disable-next-line
const  devTools = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : x=>x;



let preloadedState = getPreloadedState();


const store = createStore(
    combineReducers({
        ...Reducers
    }),
    preloadedState,
    compose(applyMiddleware(thunkMiddleware), devTools)
);

export default store;
