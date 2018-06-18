// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

type Props = {
    children?: React.Node
}

class Form extends React.Component<Props> {
    props: Props;

    formComponents: any = {}; // рнфа на компоненты формы

    _renderChildren = (props: any) => {
        return React.Children.map(props.children, child => {
            return React.cloneElement(child, {onChange: this._onFormBodyChange});
        });
    };

    _onFormBodyChange = (opt: {isValid: boolean}) => {
        const {isValid} = opt;
        this._toggleOkBtn(isValid);
    };

    // _onFormFooterChange = () =>{
    //     debugger;
    // };

    _onOkClick = () => {
        console.log('getFormBodyValues ', this.formComponents['FormBody'] && this.formComponents['FormBody'].getFormBodyValues()) ;

    };

    _onCancelClick = () => {
        // debugger;
    };

    _toggleOkBtn(isOkEnabled: boolean){
        this.formComponents['FormFooter'] && this.formComponents['FormFooter'].toggleOkBtn(isOkEnabled)
    }


    render() {
        return (
            <form className={styles.form}  autoComplete="off">
                {React.Children.map(this.props.children, child => {
                    const childName = child.type.name;

                    return React.cloneElement(child, {
                        onOkClick: this._onOkClick,
                        onCancelClick: this._onCancelClick,
                        onChange: this._onFormBodyChange,
                        onRef: ref => { this.formComponents[childName] = ref},
                    });
                })}
            </form>
        );
    }
}

export default Form;
