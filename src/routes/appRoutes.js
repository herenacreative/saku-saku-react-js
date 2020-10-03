import {
    Login, 
    SignUp, 
    ForgotPassword, 
    CreateNewPassword, 
    CreateNewPin, 
    Dashboard, 
    Home, 
    Transfer, 
    NotFound
} from "pages";

const appRoutes = [
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
    {
        name: "CreateNewPin",
        component: CreateNewPin,
        exact: true,
        path: "/auth/create-new-pin"
    },
    {
        name: "Dashboard",
        component: Dashboard,
        exact: true,
        path: "/dashboard"
    },
    {
        name: "Home",
        component: Home,
        exact: true,
        path: "/"
    },
    {
        name: "Transfer",
        component: Transfer,
        exact: true,
        path: "/transfer"
    },
    {
        name: "NotFound",
        component: NotFound,
        exact: true,
    },
];

export default appRoutes;