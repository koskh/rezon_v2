// @flow

import * as React from 'react';
import {FormattedMessage} from 'react-intl';
import {NavLink} from "react-router-dom";

import style from './index.pcss';

export default class extends React.Component<*> {

    render() {
        const { match } = this.props;

        return (
            <nav className={'nav bg-light mb-4'}>
                <NavLink exact to='/' className="nav-link"><FormattedMessage id='app.navigate.home'/></NavLink>
                <NavLink to='/tools' className="nav-link"><FormattedMessage id='app.navigate.tools'/></NavLink>
                <NavLink  to="/login" className="nav-link"><FormattedMessage id='app.navigate.login'/></NavLink>
                <NavLink  to="/about" className="nav-link"><FormattedMessage id='app.navigate.about'/></NavLink>
            </nav>
        );
    }
}
