// @flow

// import _ from 'lodash';
import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './index.pcss';

import FormWelcome from './Welcome';
import EmailPassword from './EmailPassword';

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

                        <div className='login-or'>
                            <hr className='hr-or'/>
                            <span className='span-or'>
                                <FormattedMessage id='app.common.or'/>
                            </span>
                        </div>

                        <EmailPassword />

                    </div>

                </div>
            </div>
        );
    }
}

