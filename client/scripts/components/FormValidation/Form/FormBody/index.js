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
    onChange?: Function
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

    _renderChildren = (props: any) => {
        return React.Children.map(props.children, child => {
            const id = child.props.id || _.uniqueId('frm-cmp-vld_');
            const defaultValue = child.props.defaultValue;
            const schema = child.props.schema || _.get(this.props, 'formSchema')[id];

            this.formBodyComponents[id] = React.cloneElement(child, {id, onChange: this._onComponentChange, defaultValue, schema});

            return this.formBodyComponents[id];
        });
    };

    _onComponentChange = () => {
        this.props.onChange && this.props.onChange();
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
