// @flow

import * as React from 'react';
// import Header from '../../components/page-header';

export default class extends React.Component<*> {
    componentWillMount() {
        document.title = 'Main page';
    }

    render() {
        return (
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/tools">Tools</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>


        );
    }
}
