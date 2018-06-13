// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';


type Props = {
    FormHeader: any,
    FormBody: any,
    FormFooter: any
}
//
// type DefaultProps = {
//     data: Object
// };

class Form extends React.Component<Props> {
    props: Props;

    // static defaultProps: DefaultProps = {
    //     data: {}
    // };

    // componentDidMount() {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }


    render() {

        const {FormHeader, FormBody, FormFooter} = this.props;

        return (
            <form className={styles.form}>

                {/*Заголовк формы*/}
                <FormHeader />
                {/*Компоненты ввода*/}
                <FormBody/>
                {/*Компоненты футера*/}
                <FormFooter/>

            </form>
        );
    }
}

export default Form;
