import {React, Route, Redirect} from 'libraries';

export const PrivateRoute = ({ component: Component, authed, ...rest }) => {
    return (
        <Route {...rest} 
            render={props => (
            authed
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }}/>
        )} />
    );
}; 