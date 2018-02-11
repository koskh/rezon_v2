import * as React from 'react';

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Tools from '../';

describe('features/Tools', () => {

    test('feature can render', () => {
        const component = renderer.create(<Tools />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
