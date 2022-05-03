import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { SpinnerRound } from 'spinners-react';
import { auth } from '../../../firebase.init';
import image from '../../../images/google.png'

const SocialLogin = () => {
    const navigate = useNavigate()
    let location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    useEffect(()=>{
        let from = location.state?.from?.pathname || "/";
        if (user) {
        navigate(from, { replace: true })
        }
        },[user])

    if (error) {
        return (
          toast(`Error: ${error.message}`)
        );
      }
    //   if (loading) {
    //     return <p></p>;
    //   }
    return (
        <div>
            <ToastContainer></ToastContainer>
            {loading ? <SpinnerRound/> :
            <button onClick={() => signInWithGoogle()}> <img src={image} alt="" /></button>
    }
            
           
        </div>
    );
};

export default SocialLogin;