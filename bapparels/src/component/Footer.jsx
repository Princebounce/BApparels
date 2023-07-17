import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-nav">
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/privacy" activeClassName="active">Privacy Policy</NavLink>
          </li>
        </ul>
        <div className="footer-bottom">
          <span>ALX Final Project</span>
          <span>BApparels 2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
