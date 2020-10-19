import {
    CreateNewPin,
    Dashboard,
    Transfer,
    TopUp,
    History,
    Amount,
    Confirmation,
    Status,
    Profile,
    PersonalInfo,
    ChangePassword,
    ChangePin,
    AddNumberPhone,
    ManageNumberPhone,
    SuccessCreatePin,
    DashboardAdmin,
    DataUser
} from "pages";

const privateRoutes = [
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
        path: "/dashboard/",
    },
    {
        name: "Transfer",
        component: Transfer,
        exact: true,
        path: "/transfer"
    },
    {
        name: "TopUp",
        component: TopUp,
        exact: true,
        path: "/top-up"
    },
    {
        name: "History",
        component: History,
        exact: true,
        path: "/history"
    },
    {
        name: "Amount",
        component: Amount,
        exact: true,
        path: "/transfer/:id"
    },
    {
        name: "Confirmation",
        component: Confirmation,
        exact: true,
        path: "/confirmation"
    },
    {
        name: "Status",
        component: Status,
        exact: true,
        path: "/status"
    },
    {
        name: "Profile",
        component: Profile,
        exact: true,
        path: "/profile"
    },
    {
        name: "PersonalInfo",
        component: PersonalInfo,
        exact: true,
        path: "/personal-info"
    },
    {
        name: "ChangePassword",
        component: ChangePassword,
        exact: true,
        path: "/change-password"
    },
    {
        name: "ChangePin",
        component: ChangePin,
        exact: true,
        path: "/change-pin"
    },
    {
        name: "AddNumberPhone",
        component: AddNumberPhone,
        exact: true,
        path: "/add-number-phone"
    },
    {
        name: "ManageNumberPhone",
        component: ManageNumberPhone,
        exact: true,
        path: "/manage-number-phone"
    },
    {
        name: "SuccessCreatePin",
        component: SuccessCreatePin,
        exact: true,
        path: "/auth/success-create-pin"
    },
    {
        name: "DashboardAdmin",
        component: DashboardAdmin,
        exact: true,
        path: "/dashboard-admin-2"
    },
    {
        name: "DataUser",
        component: DataUser,
        exact: true,
        path: "/data-user"
    },
];

export default privateRoutes;