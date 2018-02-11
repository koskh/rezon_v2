import * as React from 'react';

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import NotFound from '../';

describe('features/main', () => {

    test('feature can render', () => {
        const component = renderer.create(<NotFound />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
