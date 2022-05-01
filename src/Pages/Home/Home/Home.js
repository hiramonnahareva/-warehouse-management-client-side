import React from 'react';
import useItems from '../../../Hooks/useItems';
// import Item from '../../Inventory/InventoryItem';
import Banner from '../Banner/Banner';
import Item from './Item';


const Home = () => {
    const [items] = useItems();
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-bold text-center text-amber-700 font-serif mt-10'>Inventory</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:px-20 md:px-10 px-5 justify-center py-10'>
            {
                items.slice(0, 6).map(item =><Item key={item._id} item={item}></Item>)
            }
            </div>
        </div>
    );
};

export default Home;