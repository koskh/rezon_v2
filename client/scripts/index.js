// @flow

import 'babel-polyfill';
// import 'raf/polyfill';

// import _ from 'lodash';
import invariant from 'invariant';

import * as React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Switch} from "react-router-dom";
import {OpenRoute, PrivateRoute} from './services/route'

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './services/storage/reducers';

// eslint-disable-next-line
const preloadedState = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || {} : {};

//
const store = createStore(
    combineReducers({
        ...Reducers
    }),
    preloadedState,
);

import Navigate from './components/Navigate';

// open pages
import NotFound from './features/NotFound';
import Login from './features/Login';
import About from './features/About';
// private pages
import Home from './features/Home';
import Tools from './features/Tools';

// import {routerReducer} from "react-router-redux";


const rootEl = document && document.getElementById('root');
invariant(rootEl, 'Cant find root element');

ReactDOM.render(
    <Provider store = {store}>
        <Router>
            <div>

                <Navigate/>

                <hr/>

                <Switch>
                    <OpenRoute exact path="/" component={Home}/>
                    <PrivateRoute path="/tools" component={Tools}/>
                    <OpenRoute path="/login" component={Login}/>
                    <OpenRoute path="/about" component={About}/>
                    <OpenRoute component={NotFound}/>
                </Switch>

            </div>
        </Router>
    </Provider>,
    rootEl
);



