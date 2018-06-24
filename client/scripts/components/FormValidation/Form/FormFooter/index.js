// @flow

// import _ from 'lodash';
import * as React from 'react';
import styles from './index.pcss';


type propsType = {
    isOkDefaultEnabled?: boolean,
    onOkClick?: Function,
    onCancelClick?: Function,
    onRef?: Function,
    isPending?: boolean,
    children?: React.Node,
}

type stateType =
{
    isOkEnabled: boolean
}

class FormFooter extends React.Component<propsType, stateType> {
    props: propsType;

    static defaultProps: propsType = {
        onChange: x => x
    };

    state: stateType = {
        isOkEnabled: this.props.isOkDefaultEnabled || false
    };

    componentDidMount() {
        this.props.onRef && this.props.onRef(this)
    }

    componentWillUnmount() {
        this.props.onRef && this.props.onRef(undefined)
    }

    toggleOkBtn(isOkEnabled?: boolean) {
        this.setState({isOkEnabled: (isOkEnabled === undefined ? !this.state.isOkEnabled : isOkEnabled)});
    }

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
        const {isPending} = this.props;

        return (
            <div className={styles.FormFooter}>
                {this.props.children}
                <button onClick={this._onOkClick} disabled={!this.state.isOkEnabled || isPending}> OK</button>
                <button onClick={this._onCancelClick}> Cancel</button>
            </div>
        );
    }
}

export default FormFooter;
