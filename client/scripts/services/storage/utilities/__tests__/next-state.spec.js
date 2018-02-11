import nextState from '../next-state';

const state= {
    t1: 't1',
    t2: 't2'
};

const newState1 ={
    t1: '1111tttt'
}

const newState2 ={
    t1: '111',
    t2: '222'
};

describe('nextState ', () => {
    test('merge two objects', () => {
        expect(nextState(state)).toEqual({...state});
        expect(nextState(state, newState1)).toEqual({...state, ...newState1});
        expect(nextState(state, newState2)).toEqual({...state, ...newState2});
    });
});
