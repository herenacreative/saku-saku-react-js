import {
    Login, 
    SignUp, 
    ForgotPassword, 
    CreateNewPassword, 
    CreateNewPin,
    Home,
    NotFound,
} from "pages";
import Routes from './index';

const PublicRoutes = [
    {
        name: "Home",
        component: Home,
        exact: true,
        path: "/"
    },
    {
        name: "Login",
        component: Login,
        exact: true,
        path: "/auth/login"
    },
    {
        name: "SignUp",
        component: SignUp,
        exact: true,
        path: "/auth/sign-up"
    },
    {
        name: "ForgotPassword",
        component: ForgotPassword,
        exact: true,
        path: "/auth/forgot-password"
    },
    {
        name: "CreateNewPassword",
        component: CreateNewPassword,
        exact: true,
        path: "/auth/create-new-password"
    },
    // {
    //     name: "CreateNewPin",
    //     component: CreateNewPin,
    //     exact: true,
    //     path: "/auth/create-new-pin"
    // },
    {
        name: "Dashboard",
        component: Routes,
        exact: true,
    },
    {
        name: "NotFound",
        component: NotFound,
        exact: true,
    },     
];

export default PublicRoutes;