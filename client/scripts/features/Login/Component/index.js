// @flow

import * as React from 'react';

import Login from '../../../components/Login/index';

export default class FeatureLogin extends React.Component<*> {
    componentWillMount() {
        document.title = 'Login page';
        this.props.makeFetch();
    }


    componentWillUnmount() {
        this.props.cancelFetch();
        // this.props.resetStore();
        // debugger;
    }

    render() {
        return (
            <article>
                <Login/>
            </article>
        );
    }
}
