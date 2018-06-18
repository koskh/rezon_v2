// @flow

import _ from 'lodash';
import * as React from 'react';

import Form from './Form';

// import DefaultFormHeader from './Form/FormHeader';

import FormBody from './Form/FormBody';
import {Input, Password} from './Form/FormBody/_components'

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
    password: {
        convert: {
            action: value => _.toString(value),
            msg: 'Не могу сконвертить'
        },
        hint: {
            msg: 'Пароль для входа'
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
                    const {email, password} = fields;

                    return email.length >= password.length
                },
                msg: 'email.length должна быть >= чем password.length'
            },
        ]
    }
}


export default () => {
    return <Form>

        <FormBody formSchema={schema}>
            <Input id={'email'} placeholder={'Логин'}/>
            <Password id={'password'} placeholder={'Пароль'}/>
        </FormBody>

        <FormFooter isOkDefaultEnabled={false} />


    </Form>
}


