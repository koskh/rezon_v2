// @flow
import * as types from '../constants';
import { createReducer, nextState } from '../../../../services/storage/utilities';

const initialState: any = {
    access_token: null,
    refresh_token: null,
    token_type: 'Bearer'
};

export const actions: ReducerActions = {
    [types.AUTH_SET]: (state, { payload }) => nextState(state, {...payload }),
    [types.AUTH_GET]: (state, { payload }) => nextState(state, {...payload }),
    [types.AUTH_RESET]: state => nextState(state, {...initialState})
};

export default createReducer(initialState, actions);
