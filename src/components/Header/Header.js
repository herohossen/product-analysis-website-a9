import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="flex gap-4 text-xl">
<Link to='/'>Home</Link>
<Link to='/'>Reviews</Link>
<Link to='/'>Dashboard</Link>
<Link to='/'>Blogs</Link>
<Link to='/'>About</Link>
            </div>
        </div>
    );
};

export default Header;