// @flow

// import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';

import BasedInput from './Input';

// type controlStateType = 'is-hint' | 'is-valid' | 'is-invalid'

type Props = {
    defaultValue?: any
}

function getWrappedFormBodyComponent(WrappedComponent: any): React.Element  {

    return class FormBodyComponent extends React.Component<Props> {
        props: Props;

        render() {
            return (
                <WrappedComponent
                    defaultValue={this.props.defaultValue}
                    controlState = 'is-hint'
                />
            );
        }
    }

}

export const Input = getWrappedFormBodyComponent(BasedInput);
