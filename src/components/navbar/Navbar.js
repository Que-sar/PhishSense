import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/phishsenselogo.png"
import "./Navbar.css";
import HamburgerMenu  from "./hamburgerMenu/HamburgerMenu.js";

const Navbar = (props) => {

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    
    const screenSize = () => {
        setIsSmallScreen(window.innerWidth < 768);
        
    }
    
    useEffect(() => {
        screenSize();
        window.addEventListener("resize", screenSize);
        return () => {
            window.removeEventListener("resize", screenSize);
        };
    }, []);
    
    
    
    const routes = props.routes;
    const navLinks = routes.map((route, index) => (
        <li key={`${route.reference}-${index}`} className="nav-links">
          <Link to={route.path} className={route.reference + "-link"}>{route.name}</Link>
        </li>
      ));
    const links = <div className="nav-links-container">{navLinks}</div>;

    return <nav className="navbar-container">
        <div className="navbar-logo">
            <Link to="/">
            <img src={logo} alt="Logo" className="logo-img" />
            </Link> 
        </div>
        <ul className="navbar-pages">
            {isSmallScreen ? <HamburgerMenu navigationLinks={routes} />: links}
        </ul>
    </nav>
}

export default Navbar;