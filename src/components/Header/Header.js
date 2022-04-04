import React from 'react';
import './Header.css'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <div className="nav">
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/home">Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/review">Review</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/dashboards">Dashboard</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/blogs">Blogs</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/about">About</NavLink>
        </div>
      </div>
    );
};

export default Header;