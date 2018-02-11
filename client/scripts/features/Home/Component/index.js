// @flow

import * as React from 'react';
// import Header from '../../components/page-header';

export default class extends React.Component<*> {
    componentWillMount() {
        document.title = 'Home page';
    }

    render() {
        // debugger;
        // const {history} = this.props;
        // history.push('login');

        return (
            <h1>Main page </h1>
        );
    }
}
