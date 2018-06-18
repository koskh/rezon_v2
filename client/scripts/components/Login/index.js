// @flow

// import _ from 'lodash';
import * as React from 'react';
import {FormattedMessage} from 'react-intl';


import styles from './index.pcss';

import FormWelcome from './FormWelcome';
import OtherServicesLogin from './OtherServicesLogin';
import EmailPassword from './EmailPassword';

import TestLoginForm from '../FormValidation/index'

type Props = {
    // title: string
}
//
// type DefaultProps = {
//     data: Object
// };

export default class LoginForm extends React.Component<Props> {
    props: Props;


    render() {

        return (
            <div className='container'>
                <div className='row'>

                    <div className={styles['login-panel']}>

                        <FormWelcome />

                        <OtherServicesLogin />

                        <EmailPassword />

                    </div>

                </div>

                <div className='row col-24 mt-4'>
                    <TestLoginForm />
                </div>


            </div>
        );
    }
}

