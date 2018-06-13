// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';


type Props = {
    title: string
}
//
// type DefaultProps = {
//     data: Object
// };

class DumbBtn extends React.Component<Props> {
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

        return (
            <form className={styles.form}>

                {/*Компоненты ввода*/}
                <div className={styles.body}>
                    <div>
                        <input />
                    </div>
                    <div>
                        <input />
                    </div>
                </div>

                {/*Компоненты футера*/}
                <div className={styles.footer}>

                    <button> OK </button>
                    <button> Cancel </button>

                </div>

            </form>
        );
    }
}

export default DumbBtn;
