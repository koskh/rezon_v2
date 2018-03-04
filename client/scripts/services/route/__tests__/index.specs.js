import * as React from 'react';
import {MemoryRouter as Router, Switch} from "react-router-dom";

import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';

import fakeAuth from "../../auth";
import {OpenRoute, PrivateRoute} from '../index';

const FakeComponent = () => <div>Dumb test component</div>;

describe('services/OpenRoute', () => {
    test('OpenRoute can render inner component', () => {
        const component = mount(<Router><OpenRoute  path="/"  component={FakeComponent}/></Router>);
        expect(component.find(FakeComponent)).toHaveLength(1);
    });
});

describe('services/PrivateRoute', () => {
    test('PrivateRoute can render inner component if auth is ok', () => {
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
