import * as React from 'react';

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Navigate from '../index';

describe('Component/Navigate', () => {

    test('can render', () => {
        const component = renderer.create(<Navigate />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
