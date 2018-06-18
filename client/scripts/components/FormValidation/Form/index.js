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

    _onFormBodyChange = (formBodyComponent: any) =>{
        // const isFormValid = formBodyComponent.isFormValid();

        // console.log('isFormValid:', isFormValid)
    };

    // _onFormFooterChange = () =>{
    //     debugger;
    // };

    _onOkClick = () => {
        console.log('bodyForm.validate(): ', this.formComponents['FormBody'] && this.formComponents['FormBody'].validate());
        // this.formComponents['FormBody'] && this.formComponents['FormBody'].isValid();
        console.log('getFormBodyValue ', this.formComponents['FormBody'] && this.formComponents['FormBody'].getFormBodyValue()) ;

    };

    _onCancelClick = () => {
        debugger;
    };

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
