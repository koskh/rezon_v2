// @flow

import * as React from 'react';
import cn from 'classnames';

import styles from './index.pcss';

const feedbackClasses = {
    'is-hint': 'hint-feedback',
    'is-valid': 'valid-feedback',
    'is-invalid': 'invalid-feedback'
};


type propsType =    {
        id?: string,
        defaultValue?: string,
        placeholder?: string,
        controlState: string,
        controlStateMsg: string,
        // onClick?: Function,
        onChange?: Function,
    }

type stateType = {
    isOpen: boolean
}


class Password extends React.Component<propsType, stateType> {
    props: propsType;

    static defaultProps: propsType = {
        id: '',
        defaultValue: '',
        controlState: '',
        controlStateMsg: '',
        onChange: () => {
        }
    };

    state: stateType = {
        isOpen: false
    };

    onIconClick = () =>{
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        const {id, controlState, controlStateMsg, placeholder, defaultValue, onChange}   = this.props;
        const {isOpen} = this.state;

        return(
            <div className="form-group row">
                <label htmlFor={id} className="col-sm-4 col-form-label">Пароль
                </label>
                <div className="col-sm-20">
                    <input type="password"
                        className={cn('form-control', controlState)}
                        id={id}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        onChange={onChange}
                    />
                    <i
                        className={cn(
                            styles.iconPassword,
                            (isOpen ? styles.iconPasswordOpen : styles.iconPasswordClosed))}
                        onClick={this.onIconClick}
                    />
                    <div className={cn(feedbackClasses[controlState])}>{controlStateMsg}</div>
                </div>
            </div>
        )
    }
}

export default Password;
