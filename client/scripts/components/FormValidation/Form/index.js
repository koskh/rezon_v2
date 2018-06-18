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

        // if (!this.formComponents['FormBody'])
        //     return;
        //
        // const test = this.formComponents['FormBody'].validate();
        // console.log('bodyForm.validate(): ', test);
        //
        // this.formComponents['FormBody'].setErrors(test);
        //
        // const isBodyValid = this.formComponents['FormBody'].isValid(test);
        // console.log('isFormValid:', isBodyValid);

        this._toggleOkBtn(isValid);
    };

    // _onFormFooterChange = () =>{
    //     debugger;
    // };

    _onOkClick = () => {
        // const test = this.formComponents['FormBody'] && this.formComponents['FormBody'].validate();
        // console.log('bodyForm.validate(): ', test);
        //
        // this.formComponents['FormBody'] && this.formComponents['FormBody'].setErrors(test);


        // this.formComponents['FormBody'] && this.formComponents['FormBody'].isValid();
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
