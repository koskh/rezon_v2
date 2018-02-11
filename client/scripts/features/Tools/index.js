// @flow

import * as React from 'react';
// import Header from '../../components/page-header';

export default class extends React.Component<*> {
    componentWillMount() {
        document.title = 'Tools page';
    }

    render() {
        return (
            <article>
                <h1>Страница приложения.</h1>
                <p>Требует аутентификации</p>
            </article>
        );
    }
}
