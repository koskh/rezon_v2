// @flow

// import _ from 'lodash';
import * as React from 'react';
// import styles from './index.pcss';


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
        const { title } = this.props;

        return (
            <button onClick={e => e.target.innerHTML = 'Bye'}>
                {title}
            </button>
        );
    }
}

export default DumbBtn;
