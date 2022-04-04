import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <div className="nav">
          <Link 
           to="/">Home</Link>
          <Link to="/review">Review</Link>
          <Link to="/dashboards">Dashboard</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
};

export default Header;