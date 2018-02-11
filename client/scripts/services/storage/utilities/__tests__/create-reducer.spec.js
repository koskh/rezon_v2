import createReducer from '../create-reducer';
import nextState from '../next-state';

const Types = {
    Type1: 'TEST_TYPE1',
    Type2: 'TEST_TYPE2',
    Type3: 'TEST_TYPE3',
};

const INITIAL_STATE = { isSmph: undefined };

const actions = {
    [Types.Type1]: state => nextState(state, { type1: true }), // без payload
    [Types.Type2]: (state, { payload }) => nextState(state, { type2: payload }), // с payload
};

const reducer = createReducer(INITIAL_STATE, actions);

describe('createReducer ', () => {
    test('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
    });

    test('should handles types', () => {
        expect(reducer({}, { type: [Types.Type1] })).toEqual({ type1: true });
        expect(reducer({}, { type: [Types.Type1], payload: undefined })).toEqual({ type1: true });

        expect(reducer({}, { type: [Types.Type2], payload: undefined })).toEqual({ type2: undefined });
        expect(reducer({}, { type: [Types.Type2], payload: 42 })).toEqual({ type2: 42 });
    });
});
