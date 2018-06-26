import * as React from 'react';
import { Routes } from './routes';
import { BrowserRouter as Router, Route, Link, RouteProps } from 'react-router-dom';
import { RouteConfig } from './index';

export const RouteWithSubRoutes = (route: RouteConfig) => {
    return (
        <Route
            exact={!!route.exact}
            path={route.path}
            render={(props: RouteProps) => {
                return (
                    <route.component {...props} routes={route.routes} />
                );
            }}
        />
    );
};

let App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Props v. State</Link>
                </li>
            </ul>
            <hr />
            {
                Routes.map((route: any, i: number) => (<RouteWithSubRoutes key={i} {...route} />))
            }
        </div>
    </Router>
);

export default App;
