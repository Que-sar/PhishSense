import Home from "../../pages/Home";
import About from "../../pages/About";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const usedRoutes = [
    {
        path:"/login",
        name:"Log in",
        reference: "login",
        component: Login
    },
    {
        path:"/signup",
        name:"Sign up",
        reference: "sign-up",
        component: Register
    },
    {
        path:"/",
        name: "Home",
        reference: "home",
        component: Home
    },
    {
        path:"/about",
        name:"About Us",
        reference: "about",
        component: About
    },
]

export default usedRoutes;