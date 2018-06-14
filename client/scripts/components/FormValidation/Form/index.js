// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

type Props = {
    children?: React.Node
}

class Form extends React.Component<Props> {
    props: Props;

    _renderChildren = (props: any) => {
        return React.Children.map(props.children, child => {
            return React.cloneElement(child, {onChange: this._onFormBodyChange});
        });
    };

    _onFormBodyChange = (opt: any) =>{
        const {isFormValid} = opt;
        // debugger;
        console.log('isFormValid:', isFormValid)
    };

    // _onFormFooterChange = () =>{
    //     debugger;
    // };

    render() {
        return (
            <form className={styles.form}>
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {onChange: this._onFormBodyChange});
                })}
            </form>
        );
    }
}

export default Form;
