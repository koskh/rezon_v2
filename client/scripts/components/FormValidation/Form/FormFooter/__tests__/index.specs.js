import * as React from 'react';

import renderer from 'react-test-renderer';

import FormFooter from '../';

describe('components/Form/FormFooter', () => {

    test('Component can render', () => {
        const component = renderer.create(<FormFooter />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
