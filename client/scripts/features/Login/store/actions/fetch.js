// @flow
import _ from 'lodash';

import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, FETCH_CANCEL } from '../constants';
import { createAction } from '../../../../services/storage/utilities';

import { user } from '../../../../services/api/index';

export const request: ThunkAction = createAction(FETCH_REQUEST);
export const success: ThunkAction = createAction(FETCH_SUCCESS);
export const failure: ThunkAction = createAction(FETCH_FAILURE);
export const cancel: ThunkAction = createAction(FETCH_CANCEL);


const Requests: Array<AjaxRequest> = [];

export function makeFetch(): Function {
    return async (dispatch: Dispatch): Promise<any> => {
        dispatch(request({ error: null }));
        //
        try {
            const request = user.token({userId: 'user123', method: 'post', data: { userId: 'user123' }});
            Requests.push(request);

            const response = await request.promise;

            debugger;

            dispatch(success({ data: response.data.data }));
        } catch (error) {

            debugger;

            dispatch(failure({ error }));
        }
    };
}


export function cancelFetch() {
    return () => {
        _.each(Requests, req => {
            req.cancel('Operation canceled by the user.');
        });
    };
}