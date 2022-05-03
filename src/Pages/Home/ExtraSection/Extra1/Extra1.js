import React from 'react';
import image from '../../../../Original_11860_Herbs-and-Spices.jpg'
import {GiChiliPepper} from 'react-icons/gi'
import {GiBeveledStar} from 'react-icons/gi'
import {GiHotSpices} from 'react-icons/gi'
import {ImLeaf} from 'react-icons/im'


const Extra1 = () => {
    return (
        <div className='relative'>
            <h2 className='text-center text-4xl text-amber-700 font-serif font-bold my-5'>Rating</h2>
            <img className='w-full lg:h-[500px] h-[300px]' src={image} alt="" />
            <h2 className='absolute top-20 text-white text-5xl lg:right-[40%] lg:text-6xl lg:top-[34%] right-[20%]'>Stock Rate</h2>
            <div className=' lg:w-[40%] w-[60%] lg:h-[60%] h-60 bg-amber-500 absolute bottom-[-70px] lg:bottom-[-20%] lg:right-[30%] right-[20%] mb-1'>
                <div className='border-b-2 border-amber-600 absolute lg:top-[52%] top-[52%] w-[100%]' />
                <div className=' border-r-2  border-amber-600 right-[50%]  absolute h-[100%]' />
                <h2 className='absolute lg:left-[70%] lg:top-[16%] top-[65%]  left-[20%] lg:text-4xl text-2xl '><GiChiliPepper/>20%</h2>
                <h2 className='absolute lg:left-[70%] top-[65%] left-[70%] lg:text-4xl text-2xl '><GiBeveledStar/>70%</h2>
                <h2 className='absolute lg:left-[19%] lg:top-[16%] top-[20%]  left-[20%] lg:text-4xl text-2xl '><ImLeaf/>80%</h2>
                <h2 className='absolute lg:left-[19%] lg:top-[65%] top-[20%]  left-[70%] lg:text-4xl text-2xl '><GiHotSpices/>90%</h2>
            </div>
        </div>
    );
};

export default Extra1;