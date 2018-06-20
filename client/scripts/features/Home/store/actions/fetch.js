// @flow
import _ from 'lodash';
import axios from 'axios';
import serialize from '../../../../services/utils/serialize';

import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE, FETCH_CANCEL} from '../constants';
import {createAction} from '../../../../services/storage/utilities';

import {user} from '../../../../services/api/index';

const request: ThunkAction = createAction(FETCH_REQUEST);
const success: ThunkAction = createAction(FETCH_SUCCESS);
const failure: ThunkAction = createAction(FETCH_FAILURE);
const cancel: ThunkAction = createAction(FETCH_CANCEL);



const Requests: Array<AjaxRequest> = [];

export function makeFetch(opt: any): Function {
    // const {email, password} = opt;
    // const grant_type = 'password';
    // const username = email;
    // JSON.stringify({email, password, grant_type})


    return async (dispatch: Dispatch): Promise<any> => {
        dispatch(request({error: null}));
        //
        try {
            // const request = user.token({
            //     method: 'post',
            //     headers: {'Content-type': 'application/x-www-form-urlencoded'},
            //     data: serialize({email, password, grant_type, username})
            // });
            //
            // Requests.push(request);
            //
            // const response = await request.promise;
            //
            // dispatch(authSet({
            //     access_token: response.data.data.access_token,
            //     refresh_token: response.data.data.refresh_token,
            // }));


            const userInfo =  user.info();
            Requests.push(userInfo);
            const response = await userInfo.promise;

            // debugger;

            dispatch(success({data: response.data.data}));
        } catch (error) {

            // debugger;

            dispatch(failure({error}));
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
