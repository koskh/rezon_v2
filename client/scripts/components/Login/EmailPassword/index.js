// @flow

// import _ from 'lodash';
import * as React from 'react';
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
                    <label htmlFor='inputUsernameEmail'>Username or email</label>
                    <input type='text' className='form-control' id='inputUsernameEmail'/>
                </div>
                <div className='form-group'>
                    <a className='pull-right' href='#'>Forgot password?</a>
                    <label htmlFor='inputPassword'>Password</label>
                    <input type='password' className='form-control' id='inputPassword'/>
                </div>
                <div className='checkbox pull-right'>
                    <label><input type='checkbox'/> Remember me </label>
                </div>
                <button type='submit' className='btn btn btn-primary'>
                    Log In
                </button>
            </form>
        );
    }
}

