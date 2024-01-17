import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = (props) => {
  const { navigationLinks } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setSelectedLink(currentPath);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setMenuOpen(false);
  };

  const navLinks = navigationLinks.map((route) => (
    <Link
      to={route.path}
      className={`hamburger-links ${
        selectedLink === route.path ? "selected" : ""
      }`}
      onClick={() => handleLinkClick(route.path)}
      key={route.reference + "unique-key"}
    >
      {route.name}
    </Link>
  ));

  return (
    <div className="hamburesz-menu">
      <label>
        <input
          type="button"
          className={menuOpen ? "burger-input checkbox" : "burger-input"}
          onClick={toggleMenu}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className={`menu-container${menuOpen ? " slide-in" : ""}`}>
        <ul className="menu-list">{navLinks}</ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
