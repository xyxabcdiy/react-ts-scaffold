import * as React from 'react';
import { Link, Route, match } from 'react-router-dom';
import { RouteWithSubRoutes } from '../../routers/router';
import { RouteConfig } from '../../routers/index';

interface Props extends React.Props<Topics> {
    match: match<any>,
    routes: [RouteConfig]
}

export default class Topics extends React.Component<Props> {
    render() {
        const { match, routes } = this.props;
        return (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>Components</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                    </li>
                </ul>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                <Route
                    exact
                    path={match.url}
                    render={() => <h3>Please select a topic.</h3>}
                />
            </div>
        );
    }
}
