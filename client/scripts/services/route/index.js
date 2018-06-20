//@flow
import * as React from 'react';
import { Route, Redirect,  withRouter } from "react-router-dom";

import isAuthenticated from "../auth/utils/isAuthenticated";

export const OpenRoute = ({ component: Component, ...args }: {component: React.Element<any>}): React.Element<any> => (
    <Route
        {...args}
        render = { props => <Component {...props} />}
    />
);

export const PrivateRoute = ({ component: Component, ...args }: {component: React.Element<any>}): React.Element<any> => (
    <Route
        {...args}
        render={props =>
            isAuthenticated() ? (
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
