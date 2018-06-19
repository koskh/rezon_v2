// @flow
import invariant from 'invariant';
import config from '../../../config';

const apiPatch: string = `${config.serverApi}/api`;
const tokenServer: string = `${config.tokenServer}`;

const urls: {[key: string]: Function} = {
    'token': () => `${tokenServer}/api/Token`,
    'userinfo': () => `${apiPatch}/account/userinfo`,
    // 'auth/login': () => `${apiPatch}/auth/login`,
};

export default (name: string, ...args?: Array<any> ): string => {
    invariant(urls[name], 'The name url must be in urls[]');
    return urls[name](...args);
};
