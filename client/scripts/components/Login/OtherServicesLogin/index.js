// @flow

import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './index.pcss';

export default class EmailPassword extends React.Component<*> {

    render() {
        return (
            <div>
                <div className={"row"}>
                    <div className={'col-12'}>
                        <a href="#" className={'btn btn-lg btn-primary btn-block'}>Facebook</a>
                    </div>
                    <div className={'col-12'}>
                        <a href="#" className={'btn btn-lg btn-info btn-block'}>Google</a>
                    </div>
                </div>

                <div className={styles['login-or']}>
                    <hr className={styles['hr-or']}/>
                    <span className={styles['span-or']}>
                        <FormattedMessage id='app.common.or'/>
                    </span>
                </div>

            </div>
        );
    }
}

