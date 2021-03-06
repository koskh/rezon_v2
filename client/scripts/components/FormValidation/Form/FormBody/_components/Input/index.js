// @flow

import * as React from 'react';
import cn from 'classnames';

// import styles from './index.pcss';

const feedbackClasses = {
    'is-hint': 'hint-feedback',
    'is-valid': 'valid-feedback',
    'is-invalid': 'invalid-feedback'
};


type Props =
    {
        defaultValue?: string,
        options: {},
        controlState: string,
        controlStateMsg: string,
        // onClick?: Function,
        onChange?: Function,
        id?: string,
        placeholder?: string,
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
    id:'',
    onChange: () => {
    }
};


const Index = (props: Props) => {

    return (
        <div className="form-group row">
            <label htmlFor={props.id} className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-20">
                <input type="text"
                    className={cn('form-control', props.controlState)}
                    id={props.id}
                    placeholder={props.placeholder}
                    defaultValue={props.defaultValue}
                    onChange={props.onChange}
                />
                <div className={cn(feedbackClasses[props.controlState])}>{props.controlStateMsg}</div>
            </div>
        </div>
    )
};

Index.defaultProps = defaultProps;

export default Index;
