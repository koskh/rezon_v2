// @flow

import * as React from 'react';

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
