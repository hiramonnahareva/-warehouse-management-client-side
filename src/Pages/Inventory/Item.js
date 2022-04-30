import React from 'react';

const Item = ({item}) => {
    const {img, name, descrption, } = item;
    return (
        <div className='shadow-lg p-3' >
            <img className='w-full' src={img} alt="" />
           <div className='p-6'>
           <h2 className='text-2xl font-semibold text-amber-700 py-2'>{name}</h2>
            <p className='text-xl text-gray-900 font-light leading-20 pb-2 text-justify'>{descrption}</p>
           </div>
           <div className='flex justify-center'>
           <button className='border-2 rounded-full px-7 py-2 border-amber-700 text-xl text-amber-700 hover:bg-amber-500 hover:text-white transition-all ease-in hover:border-amber-500 mb-4'>Update</button>
           </div>
        </div>
    );
};

export default Item;
