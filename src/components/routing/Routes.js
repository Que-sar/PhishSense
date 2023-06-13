import Home from "../../pages/Home";
import About from "../../pages/About";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Products from "../../pages/Products";
import Demo from "../../pages/Demo";

const usedRoutes = [

    {
        path:"/demo",
        name: "Demo",
        reference: "demo",
        component: Demo
    },
    {
        path:"/",
        name: "Home",
        reference: "home",
        component: Home
    },
    {
        path:"/products",
        name:"Products",
        reference: "products",
        component: Products
    },
    {
        path:"/about",
        name:"About us",
        reference: "about",
        component: About
    },
    {
        path:"/login",
        name:"Log in",
        reference: "login",
        component: Login
    },
    {
        path:"/signup",
        name:"Get started",
        reference: "sign-up",
        component: Register
    },
]

export default usedRoutes;