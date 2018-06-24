// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

type propsType = {
    makeFetch?: Function,
    cancelFetch?: Function,
    isPending?: boolean,
    children?: React.Node
}

class Form extends React.Component<propsType> {
    props: propsType;

    static defaultProps: propsType = {
        makeFetch: x => x,
        cancelFetch: x => x
    };

    formComponents: any = {}; // рнфа на компоненты формы

    // _renderChildren = (props: any) => {
    //     return React.Children.map(props.children, child => {
    //         return React.cloneElement(child, {onChange: this._onFormBodyChange});
    //     });
    // };

    _onFormBodyChange = (opt: {isValid: boolean}) => {
        const {isValid} = opt;
        this._toggleOkBtn(isValid);
    };

    // _onFormFooterChange = () =>{
    //     debugger;
    // };

    _onOkClick = () => {
        const bodyValues = this.formComponents['FormBody'] && this.formComponents['FormBody'].getFormBodyValues();
        console.log('getFormBodyValues ', bodyValues) ;

        this.props.makeFetch && this.props.makeFetch(bodyValues);
    };

    _onCancelClick = () => {
        this.props.cancelFetch && this.props.cancelFetch();
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
                        isPending: this.props.isPending,
                        onRef: ref => { this.formComponents[childName] = ref},
                    });
                })}
            </form>
        );
    }
}

export default Form;
