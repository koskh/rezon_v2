// @flow

import * as React from 'react';
import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';

import i18n from '../../../../i18n';

import Form from '../../../components/FormValidation';

export default class extends React.Component<*> {
    componentWillMount() {
        document.title = 'Home page';
    }

    render() {
        // const {history} = this.props;
        // history.push('login');
        const name = 'Eric';
        const unreadCount = 1000;

        return (
            <div>
                <h1>
                    <FormattedMessage id='app.test.hello-world'/>
                </h1>

                <p>
                    <FormattedMessage
                        id='app.home.welcome'
                        defaultMessage='Hello, {name}!'
                        values={{name: <b>{name}</b>, unreadCount}}
                    />
                </p>

                <p>
                    <FormattedDate
                        value={Date.now()}
                        year='numeric'
                        month='short'
                        day='2-digit'/>
                </p>

                <p>
                    <FormattedNumber
                        value={1000.207}
                        style='currency'
                        currency={i18n.getCurrency(i18n.getBrowserLocale())}
                    />
                </p>

                <div>
                    <Form title={'bla lba lba'}/>
                </div>
            </div>
        );
    }
}
