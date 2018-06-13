// @flow

import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';

import BasedInput from './Input';

import type { Schema } from '../../../Validation/schema';
type controlStateType = '' | 'is-hint' | 'is-valid' | 'is-invalid'

const DefaultControlState: controlStateType = 'is-hint';

type propsType = {
    defaultValue?: any
}

type stateType = {
    schema?: Schema,
    value: any,
    controlState: controlStateType,
    controlStateMsg: string
}

function getWrappedFormBodyComponent(WrappedComponent: any, schema: any ): React.Element  {

    return class FormBodyComponent extends React.Component<propsType,stateType> {
        props: propsType;
        state: stateType = {
            schema: schema,
            value: null,
            controlState: DefaultControlState,
            controlStateMsg:  _.get(schema, 'hint.msg') || ''
        };

        _getConvertedValue = (val: any): any =>{
            return _.get(this.state.schema, 'convert.action')(val) || val;
        }

        _getControlState = (val: any): any => {
            const inputRules = _.get(this.state.schema, 'inputRules');

            let controlState =  _.get(this.state.schema, 'isValid.msg') && 'is-valid' ||  'is-hint';
            let controlStateMsg =  _.get(this.state.schema, 'isValid.msg') ||  _.get(this.state.schema, 'hint.msg') || '';

            _.each(inputRules, v=> {
                if(!v.validate(val)){
                    controlState = 'is-invalid';
                    controlStateMsg = v.msg;
                }
            });

            return {controlState, controlStateMsg};
        }

        onComponentChange = ev => {
            let value = this._getConvertedValue(ev.target.value);
            let {controlState, controlStateMsg} = this._getControlState(value);

            this.setState({value, controlState, controlStateMsg})
        };

        render() {

            return (
                <WrappedComponent
                    defaultValue = {this.state.value}
                    controlState = {this.state.controlState}
                    controlStateMsg = {this.state.controlStateMsg}
                    onChange = {this.onComponentChange}
                />
            );
        }
    }

}

const schema = {
    convert: { // приведение получаемого "значения виджета" к требуемому типу
        action: value => value,
        msg: 'Не могу сконвертить'
    },
    hint: {
        msg: 'Hint tolltip for everyone'
    },
}

export const Input = getWrappedFormBodyComponent(BasedInput, schema);
