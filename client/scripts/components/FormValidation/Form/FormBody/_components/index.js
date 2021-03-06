// @flow

import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';

import BasedInput from './Input';
import BasedPassword from './Password';


type propsType = {
    id?: string,
    placeholder?: string,
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
            onChange: v => v
        };

        state: stateType = {
            value: this.props.defaultValue,
            controlState: _.get(this.props, 'schema.hint.msg') && 'is-hint' || '',
            controlStateMsg: _.get(this.props, 'schema.hint.msg') || ''
        };

        componentDidMount() {
            this.props.onRef && this.props.onRef(this)
        }

        componentWillUnmount() {
            this.props.onRef && this.props.onRef(undefined)
        }


        get componentValue(): any {
            return this.state.value;
        }

        get componentState(): controlStateType {
            return this.state.controlState;
        }

        set componentValue(value): void {
            this.setState(value);
        }

        set componentState(validateState: validateResultType): void {
            this.setState({...validateState});
        }



        validateInputRules(value): any {
            let val = this._getConvertedValue(value);
            return this._getControlStateForInputRules(val);

        }

        validateLogicRules(fields: any): any {
            return this._getControlStateForLogicRules(fields);
        }



        _onComponentChange = ev => {
            let value = this._getConvertedValue(ev.target.value);
            let {controlState, controlStateMsg} = this._getControlStateForInputRules(value);
            this.setState(
                {value, controlState, controlStateMsg},
                () => this.props.onChange && this.props.onChange(this)
            );
            // this.setState(
            //     {value},
            //     () => this.props.onChange && this.props.onChange(this)
            // );

        };

        _getConvertedValue = (val: any): any => {
            const converter = _.get(this.props, 'schema.convert.action');
            return converter ? converter(val) : val;
        };

        _getControlStateForInputRules = (val: any): validateResultType => {
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

        _getControlStateForLogicRules = (fields: any): validateResultType => {
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
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.defaultValue}
                    controlState={this.state.controlState}
                    controlStateMsg={this.state.controlStateMsg}
                    onChange={this._onComponentChange}
                />
            );
        }
    }

}


export const Input = getWrappedFormBodyComponent(BasedInput);
export const Password = getWrappedFormBodyComponent(BasedPassword);
