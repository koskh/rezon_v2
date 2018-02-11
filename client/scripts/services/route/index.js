import * as React from 'react';
import { Route, Redirect,  withRouter } from "react-router-dom";

import fakeAuth from "../auth";

export const OpenRoute = ({ component: Component, ...args }) => (
    <Route
        {...args}
        render = { props => <Component {...props} />}
    />
);

export const PrivateRoute = ({ component: Component, ...args }) => (
    <Route
        {...args}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);
