import { React, Link } from "libraries";

const Home = () => {
    return (
        <>
            <h1>Landing Page</h1>
            <Link to="/auth/login"><p>Login</p></Link>
            <Link to="/auth/sign-up"><p>Sign Up</p></Link>
            <Link to="/dashboard"><p>Dashboard</p></Link>
        </>
    )
}

export default Home
