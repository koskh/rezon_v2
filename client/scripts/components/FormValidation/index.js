// @flow

import * as React from 'react';

import Form from './Form';

// import DefaultFormHeader from './Form/FormHeader';

import FormBody from './Form/FormBody';
import {Input} from './Form/FormBody/_components'

// import DefaultFormFooter from './Form/FormFooter';


export default () => {
    return <Form>

        <FormBody>
            <Input/>
        </FormBody>

    </Form>
}


