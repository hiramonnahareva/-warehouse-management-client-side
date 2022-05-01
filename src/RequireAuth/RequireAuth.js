import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { SpinnerRound } from 'spinners-react';
import { auth } from '../firebase.init';

const RequireAuth = ({ children }) => {
     const [user, loading] = useAuthState(auth);
     const location = useLocation();
     if(loading){
       return <div className='absolute top-[50%] right-[50%]'><SpinnerRound /></div>;
     }
        if (!user) {
            return <Navigate to="/login" state={{ from: location }} replace />;
           
        }
        return children;      
};

export default RequireAuth;