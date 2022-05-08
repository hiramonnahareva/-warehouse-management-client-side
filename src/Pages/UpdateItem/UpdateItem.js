import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const {id} = useParams()
    const [item, setItem] = useState ({});
    useEffect (()=> {
        const url = `http://localhost:5000/item/${id}`;
        fetch (url)
        .then (res => res.json())
        .then (data =>  setItem(data));
    }, []);
    const [supplierInfo , setSupplierInfo] = useState({
        name: "",
        price: "",
        quentity: "",
        img: ""
        
    })
    const hendleName = event => {
        setSupplierInfo({...supplierInfo, name: event.target.value})
    }
    const hendlePrice = event => {
        setSupplierInfo({...supplierInfo, price: event.target.value})
    }
    const hendlequentity = event => {
        setSupplierInfo({...supplierInfo, quentity: event.target.value})
    }
    const hendleurl = event => {
        setSupplierInfo({...supplierInfo, img: event.target.value})
    }
        const handleUpdateItem = event => {
            event.preventDefault();
           const updatedItem = supplierInfo

            // send data to server
            const url = `http://localhost:5000/item/${id}`;
            fetch (url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedItem)
            })
            .then (res => res.json())
            .then (data => {
                console.log ('success',data);
                alert ('user added successfully');
                event.target.reset();
            })
    
        }

           

    return (
        <div className='flex justify-center'>
        <div className="w-full max-w-xs">
          <h2 className='text-center my-3 text-3xl font-semibold text-amber-600'>Update Item Information</h2>
<form onSubmit={handleUpdateItem} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
 <div className="mb-4">
   <input onBlur={hendleName} className="shadow appearance-none border rounded w-full py-2 px-3 focus:border-amber-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Item Name" required/>
 </div>
 <div className="mb-2">
   <input onBlur={hendlePrice} className="shadow appearance-none border focus:border-amber-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="add price" required/>
 </div>
 <div className="mb-2">
   <input onBlur={hendlequentity} className="shadow appearance-none border focus:border-amber-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="add quentity" required/>
 </div>
 <div className="mb-6">
   <input onBlur={hendleurl} className="shadow appearance-none border focus:border-amber-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="URL" placeholder="url" required/>
 </div>
 <div className="flex items-center justify-center">
   <input type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
   
 </div>
</form>
</div>
     </div>
    );
};

export default UpdateItem;