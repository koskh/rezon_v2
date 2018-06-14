// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';


type Props = {
    children?: React.Node,
    onOkClick?: Function,
    onCancelClick?: Function,
}

class FormFooter extends React.Component<Props> {
    props: Props;

    _onOkClick = (e: any) => {
        e.stopPropagation();
        e.preventDefault();

        this.props.onOkClick && this.props.onOkClick()
    };

    _onCancelClick = (e: any) => {
        e.stopPropagation();
        e.preventDefault();

        this.props.onCancelClick && this.props.onCancelClick()
    };

    render() {
        return (
            <div className={styles.FormFooter}>
                {this.props.children}
                <button onClick={this._onOkClick}> OK </button>
                <button onClick={this._onCancelClick}> Cancel </button>
            </div>
        );
    }
}

export default FormFooter;
