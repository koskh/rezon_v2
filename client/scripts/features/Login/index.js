// @flow

import * as React from 'react';

import LoginForm from '../../components/LoginForm';

export default class extends React.Component<*> {
    componentWillMount() {
        document.title = 'Login page';
    }

    render() {
        return (
            <article>
                <LoginForm/>
            </article>
        );
    }
}
