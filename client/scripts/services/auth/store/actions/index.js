// @flow
// import _ from 'lodash';

import {createAction} from '../../../../services/storage/utilities';
import {AUTH_SET, AUTH_GET, AUTH_RESET} from '../constants';

const set: any = createAction(AUTH_SET);
const get: any = createAction(AUTH_GET);
const reset: any = createAction(AUTH_RESET);

export function authSet(opt: Object) {
    return  (dispatch: Dispatch) =>{
        dispatch(set(opt));
    }
}
