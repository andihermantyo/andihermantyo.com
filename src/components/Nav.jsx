import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="nav nav-masthead justify-content-center">
    <NavLink exact to="/" className="nav-link">Home</NavLink>
    <NavLink to="/products" className="nav-link">Products</NavLink>
    <NavLink to="/services" className="nav-link">Services</NavLink>
    <NavLink to="/contact" className="nav-link">Contact</NavLink>
    <NavLink to="/about" className="nav-link">About</NavLink>
  </nav>
);

export default Nav;
