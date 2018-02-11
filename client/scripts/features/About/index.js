// @flow

import * as React from 'react';
// import Header from '../../components/page-header';

export default class extends React.Component<*> {
    componentWillMount() {
        document.title = 'About page';
    }

    render() {
        return (
            <article>
                <h1>Открытая страница</h1>
                <p>НЕ требует аутентификации</p>
            </article>
        );
    }
}
