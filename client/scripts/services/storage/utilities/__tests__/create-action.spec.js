import createAction from '../create-action';

const Type = 'TEST_TYPE';

describe('createAction ', () => {
    test('create action object with undefined payload', () => {
        expect(createAction(Type)()).toEqual({ type: Type, payload: undefined });
    });
    test('throw if payloadCreator is not function', () => {
        expect(() => createAction(Type, {})()).toThrow();
    });

    test('create action object with function payload ', () => {
        const payloadCreator = x => x;
        const action = createAction(Type, payloadCreator);
        expect(action(42)).toEqual({ type: Type, payload: 42 });
        expect(action({})).toEqual({ type: Type, payload: {} });
    });
});
