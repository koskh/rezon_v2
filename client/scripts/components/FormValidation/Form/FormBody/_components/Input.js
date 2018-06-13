// @flow

import * as React from 'react';
import cn from 'classnames';

// import styles from './index.pcss';

type Props =
    {
        defaultValue?: string,
        options: {},
        controlState: string,
        controlStateMsg: string,
        // onClick?: Function,
        onChange?: Function,
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
    controlState: '',
    controlStateMsg: '',
    onChange: () => {
    }
};


const Input = (props: Props) => {
    return (
        <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-20">
                <input type="text"
                    className={cn('form-control', props.controlState)}
                    id=""
                    placeholder=""
                    defaultValue={props.defaultValue}
                    onChange={props.onChange}
                />
                <div className="hint-feedback">{props.controlStateMsg}</div>
                <div className="valid-feedback">{props.controlStateMsg}</div>
                <div className="invalid-feedback">{props.controlStateMsg}</div>
            </div>
        </div>
    )
};

Input.defaultProps = defaultProps;

export default Input;
