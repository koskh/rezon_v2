// @flow

import 'babel-polyfill';
// import 'raf/polyfill';

// import _ from 'lodash';

import invariant from 'invariant';

import * as React from 'react';
import ReactDOM from 'react-dom';

import DumbBtn from './components/DumbBtn';

const rootEl = document && document.getElementById('root');
invariant(rootEl, 'Cant find root element');

ReactDOM.render(
    <div>
        <h1>Hello react</h1>
        <DumbBtn title='Test title'/>
    </div>,
    rootEl
);
