import * as React from 'react';

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import EmailPassword from '../';

describe('components/DumbBtn', () => {

    test('Component can render', () => {
        const component = renderer.create(<EmailPassword title='TestTitle'/>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('Component change title on click', () => {

        const testTitle= 'TestTitle';
        const component = mount(<EmailPassword title={testTitle}/>);

        expect(component.text()).toEqual(testTitle);
        component.simulate('click');
        expect(component.text()).toEqual('Bye');
    });

});
