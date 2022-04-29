import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../../Hooks/CustomLink';
import image from '../../../logo.svg';
import { FaBars } from 'react-icons/fa';
import {CgClose} from 'react-icons/cg';

const Header = () => {
    const [click, setClick] = useState(false);
    const handleMenu = () => setClick (!click);
    return (
            <nav className='p-5 bg-black text-white md:flex md:items-center md:justify-between'>
       
        <div className='flex items-center justify-between'>
            <span className='text-2xl font-[popins] cursor-pointer'>
            <img src={image} className='h-10 inline' alt="" />
            LOGO
            </span>
            <span className='text-3xl cursor-pointer md:hidden block mx-2'>
            <button onClick={handleMenu}> {click ? <CgClose/> : <FaBars/>}</button>

                </span>
            </div>
            <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 ${click? '': 'top-[-400px]'} transition-all ease-in`}>
           <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/home'>HOME</CustomLink> </li>
           <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/inventory'>INVENTORY</CustomLink> </li>
           <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/blogs'>BLOGS</CustomLink> </li>
           <li className='mx-4 my-6 md:my-0'> <CustomLink className='text-xl hover:text-amber-700 duration-500' to='/manageItem'>MANAGE ITEM</CustomLink> </li>
            </ul>
            </nav>
    );
};

export default Header;