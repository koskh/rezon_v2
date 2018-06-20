// @flow

import store from '../../storage/store';

export default function isAuthenticated(): boolean {
    const auth = store.getState()['auth'];
    return !!auth['access_token'];
}
