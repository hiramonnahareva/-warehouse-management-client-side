import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user, loading,userError] = useCreateUserWithEmailAndPassword(auth);



 
    const handleName = event => { 
        setName( event.target.value);
    }

    const handleEmail = event => {
        setEmail( event.target.value)
    }
  
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
        const handleFormSubmit = event => {
        event.preventDefault();
          // for email
        if (!/\S+@\S+\.\S+/.test(email)){
            return alert('email is not valid')
        }
       // for password
       if (!/(?=.{8,})/.test(password)){
        return alert('Password must be more than 7 character')
    }
    // for confirm password
    if(password !== confirmPassword){
        return alert('password not matched')
    }
    createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className=' flex justify-center'>
                <div className='bg-amber-500 mt-10 '>
                <h2 className='text-center text-3xl py-5 font-serif font-bold text-amber-800'>Register</h2>
           <form onSubmit={handleFormSubmit} className='py-2 bg-gradient-to-b from-amber-500 to-yellow-500 px-6 '>
                <label htmlFor="Name" className='text-white pl-2'>Name</label>
                <br />
                <input onChange={handleName} className='w-[100%] px-4 py-2 m-1' type="text" placeholder='Your Name'/>
                <label htmlFor="Email" className='text-white pl-2'>Email</label>
                <br />
                <input onChange={handleEmail} className='w-[100%] py-2 m-1 px-4' type="eamil" placeholder='your email' required/>
                <label htmlFor="Password" className='text-white pl-2'>Password</label>
                <br />
                <input onChange={handlePassword} className='w-[100%] py-2 m-1 px-4' type="password" placeholder='your Password' required />
                <label htmlFor="confirm Password" className='text-white pl-2'>Confirm Password</label>
                <br />
                <input onChange={handleConfirmPassword} className='w-[100%] py-2 m-1 px-4' type="password" placeholder='Confirm Password' required />
               <div className='flex justify-center my-4'>
               <input className='py-2 px-7 border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 hover:text-white border-amber-700 transition-all hover:drop-shadow-lg ease-in' type="submit" value="submit" />
               </div>
              <span> New To Here? <Link to='/login'>Please Login</Link></span>
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

export default Register;