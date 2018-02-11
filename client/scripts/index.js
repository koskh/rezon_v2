// @flow

import 'babel-polyfill';
// import 'raf/polyfill';

// import _ from 'lodash';
import invariant from 'invariant';

import * as React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router, Switch} from "react-router-dom";

import {OpenRoute, PrivateRoute} from './services/route'

import Navigate from './components/Navigate';

// open pages
import NotFound from './features/NotFound';
import Login from './features/Login';
import About from './features/About';
// private pages
import Main from './features/Main';
import Tools from './features/Tools';


const rootEl = document && document.getElementById('root');
invariant(rootEl, 'Cant find root element');

ReactDOM.render(
    <Router>
        <div>

            <Navigate/>

            <hr/>

            <Switch>
                <PrivateRoute exact path="/" component={Main}/>
                <PrivateRoute path="/tools" component={Tools}/>
                <OpenRoute path="/login" component={Login}/>
                <OpenRoute path="/about" component={About}/>
                <OpenRoute component={NotFound}/>
            </Switch>

        </div>
    </Router>,
    rootEl
);



