import React from 'react';
import image from '../../../images/banne image.jpg'

const Banner = () => {
    return (
        <div className='relative overflow-hidden'>
            <img className='w-full h-full lg:h-[600px]' src={image} alt="" />
            <h2 className='absolute top-5 lg:top-28 left-6 lg:left-36 lg:text-5xl text-3xl text-amber-500 font-bold'>Stock Spices</h2>
            <p className='absolute top-16 lg:top-44 lg:left-36 left-2 lg:text-justify right-1/4 lg:right-[49%] text-xl text-white lg:text-2xl font-thin'>This is a spice warehouse or Stock center. If you need to stock any spice please stock here.It's well known that spices elevate the taste and flavour of food. Just a bit of spice can transform everyday ingredients into an appetizing and aromatic meal. Spices contribute rich flavour to food without adding any calories, fat, sugar or salt.</p>
        </div>
    );
};

export default Banner;