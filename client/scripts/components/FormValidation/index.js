// @flow

import _ from 'lodash';
import * as React from 'react';

import Form from './Form';

// import DefaultFormHeader from './Form/FormHeader';

import FormBody from './Form/FormBody';
import {Input} from './Form/FormBody/_components'

import FormFooter from './Form/FormFooter';

const schema = {
    email: {
        convert: { // приведение получаемого "значения виджета" к требуемому типу
            action: value => _.toString(value),
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
    },
    email2: {
        convert: {
            action: value => _.toString(value),
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
        ],
        logicRules:[
            {
                validate: fields => {
                    const {email, email2} = fields;

                    return email.length >= email2.length
                },
                msg: 'email.length должна быть >= чем email2.length'
            },
        ]
    }
}


export default () => {
    return <Form>

        <FormBody formSchema={schema}>
            <Input id={'email'} defaultValue={'1234567'}/>
            <Input id={'email2'}/>
        </FormBody>

        <FormFooter>
        </FormFooter>

    </Form>
}


