// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

type Props = {
    children?: React.Node
}

class Form extends React.Component<Props> {
    props: Props;


    render() {
        return (
            <form className={styles.form}>
                {this.props.children}
            </form>
        );
    }
}

export default Form;
