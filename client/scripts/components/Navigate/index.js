// @flow

import * as React from 'react';
import {NavLink} from "react-router-dom";

export default class extends React.Component<*> {
    // componentWillMount() {
    //
    // }

    render() {
        return (
            <ul>
                <li>
                    <NavLink to="/">Main</NavLink>
                </li>
                <li>
                    <NavLink to="/tools">Tools</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
            </ul>
        );
    }
}
