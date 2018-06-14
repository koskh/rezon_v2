// @flow

import * as React from 'react';

import Form from './Form';

// import DefaultFormHeader from './Form/FormHeader';

import FormBody from './Form/FormBody';
import {Input} from './Form/FormBody/_components'

import FormFooter from './Form/FormFooter';

const schema = {
    email: {
        convert: { // приведение получаемого "значения виджета" к требуемому типу
            action: value => value,
            msg: 'Не могу сконвертить'
        },
        hint: {
            msg: 'Hint tolltip for everyone'
        },
        inputRules: [
            {
                validate: value => value.length > 0,
                msg: 'Не может быть пустым'
            },
            {
                validate: value => value.length <= 5,
                msg: 'Не может быть больше 5 символов'
            }
        ]
    }
}


export default () => {
    return <Form>

        <FormBody formSchema={schema}>
            <Input id={'email'} defaultValue={'1234567'}/>
        </FormBody>

        <FormFooter>
        </FormFooter>

    </Form>
}


