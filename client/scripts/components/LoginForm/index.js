// @flow

// import _ from 'lodash';
import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './index.pcss';

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
            <div className={'container'}>
                <div className={'row'}>

                    <div className={styles['login-panel']}>
                        <h3>
                            <FormattedMessage id='app.login.login'/>
                            <a href="#">
                                <FormattedMessage id='app.login.signin'/>
                            </a>
                        </h3>
                    </div>

                </div>
            </div>
        );
    }
}

