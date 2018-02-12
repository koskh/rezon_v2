// @flow

import * as React from 'react';
import {NavLink} from "react-router-dom";

import style from './index.pcss';

export default class extends React.Component<*> {

    render() {
        const { match } = this.props;

        return (
            <nav className={'nav bg-light mb-4'}>
                <NavLink exact to='/' className="nav-link">Main</NavLink>
                <NavLink to='/tools' className="nav-link">Tools</NavLink>
                <NavLink  to="/login" className="nav-link">Login</NavLink>
                <NavLink  to="/about" className="nav-link">About</NavLink>
            </nav>
        );
    }
}
