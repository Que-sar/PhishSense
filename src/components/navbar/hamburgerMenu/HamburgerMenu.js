import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css';

const HamburgerMenu = (props) => {
  const { navigationLinks } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const navLinks = navigationLinks.map((route, index) => (
    <li
      key={`${route.reference}-${index}`}
      className={`hamburger-links ${selectedLink === route.reference ? 'selected' : ''}`}
      >
      <Link
        to={route.path}
        className={route.reference + '-link-burger'}
        onClick={() => handleLinkClick(route.reference)}
      >
        {route.name}
      </Link>
    </li>
  ));

  return (
    <div className="hamburesz-menu">
      <label htmlFor="check">
        <input type="checkbox" id="check" onClick={toggleMenu} />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className={`menu-container${menuOpen ? ' slide-in' : ''}`}>
        <ul className="menu-list">{navLinks}</ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
