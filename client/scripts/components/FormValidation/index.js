// @flow

import * as React from 'react';

import Form from './Form';

import DefaultFormHeader from './Form/FormHeader';
import DefaultFormBody from './Form/FormBody';
import DefaultFormFooter from './Form/FormFooter';


export default ()=> {
    return <Form
        // formHeader={<DefaultFormHeader title={'bla bla bla'}/>}
        formBody={<DefaultFormBody/>}
        formFooter={<DefaultFormFooter/>}/>
}


