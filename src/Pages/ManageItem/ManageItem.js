import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
// import useItemWithId from '../../Hooks/useItemWithId';

const ManageItem = () => {
   const [items, setItems] = useItems()
  //  const {id} = useParams;
   const [quentity, setQuentity] = useState({});
  /*  const url = `https://frozen-garden-74574.herokuapp.com/item/${id}`;
   fetch(url)
   .then (res => res.json())
   .then (data => console.log (data)) */
   
   const handleDelete = id => {
       const sure = window.confirm('Are you sure to delete')
       if(sure){
           const url = `https://frozen-garden-74574.herokuapp.com/item/${id}`;
           fetch(url, {
               method: 'DELETE'
           })
           .then (res => res.json())
           .then(data => {console.log (data);
           const remaining = items.filter(item => item._id !== id);
           setItems(remaining);
            } )
       }
   }
    return (
        <div className='mx-20'>
            <h2 className='text-3xl text-center text-amber-600 m-5'>Manage Your Item</h2>
            {
                items.map (item => <div key={item._id}>
                    <table className="table-auto w-full px-20">
  <thead>
    <tr>
      <th>{}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className=' text-justify lg:w-[500px]'>{item.name}</td>
      <td>{item.quentity}</td>
      <td> <button onClick={()=> handleDelete(item._id)}>Delete</button></td>
    </tr>
    </tbody>
    </table>
                </div>)
            }
        </div>
    );
};

export default ManageItem;