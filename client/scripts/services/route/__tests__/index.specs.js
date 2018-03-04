import * as React from 'react';
import {MemoryRouter as Router, Switch} from "react-router-dom";

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import fakeAuth from "../../auth";
import {OpenRoute, PrivateRoute} from '../index';

import FakeComponent from '../../../../../jest/__mocks__/fakeComponent';

describe('services/OpenRoute', () => {
    test('OpenRoute shouldsssssssss render inner component', () => {
        const component = mount(<Router><OpenRoute  path="/"  component={FakeComponent}/></Router>);
        expect(component.find(FakeComponent)).toHaveLength(1);
    });
});

describe('services/PrivateRoute', () => {
    test('PrivateRoute should render inner component if auth is ok', () => {
        fakeAuth.authenticate(()=>{});
        const component = mount(<Router><PrivateRoute  path="/"  component={FakeComponent}/></Router>);
        expect(component.find(FakeComponent)).toHaveLength(1);
    });

    test('PrivateRoute should  redirect  if auth is not ok', () => {
        fakeAuth.signout(()=>{});
        const component = mount(<Router><PrivateRoute  path="/dashboard"  component={FakeComponent}/></Router>);
        expect(component.html()).toBeNull();
    });

});
