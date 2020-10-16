import {React, Redirect, Route} from 'libraries'

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route 
        {...rest}
        render={props =>
        localStorage.getItem("authToken") ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{pathname: "/auth/login",
                        state: { from: props.location }
                    }}
            />
        )}
    />
)