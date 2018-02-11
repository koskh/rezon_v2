// @flow
import { connect } from 'react-redux';

// import { makeFetch, cancelFetch} from './store/actions/fetch';


import Component from './Component';

function mapStateToProps(state: State) {
    return state;
}

export default connect(mapStateToProps, { })(Component);
