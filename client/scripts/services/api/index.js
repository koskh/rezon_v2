// @flow
import axios from 'axios';
import interceptors from './interceptors';
import urls from './urls';

const http = axios.create({
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Cache-control': 'no-cache',
        'If-Modified-Since': 'Mon, 26 Jul 1997 05:00:00 GMT',
        'Authorization': 'Bearer',
        Pragma: 'no-cache'
    },
    timeout: 60000,
    withCredentials: true
});

// http.interceptors.request.use(undefined, interceptors.before);
http.interceptors.response.use(undefined, interceptors.failure);

const createAjaxRequest = (url: string, ...args0: Array<any>): Function => ({ ...args1 }: Object): AjaxRequest => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const promise = http({ url: urls(url, ...args0), cancelToken: source.token, ...args1 });
    const cancel = source.cancel;
    return { promise, cancel };
};

type ApiRequest = (...args: Array<any>) => AjaxRequest;

export const common: {[string]: ApiRequest} = {
    references: () => createAjaxRequest('references')(),
    // references2: options => createAjaxRequest('references2', options.userId)(options),
};

export const user: {[string]: ApiRequest} = {
    token: options => createAjaxRequest('token')(options),
};

// export const bd: {[string]: ApiRequest} = {
//     blocks: options => createAjaxRequest('blocks')(options),
//     block: options => createAjaxRequest('block', options.blockId)(options),
//     lessons: options => createAjaxRequest('lessons', options.blockId)(options),
//     randomLesson: options => createAjaxRequest('randomLesson', options.blockId)(),
//     lesson: options => createAjaxRequest('lesson', options.blockId, options.lessonId)(options),
//     lessonTest: options => createAjaxRequest('lesson/test', options.blockId, options.lessonId)(options)
//     // references2: options => createAjaxRequest('references2', options.userId)(options),
// };

// export const auth: {[string]: ApiRequest} = {
//     login: options => createAjaxRequest('auth/login', options.user)(options),
// };
