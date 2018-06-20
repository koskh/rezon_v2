// @flow
export function setPreloadedState(opt: Object) {
    let oldState = getPreloadedState();
    window.localStorage.setItem('preloadedState', JSON.stringify({...oldState, ...opt}))
}

export function getPreloadedState(): Object {
    return JSON.parse( window.localStorage.getItem('preloadedState')) || {}
}
