// @flow

import * as React from 'react';
import cn from 'classnames';

// import styles from './index.pcss';

type Props =
    {
        defaultValue?: string,
        options: {},
        controlState: string
        // onClick?: Function,
        // name?: string,
        // children?: React.Node
    }

// type DefaultProps = {
//     name: ?string,
//     children: React.Node
// };

const defaultProps: Props = {
    defaultValue: '',
    options: {},
    controlState: 'is-hint'
};


const Input = (props: Props) => {
    return (
        <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-20">
                <input type="text" className= {cn('form-control', props.controlState)} id="" placeholder="" defaultValue={props.defaultValue} />
                <div className="hint-feedback">Well never share your email with anyone else.</div>
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Please provide a valid zip.</div>
            </div>
        </div>
    )
};

Input.defaultProps = defaultProps;

export default Input;
