import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleName = event => {
       setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword( event.target.value);
    }
    const handleFormSubmit= event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
             <div className=' flex justify-center'>
                <div className='bg-amber-500 mt-10 '>
                <h2 className='text-center text-3xl py-5 font-serif font-bold text-amber-800'>Lonig</h2>
           <form onSubmit={handleFormSubmit} className='py-2 bg-gradient-to-b from-amber-500 to-yellow-500 px-6 '>
                <label htmlFor="First Name" className='text-white pl-2'>Name</label>
                <br />
                <input onChange={handleName} className='w-[100%] px-4 py-2 m-1' type="text" placeholder='Your Name'/>
                <label htmlFor="Email" className='text-white pl-2'>Email</label>
                <br />
                <input onChange={handleEmail} className='w-[100%] py-2 m-1 px-4' type="eamil" placeholder='your email' required/>
                <label htmlFor="Password" className='text-white pl-2'>Password</label>
                <br />
                <input onChange={handlePassword} className='w-[100%] py-2 m-1 px-4' type="password" placeholder='your Password' required />
               <div className='flex justify-center my-4'>
               <input className='py-2 px-7 border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 hover:text-white border-amber-700 transition-all hover:drop-shadow-lg ease-in' type="submit" value="submit" />
               </div>
               <div className='flex items-center'>
                   <div className='w-[50%] border-b-2 border-dotted border-amber-700'>
               </div>
               <span className='px-2 text-amber-700'>OR</span>
               <div className='w-[50%] border-b-2 border-dotted border-amber-700'> 
               </div>
               </div>
            </form>
        </div>
    </div>
    );
};

export default Login;