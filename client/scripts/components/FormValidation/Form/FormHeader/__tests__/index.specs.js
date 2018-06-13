import * as React from 'react';

import renderer from 'react-test-renderer';

import FormHeader from '../';

describe('components/Form/FormHeader', () => {

    test('Component can render', () => {
        const component = renderer.create(<FormHeader title='TestTitle Form Header'/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
