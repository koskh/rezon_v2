// @flow

import * as React from 'react';
// import Header from '../../components/page-header';

export default class NotFound extends React.Component<*> {
    componentWillMount() {
        document.title = 'Main page';
    }

    render() {
        return (
            <article>
                <h1>Главная страница приложения.</h1>
                <p>Требует аутентификации</p>
            </article>
        );
    }
}
