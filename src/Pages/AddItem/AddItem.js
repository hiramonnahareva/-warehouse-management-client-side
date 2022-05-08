import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddItem = () => {
    const [supplierInfo , setSupplierInfo] = useState({
        name: "",
        supplier: "",
        descrption: "",
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
    const hendleDescrip = event => {
        setSupplierInfo({...supplierInfo, descrption: event.target.value})
    }
    const hendleurl = event => {
        setSupplierInfo({...supplierInfo, img: event.target.value})
    }
    const hendlesupplier = event => {
        setSupplierInfo({...supplierInfo, supplier: event.target.value})
    }
    const hendleSubmit = event => {
        event.preventDefault();
            console.log (supplierInfo)
            const url = (`https://frozen-garden-74574.herokuapp.com/item`)
            fetch(url,{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                },
                body: JSON.stringify(supplierInfo)
            })
            .then(res => res.json())
            .then(result => console.log(result))
            toast('user added successfully');

    }
    return (
        <div className='flex justify-center'>
          <ToastContainer></ToastContainer>
           <div className="w-full max-w-xs">
             <h2 className='text-center my-3 text-3xl font-semibold text-amber-600'>Please Stock New Item</h2>
  <form onSubmit={hendleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <input onBlur={hendleName} className="shadow appearance-none border rounded w-full py-2 px-3 focus:border-amber-500 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Item Name" required/>
    </div>
    <div className="mb-2">
      <input onBlur={hendlesupplier} className="shadow appearance-none border focus:border-amber-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="supplier name" required/>
    </div>
    <div className="mb-2">
      <input onBlur={hendleDescrip} className="shadow appearance-none border focus:border-amber-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="description" required/>
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
      <input type='submit' value='add item' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"/>
      
    </div>
  </form>
</div>
        </div>
    );
};

export default AddItem;