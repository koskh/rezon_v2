// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';

type Props = {
   title: string
}

class FormHeader extends React.Component<Props> {
    props: Props;

    render() {
        const { title } = this.props;

        return (
            <div className={styles.FormBody}>
                <div>
                    <input />
                </div>
                <div>
                    <input />
                </div>
            </div>
        );
    }
}

export default FormHeader;
