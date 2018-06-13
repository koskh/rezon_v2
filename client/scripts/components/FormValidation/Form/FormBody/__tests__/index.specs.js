import * as React from 'react';

import renderer from 'react-test-renderer';

import FormBody from '../';

describe('components/Form/FormBody', () => {

    test('Component can render', () => {
        const component = renderer.create(<FormBody />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
