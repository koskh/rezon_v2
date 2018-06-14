// @flow

import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';

import BasedInput from './Input';

import type {componentSchemaType} from "../../../Validation/schema";

type controlStateType = '' | 'is-hint' | 'is-valid' | 'is-invalid'


type propsType = {
    id?: string,
    onRef?: Function,
    defaultValue?: any,
    onChange?: Function,
    schema?: componentSchemaType
}

type stateType = {
    value: any,
    controlState: controlStateType,
    controlStateMsg: string
}

function getWrappedFormBodyComponent(WrappedComponent: any): React.Element {

    return class FormBodyComponent extends React.Component<propsType, stateType> {
        props: propsType;

        static defaultProps: propsType = {
            id: '',
            onChange: v=>v
        };

        state: stateType = {
            value: this.props.defaultValue,
            controlState:  _.get(this.props, 'schema.hint.msg') && 'is-hint' || '',
            controlStateMsg: _.get(this.props, 'schema.hint.msg') || ''
        };

        componentDidMount() {
            this.props.onRef && this.props.onRef(this)
        }
        componentWillUnmount() {
            this.props.onRef && this.props.onRef(undefined)
        }

        _onComponentChange = ev => {
            let value = this._getConvertedValue(ev.target.value);
            let {controlState, controlStateMsg} = this._getControlStateForInputRules(value);
            this.setState(
                {value, controlState, controlStateMsg},
                () => this.props.onChange && this.props.onChange({id: this.props.id, value, controlState, controlStateMsg})
            );

        };

        getControlValue(): any{
            return this.state.value;
        }

        getControlState(): controlStateType {
            return this.state.controlState;
        }

        validateInputRules(): any {
            let value = this._getConvertedValue(this.state.value);
            let {controlState, controlStateMsg} = this._getControlStateForInputRules(value);
            this.setState({controlState, controlStateMsg});
            return {controlState, controlStateMsg};
        }

        validateLogicRules(fields: any): any {
            let value = this._getConvertedValue(this.state.value);
            let {controlState, controlStateMsg} = this._getControlStateForLogicRules(fields);
            this.setState({controlState, controlStateMsg});
            return {controlState, controlStateMsg};
        }


        _getConvertedValue = (val: any): any => {
            const converter = _.get(this.props, 'schema.convert.action');
            return converter ? converter(val) : val;
        };

        _getControlStateForInputRules = (val: any): {controlState: controlStateType, controlStateMsg: string} => {
            const inputRules = _.get(this.props, 'schema.inputRules');

            let controlState = _.get(this.props, 'schema.isValid.msg') && 'is-valid' || _.get(this.props, 'schema.hint.msg') && 'is-hint' || '';
            let controlStateMsg = _.get(this.props, 'schema.isValid.msg') || _.get(this.props, 'schema.hint.msg') || '';

            _.each(inputRules, v => {
                if (!v.validate(val)) {
                    controlState = 'is-invalid';
                    controlStateMsg = v.msg;
                    return false;
                }
            });

            return {controlState, controlStateMsg};
        };

        _getControlStateForLogicRules = (fields: any): {controlState: controlStateType, controlStateMsg: string} => {
            const logicRules = _.get(this.props, 'schema.logicRules');

            let controlState = _.get(this.props, 'schema.isValid.msg') && 'is-valid' || _.get(this.props, 'schema.hint.msg') && 'is-hint' || '';
            let controlStateMsg = _.get(this.props, 'schema.isValid.msg') || _.get(this.props, 'schema.hint.msg') || '';

            _.each(logicRules, v => {
                if (!v.validate(fields)) {
                    controlState = 'is-invalid';
                    controlStateMsg = v.msg;
                    return false;
                }
            });

            return {controlState, controlStateMsg};
        };

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


export const Input = getWrappedFormBodyComponent(BasedInput);
