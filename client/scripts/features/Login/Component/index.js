// @flow

import * as React from 'react';

// import Login from '../../../components/Login/index';

import Form from '../../../components/FormValidation/Form';
import FormBody from '../../../components/FormValidation/Form/FormBody';
import {Input, Password} from '../../../components/FormValidation/Form/FormBody/_components'
import FormFooter from '../../../components/FormValidation/Form/FormFooter';

import schema from './login.schema'

export default class FeatureLogin extends React.Component<*> {
    componentWillMount() {
        document.title = 'Login page';
        // this.props.makeFetch();
    }


    componentWillUnmount() {
        this.props.cancelFetch();
        // this.props.resetStore();
        // debugger;
    }

    render() {
        return (
            <article>

                <div className='row col-24 mt-4'>

                    <Form makeFetch={this.props.makeFetch} cancelFetch={this.props.cancelFetch}>

                        <FormBody formSchema={schema}>
                            <Input id={'email'} placeholder={'Логин'}/>
                            <Password id={'password'} placeholder={'Пароль'}/>
                        </FormBody>

                        <FormFooter isOkDefaultEnabled={false}/>

                    </Form>
                </div>
            </article>
        );
    }
}
