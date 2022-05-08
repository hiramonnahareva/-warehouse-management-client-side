import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { SpinnerRound } from 'spinners-react';
import { auth } from '../firebase.init';

const RequireAuth = ({ children }) => {
     const [user, loading] = useAuthState(auth);
     const [sendEmailVerification, sending, error] = useSendEmailVerification(auth, {sendEmailVerification: true});
     const location = useLocation();
     if(loading || sending){
       return <div className='absolute top-[50%] right-[50%]'><SpinnerRound/></div>;
     }
        if (!user) {
            return <Navigate to="/login" state={{ from: location }} replace />;
           
        }
        if (error){
          return toast('anything is wrong')
        }
        if (!user.emailVerified){
          return <div className='h-100'>
            <h3 className='text-center text-red-800'>Your Email is not Verifyed</h3>
           <div className='flex justify-center w-full'>
           <button className='flex  px-5 py-2 m-16 bg-amber-600'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Verify email
      </button>
           </div>
      <ToastContainer></ToastContainer>
          </div>
        }

        return children;      
};

export default RequireAuth;