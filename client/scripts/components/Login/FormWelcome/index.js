// @flow

import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './index.pcss';

export default class EmailPassword extends React.Component<*> {

    render() {
        return (
            <h3>
                <FormattedMessage id='app.login.login'/>
                &nbsp;
                <FormattedMessage id='app.common.or'/>
                &nbsp;
                <a href="#">
                    <FormattedMessage id='app.login.signin'/>
                </a>
            </h3>
        );
    }
}

