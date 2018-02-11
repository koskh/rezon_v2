// @flow

import * as React from 'react';
// import Header from '../../components/page-header';

export default class NotFound extends React.Component<*> {
    componentWillMount() {
        document.title = 'Open page';
    }

    render() {
        return (
            <article>
                <h1>Отурытая страница</h1>
                <p>НЕ требует аутентификации</p>
            </article>
        );
    }
}
