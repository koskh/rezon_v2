// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';


type Props = {
    children?: React.Node
}

const defaultProps: Props = {
    children: null
};


const FormBody = (props: Props) => {
    return (
        <div className={styles.FormBody}>
            {props.children}
        </div>
    )
};

FormBody.defaultProps = defaultProps;

export default FormBody;
