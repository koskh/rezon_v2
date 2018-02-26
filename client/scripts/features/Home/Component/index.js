// @flow

import * as React from 'react';
import {FormattedMessage} from 'react-intl';

export default class extends React.Component<*> {
    componentWillMount() {
        document.title = 'Home page';
    }

    render() {
        // debugger;
        // const {history} = this.props;
        // history.push('login');

        return (
            <h1>
                <FormattedMessage id='app.test.hello-world' />
            </h1>
        );
    }
}
