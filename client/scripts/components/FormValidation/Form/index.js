// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';


type Props = {
    formHeader?: React.Element<any>,
    formBody?: React.Element<any>,
    formFooter?: React.Element<any>
}
//
// type DefaultProps = {
//     formHeader: null,
//     formBody: null,
//     formFooter: null
// };

class Form extends React.Component<Props> {
    props: Props;

    static defaultProps: Props = {
        formHeader: null,
        formBody: null,
        formFooter: null
    };

    // componentDidMount() {
    //
    // }
    //
    // componentWillUnmount() {
    //
    // }


    render() {

        const {formHeader, formBody, formFooter} = this.props;

        return (
            <form className={styles.form}>
                {formHeader}
                {formBody}
                {formFooter}
            </form>
        );
    }
}

export default Form;
