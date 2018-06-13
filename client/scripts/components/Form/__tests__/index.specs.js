import * as React from 'react';

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Form from '../';

describe('components/Form', () => {

    test('Component can render form', () => {
        const component = renderer.create(<Form/>);
        const tree = component.toJSON();
        // expect(tree).toMatchSnapshot();
    });

    // test('Component change title on click', () => {
    //
    //     const testTitle= 'TestTitle';
    //     const component = mount(<DumbBtn title={testTitle}/>);
    //
    //     expect(component.text()).toEqual(testTitle);
    //     component.simulate('click');
    //     expect(component.text()).toEqual('Bye');
    // });

});
