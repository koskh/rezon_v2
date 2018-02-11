import * as React from 'react';

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Main from '../index';

describe('features/Home', () => {

    test('feature can render', () => {
        const component = renderer.create(<Main />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
