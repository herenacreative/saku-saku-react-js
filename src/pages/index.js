import Home from "./Home";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import TopUp from "./TopUp";

//auth
import Login from "./Auth/Login/index";
import SignUp from "./Auth/SignUp/index";
import ForgotPassword from "./Auth/ForgotPassword/index";
import CreateNewPassword from "./Auth/CreateNewPassword/index";
import CreateNewPin from "./Auth/CreateNewPin/index";
import SuccessCreatePin from "./Auth/SuccessCreatePin/index";

//transfer
import Transfer from "./Transfer";
import Amount from "./Transfer/Amount/index";
import Confirmation from "./Transfer/Confirmation/index";
import SuccessTransaction from "./Transfer/Status/index";
import FailedTransaction from "./Transfer/Status/index";
import History from "./Transfer/History/index";

//profile
import Profile from "./Profile";
import AddNumberPhone from "./Profile/AddNumberPhone/index";
import ChangePassword from "./Profile/ChangePassword/index";
import PersonalInfo from "./Profile/PersonalInfo/index";
import ChangePin from "./Profile/ChangePin/index";
import ManageNumberPhone from "./Profile/ManageNumberPhone/index";

//admin
import DashboardAdmin from "./Admin/DashboardAdmin/index"
import DataUser from "./Admin/DataUser/index"

export {
    Login, 
    SignUp, 
    ForgotPassword, 
    Home, 
    Transfer, 
    NotFound, 
    CreateNewPassword, 
    CreateNewPin,
    Dashboard,
    TopUp,
    History,
    Amount,
    Confirmation,
    // Status,
    Profile,
    PersonalInfo,
    ChangePassword,
    ChangePin,
    AddNumberPhone,
    ManageNumberPhone,
    SuccessCreatePin,
    DashboardAdmin,
    DataUser,
    SuccessTransaction, 
    FailedTransaction
};