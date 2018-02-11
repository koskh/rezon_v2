// @flow

import 'babel-polyfill';
// import 'raf/polyfill';

// import _ from 'lodash';
import invariant from 'invariant';

import * as React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'


import NotFound from './features/NotFound';
import Login from './features/';

const rootEl = document && document.getElementById('root');
invariant(rootEl, 'Cant find root element');

ReactDOM.render(
    <div>
        <h1>Hello react</h1>
        <DumbBtn title='Test title'/>
    </div>,
    rootEl
);
