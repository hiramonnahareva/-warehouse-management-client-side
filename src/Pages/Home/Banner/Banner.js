import React from 'react';
import image from '../../../Original_11860_Herbs-and-Spices.jpg'

const Banner = () => {
    return (
        <div className='relative'>
            <img className='w-full' src={image} alt="" />
            <h2 className='absolute top-10 left-6 lg:text-5xl text-2xl text-amber-500 font-bold'>Stock Spices</h2>
            <p className='absolute top-20 lg:top-28 left-6 right-2/4 text-xl text-white font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque earum impedit! Provident, dolore. Sapiente, repellendus obcaecati dicta, aliquam consequuntur voluptas qui quas, assumenda architecto expedita maiores modi? Mollitia, vel?</p>
        </div>
    );
};

export default Banner;