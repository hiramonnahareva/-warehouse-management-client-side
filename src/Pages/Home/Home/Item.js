import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const {img, name, descrption, price, quentity, supplier } = item;
    return (
        <div className='shadow-lg p-3' >
            <img className='w-full' src={img} alt="" />
           <div className='lg:p-6'>
           <h2 className='lg:text-2xl text-xl font-semibold lg:font-semibold text-amber-700 pt-2'>{name}</h2>
           <h2 className='lg:text-2xl font-semibold lg:font-semibold text-gray-700 py-1'>{supplier}</h2>
            <p className='lg:text-xl text-gray-700 font-semibold lg:leading-20 py-2 text-justify'>Price: <span className='text-amber-500'>{price}</span></p>
           <p className='lg:text-xl text-gray-700 font-semibold lg:leading-20 pb-2 text-justify'>quentity: <span className='text-amber-500'>{quentity}</span></p>
            <p className='lg:text-xl text-gray-900 font-light lg:leading-20 pb-2 text-justify'>{descrption}</p>
           </div>
           <div className='flex justify-center'>

           <Link to className='border-2 rounded-full px-3 lg:px-7 py-2 border-amber-700 lg:text-xl text-amber-700 hover:bg-amber-500 hover:text-white transition-all ease-in hover:border-amber-500 mb-4'>Update</Link>
           </div>
        </div>
    );
};

export default Item;