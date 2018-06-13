// @flow

// import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';

import BasedInput from './Input';

type controlStateType = '' | 'is-hint' | 'is-valid' | 'is-invalid'

const DefaultControlState: controlStateType = 'is-hint';

type propsType = {
    defaultValue?: any
}

type stateType = {
    controlState: controlStateType
}

function getWrappedFormBodyComponent(WrappedComponent: any): React.Element  {

    return class FormBodyComponent extends React.Component<propsType,stateType> {
        props: propsType;
        state: stateType = {
            controlState: DefaultControlState
        };

        render() {

            return (
                <WrappedComponent
                    defaultValue = {this.props.defaultValue}
                    controlState = {this.state.controlState}
                />
            );
        }
    }

}

export const Input = getWrappedFormBodyComponent(BasedInput);
