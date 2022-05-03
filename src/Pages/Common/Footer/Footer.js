import React from 'react';
import {BsFacebook , BsTwitter , BsInstagram , BsTelephoneFill} from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='font-[serif] bg-amber-800 text-white'>
        <div className="lg:flex justify-evenly p-5 bg-amber-800 text-white">
        <div>
            <h1 className='text-2xl'>Start Anise</h1>
            <h3>Home|About|Blogs|Contact</h3>
            <span>&copy; 2022 CatFoodDB</span>
        </div>
        <div className=''>
            <h4 className='flex m-2 gap-4 items-center'><BsFacebook/> https://www.facebook.com</h4>
            <h4 className='flex m-2 gap-4 items-center'><BsTelephoneFill/> +01799882200</h4>
            <h4 className='flex m-2 gap-4 items-center'><BsInstagram/> https://www.instagram.com</h4>
            <h4 className='flex m-2 gap-4 items-center'><BsTwitter/> https://www.twitter.com</h4>
        </div>
        <div>
           <h3> About The Company</h3>
           <p>Infinity Group are one of  the leading IT Support Companies<br/> in the UK. Award Winning IT Support Company in the UK. </p>
        </div>
        </div>
        <div className='lg:flex justify-center'>
        <hr className='lg:w-[80%]' />
        </div>
        <div className='flex justify-center gap-3 py-4'>
        <span ><a href='https://www.facebook.com'><BsFacebook/></a></span> <span><a href='/'><BsTelephoneFill/></a> </span> <span><a href='https://www.instagram.com'>  <BsInstagram/></a> </span> <span><a href='https://www.twitter.com'> <BsTwitter/></a></span>
        </div>
    </div>
    );
};

export default Footer;