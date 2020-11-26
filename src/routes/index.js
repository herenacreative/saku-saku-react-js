import { React, BrowserRouter as Router, Switch, Route, connect } from 'libraries';
import publicRoutes from './publicRoutes';
import privateRoutes from "./privateRoutes";
import { PrivateRoute, PublicRoute } from 'utils';
import {login} from "redux/actions"

const Routes = (props) => {
    // console.log(props.login, 'll', props.auth)
    return (
        <>
            <Switch>
                {publicRoutes.map(route => <Route {...route} />)}
            </Switch>
            <Switch>
                {privateRoutes.map(route => <PrivateRoute {...route} authed={props.auth.isLogin} />)}
            </Switch>
        </>
    )
}


const mapStateToProps = (state) => ({
    auth: state.auth
})
const mapDispatchToProps = {login}

export default connect(mapStateToProps, mapDispatchToProps)(Routes)