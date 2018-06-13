// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';


type Props = {
   // title: string
}

class FormFooter extends React.Component<Props> {
    props: Props;

    render() {
        // const { title } = this.props;

        return (
            <div className={styles.FormFooter}>

                <button> OK </button>
                <button> Cancel </button>

            </div>
        );
    }
}

export default FormFooter;
