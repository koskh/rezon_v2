// @flow

import * as React from 'react';
// import Header from '../../components/page-header';

export default class NotFound extends React.Component<*> {
    componentWillMount() {
        document.title = 'Login page';
    }

    render() {
        return (
            <article>
                <h1>Страница логина.</h1>
            </article>
        );
    }
}
