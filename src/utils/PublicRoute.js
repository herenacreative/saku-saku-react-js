import { React, Route, Redirect } from 'libraries';

export const PublicRoute = ({ component: Component, authed, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            authed && restricted ?
                <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                : <Component {...props} />
        )} />
    );
};