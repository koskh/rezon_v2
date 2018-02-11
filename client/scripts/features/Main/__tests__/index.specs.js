import * as React from 'react';

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Main from '../';

describe('features/Main', () => {

    test('feature can render', () => {
        const component = renderer.create(<Main />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
