// @flow

import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

import type {formSchemaType} from "../../Validation/schema";

type controlStateType = '' | 'is-hint' | 'is-valid' | 'is-invalid'
type formBodyComponentsType = {[key: string]: React.Component<*>}

type propsType = {
    formSchema?: formSchemaType,
    children?: React.Node,
    onChange?: Function,
    onRef?: Function
}

// type stateType = {
//     formBodyComponents: {[key: string]: {controlState: controlStateType}}
// }


class FormBody extends React.Component<propsType> {
    props: propsType;

    static defaultProps: propsType = {
        onChange: x=>x
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

    _renderChildren = (props: any) => {
        return React.Children.map(props.children, child => {
            const id = child.props.id || _.uniqueId('frm-cmp-vld_');
            const defaultValue = child.props.defaultValue;
            const schema = child.props.schema || _.get(this.props, 'formSchema')[id];

            return  React.cloneElement(child, {
                id,
                onRef: ref => { this.formBodyComponents[id] = ref},
                onChange: this._onComponentChange,
                defaultValue,
                schema
            });
        });
    };

    _onComponentChange = (opt: any) => {
        // const isFormValid = this._isFormBodyValid();
        this.props.onChange && this.props.onChange(this);
    };

    _isFormBodyValid = (): boolean => {
        let isValid = true;

        _.each(this.formBodyComponents, v => {
            if (v.getControlState() === 'is-invalid') 
                return isValid = false;
        });

        return isValid;
    };

    isFormValid(): boolean {
        return this._isFormBodyValid();
    }

    validateFormBody = () => {

    }

    render() {
        return (
            <div className={styles.FormBody}>
                {this._renderChildren(this.props)}
            </div>
        );
    }
}

export default FormBody;
