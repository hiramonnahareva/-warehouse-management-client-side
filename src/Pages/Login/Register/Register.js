import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import {BsFillEyeFill} from 'react-icons/bs';
import {AiOutlineEyeInvisible} from 'react-icons/ai'
import { SpinnerRound } from 'spinners-react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showComfirmPass, setShowComfirmPass] = useState(false)
    let navigate = useNavigate();
    let location = useLocation();
    const [createUserWithEmailAndPassword, user, loading,hookError] = useCreateUserWithEmailAndPassword(auth);
    useEffect(()=>{
        let from = location.state?.from?.pathname || "/";
        if (user) {
        navigate(from, { replace: true })
        }
        },[user])
    // if (hookError|| error) {
    //     return (
    //         toast('error')
    //     );
    //   }
      if (loading) {
        return <div className='absolute top-[50%] right-[50%]'><SpinnerRound /></div>;
      }

    const handleEmail = event => {
        setEmail(event.target.value)
        console.log (email)
    }
  
    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }
        const handleFormSubmit = event => {
        event.preventDefault();
       // for password
       if (!/(?=.{8,})/.test(password)){
        return toast.warn('Password must be more than 7 character')
    }
    // for confirm password
    if(password !== confirmPassword){
        return toast.warn('confirm password not matched',         
        {
          position: "top-center",
        })
    }
    console.log (email, password)
    createUserWithEmailAndPassword(email, password)
    }


    return ( 
    <>
            
        <div className=' flex justify-center'>
                <div className='bg-amber-500 mt-10 '>
                <h2 className='text-center text-3xl py-5 font-serif font-bold text-amber-800'>Register</h2>
           <form onSubmit={handleFormSubmit} className='py-2 bg-gradient-to-b from-amber-500 to-yellow-500 px-6 '>
                <label htmlFor="Name" className='text-white pl-2'>Name</label>
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
                <label htmlFor="confirm Password" className='text-white pl-2'>Confirm Password</label>
                <br />
                <div className='relative'>
                <input onBlur={handleConfirmPassword} className='w-[100%] py-2 m-1 px-4' type={showComfirmPass? "text" : "password"} placeholder='Confirm Password' required /><p onClick={()=>setShowComfirmPass(!showComfirmPass)} className='absolute top-4 right-3'>{showComfirmPass? <AiOutlineEyeInvisible/> :  <BsFillEyeFill className='text-gray-700' />}</p>
                </div>

               <div className='flex justify-center my-4'>
               <input className='py-2 px-7 border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 hover:text-white border-amber-700 transition-all hover:drop-shadow-lg ease-in' type="submit" value="submit" />
               </div>
              <span>Already login? <Link to='/login'>Please Login</Link></span>
               <div className='flex items-center'>
                   <div className='w-[50%] border-b-2 border-dotted border-amber-700'>
               </div>
               <span className='px-2 text-amber-700'>OR</span>
               <div className='w-[50%] border-b-2 border-dotted border-amber-700'> 
               </div>
               </div>
               <div className='flex justify-center pt-5'>
                       <span className='bg-white rounded-full p-1'><SocialLogin ></SocialLogin></span>
                       </div>
            </form>
        </div>
    </div>
    <ToastContainer/>
    </>
    );
};

export default Register;