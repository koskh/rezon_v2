// @flow

// import _ from 'lodash';
import * as React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from './index.pcss';


// type Props = {
//     title: string
// }
//
// type DefaultProps = {
//     data: Object
// };

export default class EmailPassword extends React.Component<*> {
    // props: Props;

    render() {

        return (
            <form role='form'>
                <div className='form-group'>
                    <label htmlFor='inputUsernameEmail'><FormattedMessage id='app.login.username'/></label>
                    <input type='text' className='form-control' id='inputUsernameEmail'/>
                </div>
                <div className='form-group'>
                    <a className='float-right' href='#'><FormattedMessage id='app.login.forgot'/></a>
                    <label htmlFor='inputPassword'><FormattedMessage id='app.login.password'/></label>
                    <input type='password' className='form-control' id='inputPassword'/>
                </div>
                <div className='checkbox float-right'>
                    <label><input type='checkbox'/><FormattedMessage id='app.login.remember'/></label>
                </div>
                <button type='submit' className='btn btn btn-primary'>
                    <FormattedMessage id='app.login.login'/>
                </button>
            </form>
        );
    }
}

