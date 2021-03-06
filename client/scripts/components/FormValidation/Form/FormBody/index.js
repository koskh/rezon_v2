// @flow

import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

type formBodyComponentsType = { [key: string]: React.Component<*> }

type propsType = {
    formSchema?: formSchemaType,
    children?: React.Node,
    onChange?: Function,
    isPending?: boolean,
    onRef?: Function
}

// type stateType = {
//     formBodyComponents: {[key: string]: {controlState: controlStateType}}
// }


class FormBody extends React.Component<propsType> {
    props: propsType;

    static defaultProps: propsType = {
        onChange: x => x
    };

    // state: stateType = {
    // formBodyComponents: {}
    // };

    formBodyComponents: formBodyComponentsType = {}; // состояние вложенных компонентов

    componentDidMount() {
        this.props.onRef && this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef && this.props.onRef(undefined)
    }


    validate = (): validateResultsType => {
        let resultValidate = {};

        let isInputValid = true;

        _.each(this.formBodyComponents, (v, k) => { //валидац введенных значений
            resultValidate[k] = v.validateInputRules(v.componentValue);
            if (resultValidate[k].controlState === "is-invalid")
                isInputValid = false
        });

        if (isInputValid) {
            let fields = this.getFormBodyValues();
            _.each(this.formBodyComponents, (v, k) => { //валидац логических значений
                resultValidate[k] = v.validateLogicRules(fields);
            });
        }

        return resultValidate;
    };

    isValid(resultValidate?: validateResultsType): boolean {
        resultValidate === undefined? this.validate() : resultValidate;
        let isFinded = _.filter(resultValidate, {controlState: 'is-invalid'});
        return isFinded.length === 0;
    }

    getFormBodyValues = (): bodyValuesType => {
        let fields = {};
        _.each(this.formBodyComponents, (v, k) => {
            fields[k] = v.componentValue;
        });

        return fields;
    };

    setErrors = (validateResults: validateResultsType) => {
        _.each(validateResults, (v, k) => {
            this.formBodyComponents[k].componentState = validateResults[k];
        })

    };

    _onComponentChange = () => {
        if(!this._isAllFieldsHasInput()) //ожидаем, что все поля "изменялись"
            return;

        let resultValidate =  this.validate();
        let isValid = this.isValid(resultValidate);

        this.setErrors(resultValidate);

        this.props.onChange && this.props.onChange({isValid});
    };

    _isAllFieldsHasInput = (): boolean => {
        let allFieldsHasInput = true;

        _.each(this.formBodyComponents, v => { //валидац введенных значений
            if (v.componentValue === undefined){
                allFieldsHasInput = false;
                return false;
            }

        });

        return allFieldsHasInput
    };

    _renderChildren = (props: any) => {
        return React.Children.map(props.children, child => {
            const id = child.props.id || _.uniqueId('frm-cmp-vld_');
            const defaultValue = child.props.defaultValue;
            const schema = child.props.schema || _.get(this.props, 'formSchema')[id];

            return React.cloneElement(child, {
                id,
                onRef: ref => {
                    this.formBodyComponents[id] = ref
                },
                onChange: this._onComponentChange,
                defaultValue,
                schema
            });
        });
    };

    render() {
        return (
            <div className={styles.FormBody}>
                {this._renderChildren(this.props)}
            </div>
        );
    }

}

export default FormBody;
