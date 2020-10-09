import {combineReducers} from 'libraries';
import topUp from "./topUp";
import transfer from "./transfer";
import users from "./users";
import auth from "./auth";

export default combineReducers({
    topUp,
    transfer,
    users,
    auth
});