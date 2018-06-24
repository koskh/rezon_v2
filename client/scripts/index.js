// @flow

import '../styles/global.pcss';

import 'babel-polyfill';

// import _ from 'lodash';
import invariant from 'invariant';

import * as React from 'react';
import ReactDOM from 'react-dom';

import {IntlProvider} from 'react-intl';

import i18n from '../i18n';
const locale = i18n.getBrowserLocale();
const messages =  i18n.getMessages(locale);

import {BrowserRouter as Router, Switch} from "react-router-dom";
import history from './services/api/history';

import {OpenRoute, PrivateRoute} from './services/route'

import {Provider} from 'react-redux';
import store from './services/storage/store';

import Navigate from './components/Navigate';

// open pages
import NotFound from './features/NotFound';
import Login from './features/Login/index';
import About from './features/About';
// private pages
import Home from './features/Home';
import Tools from './features/Tools';

// import {routerReducer} from "react-router-redux";


const rootEl = document && document.getElementById('root');
invariant(rootEl, 'Cant find root element');

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
        <Provider store={store}>
            <Router history={history}>
                <section>
                    <header>
                        <Navigate/>
                    </header>

                    <main className="container">
                        <Switch>
                            <OpenRoute exact path="/" component={Home}/>
                            <PrivateRoute path="/tools" component={Tools}/>
                            <OpenRoute path="/login" component={Login}/>
                            <OpenRoute path="/about" component={About}/>
                            <OpenRoute component={NotFound}/>
                        </Switch>
                    </main>

                    <footer className="mt-3">
                        &nbsp;
                    </footer>

                </section>
            </Router>
        </Provider>
    </IntlProvider>,
    rootEl
);



