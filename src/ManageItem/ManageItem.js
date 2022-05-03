import React from 'react';
import { useParams } from 'react-router-dom';
import useItemWithId from '../Hooks/useItemWithId';

const ManageItem = () => {
    const {itemId} = useParams;
    const [item] = useItemWithId(itemId)
    // console.log (item)
    return (
        <div>
            <h2>{item.name}</h2>
            {/* {
                items.map(item => <div key={item._id} className=''>
                    <img src={item.img} alt="" />
                    
                </div>
                    )
            } */}
        </div>
    );
};

export default ManageItem;