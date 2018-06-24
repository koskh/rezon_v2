import store from '../storage/store';
import {http} from "./index";

import history from './history';

import {authSet} from "../auth/store/actions";
import {user} from '../../services/api/index';
import serialize from "../utils/serialize";

// import history from 'history';
// import errors from '../constants/errors';
// import getErrorType from '../utilities/get-error-type';
//
// const errorMessages = {
//     NETWORK_ERROR: 'Отсутствует подключение к сети',
//     NOT_FOUND: 'Запрашиваемый ресурс отсутствует на сервере'
// };
//

// import history from '../history';

const statuses = {
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    requestTimeout: 408,
    internalServerError: 500,
    badGateway: 503
};

// export default {
export const responseErrorHandler = error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;

        const auth = store.getState()['auth'];
        const refresh_token = auth['refresh_token'];

        const request = user.token({
            method: 'post',
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
            data: serialize({grant_type: 'refresh_token', 'refresh_token': refresh_token})
        });

        return request.promise
            .then( response =>{

                const {access_token, refresh_token, token_type} =  response.data;

                store.dispatch(authSet({
                    access_token,
                    refresh_token,
                    token_type
                }));

                originalRequest.headers['Authorization'] =`${token_type} ${access_token}`;

                return http(originalRequest);
            },  error => {

                store.dispatch(authSet({
                    access_token: null,
                    refresh_token: null,
                    token_type: null
                }));

                history.push('/login');

                // debugger;
            })
    }
    
    // if (error.response) {
    // if (error.response.status === statuses.notFound)
    // history.push('/');

    // if (error.response.status === statuses.unauthorized)
    // history.push(`/login?return=${window.location.pathname}`);

    // if (error.response.status === statuses.badRequest)
    //     history.push(`/login?return=${window.location.pathname}`);

    //
    //     let name = error.response.statusText;
    //
    //     if (error.message === 'Network Error') {
    //         name = error.message;
    //     }
    //
    //     const type = getErrorType(name);
    //     const message = error.response.data;
    //
    //     return Promise.reject({ name, type, message: message.length ? message : (errorMessages[type] || '') });
    // }

    return Promise.reject(error);
};
// };

export const requestsConfigHandler = config => {
    const {token_type, access_token} =  store.getState().auth;
    config.headers.common['Authorization'] = `${token_type} ${access_token}`;

    return config;
};

// const requestsErrorHandler = (error) => {
//
// };


// export default { requestsConfigHandler, responseErrorHandler};
