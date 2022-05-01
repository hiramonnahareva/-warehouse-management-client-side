import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import { useLocation } from 'react-router-dom';
import {BsFillEyeFill} from 'react-icons/bs';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {SpinnerRound} from 'spinners-react';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [signInWithEmailAndPassword, user, loading, userError] = useSignInWithEmailAndPassword(auth);
    useEffect(()=>{
        let from = location.state?.from?.pathname || "/";
        if(user){
            navigate(from, { replace: true })
        }
    },[user])

    //
    if (userError) {
        return (
            toast.error('error')
        );
      }
      if (loading) {
        return <div className='absolute top-[50%] right-[50%]'><SpinnerRound /></div>;
      }
      if (user) {
        return (
          <div>
            <p>Signed In User: {user.email}</p>
          </div>
        );
      }
      //
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword( event.target.value);
    }
    // const resetPassword = async ()=> {
    //     await sendPasswordResetEmail(email);
    //     alert('set email');
    // }
    const handleuserSingIn= event => {
        event.preventDefault()
         // for email
         if (!/\S+@\S+\.\S+/.test(email)){
            return  toast.error('error')
        }
       // for password
       if (!/(?=.{8,})/.test(password)){
        return toast.error('error')('Password must be more than 8 character')
    }
    console.log (email, password)
        signInWithEmailAndPassword(email, password)
    }
      
    return (
             <div className=' flex justify-center'>
                 <ToastContainer/>
                <div className='bg-amber-500 mt-10 '>
                <h2 className='text-center text-3xl py-5 font-serif font-bold text-amber-800'>Lonig</h2>
           <form onSubmit={handleuserSingIn} className='py-2 bg-gradient-to-b from-amber-500 to-yellow-500 px-6 '>
                <label htmlFor="First Name" className='text-white pl-2'>Name</label>
                <br />
                <input className='w-[100%] px-4 py-2 m-1' type="text" placeholder='Your Name'/>
                <label htmlFor="Email" className='text-white pl-2'>Email</label>
                <br />
                <input onBlur={handleEmail} className='w-[100%] py-2 m-1 px-4' type="eamil" placeholder='your email' required/>
                <label htmlFor="Password" className='text-white pl-2'>Password</label>
                <br />
                <div className='relative'>
                <input onBlur={handlePassword} className='w-[100%] py-2 m-1 px-4' type={showPassword? "text" : "password"} placeholder='your Password' required /><p onClick={()=>setShowPassword(!showPassword)} className='absolute top-4 right-3'>{showPassword? <AiOutlineEyeInvisible/> :  <BsFillEyeFill className='text-gray-700' />}</p>
                </div>
               <div className='flex justify-center my-4'>
               <input className='py-2 px-7 border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 hover:text-white border-amber-700 transition-all hover:drop-shadow-lg ease-in' type="submit" value="submit" />
               </div>
               <span> New To Here? <Link to='/register'>Please Register</Link></span>
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