import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav id="navbar">
      <div id="nav-links">
        <h1>Bookstore CMS</h1>
        <NavLink to="/" className="link">Books</NavLink>
        <NavLink to="/categories" className="link">Categories</NavLink>
      </div>
    </nav>
  );
}

export default Navigation;