import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useRefreshToken } from './pages/RefreshTken';

export const Layout = () => {
    const { data: token, isLoading, error } = useRefreshToken();
    
    const { pathname } = useLocation();

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    return (
        <div>
            {
                token ?
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

