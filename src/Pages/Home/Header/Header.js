import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex'>
            <h2>LOGO</h2>
            <nav className='gap-5'>
            <Link to='/home'>HOME</Link>
            <Link to='/inventory'>INVENTORY</Link>
            <Link to='/blogs'>BLOGS</Link>
            <Link to='/manageItem'>MANAGE ITEM</Link>
            </nav>
        </div>
    );
};

export default Header;