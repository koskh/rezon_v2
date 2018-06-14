// @flow

import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';

import BasedInput from './Input';

import type {Schema} from '../../../Validation/schema';

type controlStateType = '' | 'is-hint' | 'is-valid' | 'is-invalid'


type propsType = {
    id?: string,
    defaultValue?: any,
    onChange?: Function
}

type stateType = {
    schema?: Schema,
    value: any,
    controlState: controlStateType,
    controlStateMsg: string
}

function getWrappedFormBodyComponent(WrappedComponent: any, schema: any = {}): React.Element {

    return class FormBodyComponent extends React.Component<propsType, stateType> {
        props: propsType;

        static defaultProps: propsType = {
            id: '',
            defaultValue: null,
            onChange: v=>v
        };

        state: stateType = {
            schema: schema,
            value: this.props.defaultValue,
            controlState:  _.get(schema, 'hint.msg') && 'is-hint' || '',
            controlStateMsg: _.get(schema, 'hint.msg') || ''
        };

        _getConvertedValue = (val: any): any => {
            return _.get(this.state.schema, 'convert.action')(val) || val;
        };

        _getControlState = (val: any): {controlState: controlStateType, controlStateMsg: string} => {
            const inputRules = _.get(this.state.schema, 'inputRules');

            let controlState = _.get(this.state.schema, 'isValid.msg') && 'is-valid' || _.get(this.state.schema, 'hint.msg') && 'is-hint' || '';
            let controlStateMsg = _.get(this.state.schema, 'isValid.msg') || _.get(this.state.schema, 'hint.msg') || '';

            _.each(inputRules, v => {
                if (!v.validate(val)) {
                    controlState = 'is-invalid';
                    controlStateMsg = v.msg;
                }
            });

            return {controlState, controlStateMsg};
        };

        _onComponentChange = ev => {
            let value = this._getConvertedValue(ev.target.value);
            let {controlState, controlStateMsg} = this._getControlState(value);

            this.setState({value, controlState, controlStateMsg});

            this.props.onChange && this.props.onChange({id: this.props.id, value, controlState, controlStateMsg});
        };

        getValue(): any{
            return this.state.value;
        }

        getState(): controlStateType {
            return this.state.controlState;
        }

        render() {

            return (
                <WrappedComponent
                    id={this.props.id}
                    defaultValue={this.state.value}
                    controlState={this.state.controlState}
                    controlStateMsg={this.state.controlStateMsg}
                    onChange={this._onComponentChange}
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
    inputRules: [
        {
            validate: value => value.length > 0,
            msg: 'Не может быть пустым'
        },
        {
            validate: value => value.length < 5,
            msg: 'Не может быть больше 5 символов'
        }
    ]
}

export const Input = getWrappedFormBodyComponent(BasedInput, schema);
