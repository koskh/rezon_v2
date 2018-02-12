import * as React from 'react';
import {BrowserRouter as Router, Switch} from "react-router-dom";

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Navigate from '../index';

describe('Component/Navigate', () => {

    test('can render', () => {
        const component = renderer.create(<Router><Navigate /></Router>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

});
