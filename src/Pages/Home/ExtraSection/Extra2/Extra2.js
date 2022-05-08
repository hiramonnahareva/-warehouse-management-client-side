import React from 'react';
import image from '../../../../images/banne image.jpg';

const Extra2 = () => {
    return (
        <div className='lg:mt-28 lg:my-20 relative my-40'>
            <h2 className='mt-40 mb-10 text-4xl font-semibold text-center text-amber-700 font-serif'>Stock detail discription</h2>
            <img className='w-full lg:h-[500px] h-[600px]'  src={image} alt="" />
            <div className='overflow-hidden'>
            <div className='lg:h-[60%] bg-black absolute lg:left-[40%] lg:top-40 lg:w-80 top-[15%]'>
                <h2 className='text-amber-600 lg:py-5 lg:px-20 p-2 text-2xl text-center'>Cordaman</h2>
            
         <hr className='border-x-2 border-amber-600'/>
         <p className='p-5 lg:text-xl font-light text-white text-justify'>This is a spice warehouse or Stock center. If you need to stock any spice please stock here.It's well known that spices elevate the taste and flavour of food. Spices contribute rich flavour to food without adding any calories, fat, sugar or salt.</p>
            </div>
            <div className='lg:h-[60%] bg-black absolute lg:left-[15%] lg:top-40 lg:w-80 top-[48%] '>
                <h2 className='text-amber-600 lg:py-5 lg:px-20 p-2 text-center text-2xl'>Star Anise</h2>
             <hr  className='border-x-2 border-amber-600'/>
             <p className='p-5 lg:text-xl font-light text-white text-justify'>This is a spice warehouse or Stock center. If you need to stock any spice please stock here.It's well known that spices elevate the taste and flavour of food. Spices contribute rich flavour to food without adding any calories, fat, sugar or salt.</p>
            </div>
            <div className='lg:h-[60%] bg-black absolute lg:right-[15%] lg:top-40 lg:w-80 top-[81%]'>
                <h2 className='text-amber-600 lg:py-5 lg:px-20 p-2 text-center text-2xl'>Black papper</h2>
               <hr  className='border-x-2 border-amber-600'/>
               <p className='p-5 lg:text-xl font-light text-white text-justify'>This is a spice warehouse or Stock center. If you need to stock any spice please stock here.It's well known that spices elevate the taste and flavour of food. Spices contribute rich flavour to food without adding any calories, fat, sugar or salt.</p>  
            </div>
            </div>

        </div>
    );
};

export default Extra2;