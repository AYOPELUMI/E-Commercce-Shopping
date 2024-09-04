import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from './pages/Auth/Login/LoginStore';

export const Layout = () => {
    const  accessToken  = useAuthStore((state) => state.accessToken );
    console.log(accessToken)
    const { pathname } = useLocation();
    return (
        <div>
            {
                accessToken ?
                <Outlet />
                :    
                <Navigate
            to="/login"
            state={{
                requestedUrl: pathname,
                message: "Please login to continue!",
            }}
            replace={true}
        />
            }
        </div>
    )
}

