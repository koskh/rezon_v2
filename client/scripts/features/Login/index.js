// @flow

import * as React from 'react';

import Login from '../../components/Login';

export default class extends React.Component<*> {
    componentWillMount() {
        document.title = 'Login page';
    }

    render() {
        return (
            <article>
                <Login/>
            </article>
        );
    }
}
