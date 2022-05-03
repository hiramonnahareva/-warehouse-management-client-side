import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import { useLocation } from 'react-router-dom';
import { BsFillEyeFill } from 'react-icons/bs';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { SpinnerRound } from 'spinners-react';
import { toast, ToastContainer } from 'react-toastify';
import { sendPasswordResetEmail } from 'firebase/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [signInWithEmailAndPassword, user, loading, userError] = useSignInWithEmailAndPassword(auth);
    // const resetPassword = async () => {
    //     await sendPasswordResetEmail(email);
    //     toast('Sent email');
    // }

    useEffect(() => {
        let from = location.state?.from?.pathname || "/";
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])

    
    // if (userError) {
    //     return (
    //         toast('error')
    //     );
    // }
    if (loading) {
        return <div className='absolute top-[50%] right-[50%]'><SpinnerRound /></div>;
    }
    //
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleuserSingIn = event => {
        event.preventDefault()
        if (!/\S+@\S+\.\S+/.test(email)) {
            return toast.error('error')
        }
        // for password
        if (!/(?=.{8,})/.test(password)) {
            return toast.warn('Password must be more than 8 character')
        }
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className=' flex justify-center'>
            <ToastContainer />
            <div className='bg-amber-500 mt-10 '>
                <h2 className='text-center text-3xl py-5 font-serif font-bold text-amber-800'>Lonig</h2>
                <form onSubmit={handleuserSingIn} className='py-2 bg-gradient-to-b from-amber-500 to-yellow-500 px-6 '>
                    <label htmlFor="First Name" className='text-white pl-2'>Name</label>
                    <br />
                    <input className='w-[100%] px-4 py-2 m-1' type="text" placeholder='Your Name' />
                    <label htmlFor="Email" className='text-white pl-2'>Email</label>
                    <br />
                    <input onBlur={handleEmail} className='w-[100%] py-2 m-1 px-4' type="eamil" placeholder='your email' required />
                    <label htmlFor="Password" className='text-white pl-2'>Password</label>
                    <br />
                    <div className='relative'>
                        <input onBlur={handlePassword} className='w-[100%] py-2 m-1 px-4' type={showPassword ? "text" : "password"} placeholder='your Password' required /><p onClick={() => setShowPassword(!showPassword)} className='absolute top-4 right-3'>{showPassword ? <AiOutlineEyeInvisible /> : <BsFillEyeFill className='text-gray-700' />}</p>
                    </div>
                    <div className='flex justify-center my-4'>
                        <input className='py-2 px-7 border-2 rounded-full hover:bg-amber-500 hover:border-amber-500 hover:text-white border-amber-700 transition-all hover:drop-shadow-lg ease-in' type="submit" value="submit" />
                        {/* <button onClick={resetPassword} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"> Forgot Password?</button> */}
                        {/* <button className='forgot-pass' onClick={resetPassword}>forgot password</button> */}
                    </div>
                    <span> New To Here? <Link to='/register'>Please Register</Link></span>
                    <div className='flex items-center'>
                        <div className='w-[50%] border-b-2 border-dotted border-amber-700'>
                        </div>
                        <span className='px-2 text-amber-700'>OR</span>
                        <div className='w-[50%] border-b-2 border-dotted border-amber-700'>
                        </div>
                    </div>
                       <div className='flex justify-center mt-5'>
                       <span className='bg-white rounded-full p-2 flex'><SocialLogin ></SocialLogin></span>
                       </div>
                </form>
            </div>
        </div>
    );
};

export default Login;