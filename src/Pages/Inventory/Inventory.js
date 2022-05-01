import useItems from '../../Hooks/useItems';
import Item from './Item';

const Inventory = () => {
    const [items] = useItems();
    console.log (items)
    return (
        <div className='container'>
           <h2 className='text-4xl font-bold text-center text-amber-700 font-serif mt-10'>Inventory</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:px-20 md:px-10 px-5 justify-center py-10'>
            {
                items.map(item =><Item key={item._id} item={item}></Item>)
            }
            </div>
            <div className='flex justify-center'>
            <button className='border-2 rounded-full px-3 lg:px-7 py-2 border-amber-700 lg:text-xl text-amber-700 hover:bg-amber-500 hover:text-white transition-all ease-in hover:border-amber-500 mb-4 mr-10'>AddItem</button>
           <button className='border-2 rounded-full px-3 lg:px-7 py-2 border-amber-700 lg:text-xl text-amber-700 hover:bg-amber-500 hover:text-white transition-all ease-in hover:border-amber-500 mb-4'>Delete</button>
            </div>
            </div>
    );
};

export default Inventory;