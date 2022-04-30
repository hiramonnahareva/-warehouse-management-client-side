import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';

const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(auth);
    return (
        <div className=' flex justify-center'>
                <div className='bg-amber-400 mt-10 '>
                <h2 className='text-center text-3xl py-5 font-serif font-bold text-amber-800'>Register</h2>
           <form className='py-2 bg-amber-400 px-6 '>
                <label htmlFor="First Name" className='text-white pl-2'>First Name</label>
                <br />
                <input className='w-[100%] px-4 py-2 m-1' type="text" placeholder='Your First Name'/>
                {/* <label htmlFor="Last Name" className='text-white'>Last Name</label>
                <input className='inline  py-2 px-4 m-1' type="text" placeholder='Your Last Name'/> */}
                <label htmlFor="Email" className='text-white pl-2'>Email</label>
                <br />
                <input className='w-[100%] py-2 m-1 px-4' type="eamil"  required/>
                <label htmlFor="Password" className='text-white pl-2'>Password</label>
                <br />
                <input className='w-[100%] py-2 m-1 px-4' type="password" required />
               <div className='flex justify-center my-4'>
               <input className='py-2 px-5 border-2 rounded-full border-amber-700' type="submit" value="submit" />
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

export default Register;