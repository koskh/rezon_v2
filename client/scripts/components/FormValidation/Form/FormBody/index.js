// @flow

import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';


type Props = {
    children?: React.Node
}


class FormBody extends React.Component<Props> {
    props: Props;

    static defaultProps: Props = {
        children: null
    };

    // componentDidMount() {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }

    _renderChildren = (props: any) => {
        return React.Children.map(props.children, child => {
            const id = child.props.id || _.uniqueId('frm-cmp-vld_');
            //
            // const name: string = child.props.name;
            // const model = this.state.model;
            //
            // const modelValue = model.data[name];
            // const defaultValue = child.props.defaultValue;
            //
            // if (!_.isNil(name) && _.isNil(modelValue) && !_.isNil(defaultValue)) // заполняем модель формы внешними данными
            //     model.data[name] = defaultValue;
            //
            // if (child.props.isValidated) {
            //     const validationState: validationStates = validator.getValidationState(name, model);
            //     const feedbackText: string = validator.getFeedbackText(name, model);
            //
            //     return React.cloneElement(child, { id, onChange: this.onFormChange, validationState, feedbackText });
            // }

            return React.cloneElement(child, { id});
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
