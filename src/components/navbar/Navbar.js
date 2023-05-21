import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/phishsenselogo.png"
import "./Navbar.css";

const Navbar = (props) => {

    const routes = props.routes;
    const navLinks = routes.map((route) => (
        <li className="nav-links">
          <Link to={route.path} className={route.reference + "-link"}>{route.name}</Link>
        </li>
      ));

    return <nav className="navbar-container">
        <div className="navbar-logo">
            <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
            </Link> 
        </div>
        <ul className="navbar-pages">
            <div className="nav-links-container">{navLinks}</div>
        </ul>
    </nav>
}

export default Navbar;