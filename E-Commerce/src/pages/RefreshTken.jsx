
import axios from 'axios';
import { useQuery } from 'react-query';
import { useAuthStore } from './Auth/Login/LoginStore';

// Function to fetch/refresh token


export const useRefreshToken = () => {
  const setTokens = useAuthStore((state) => state.setTokens);
  const  refresh_token  = useAuthStore((state) => state.refreshToken );

    const fetchToken = () =>{
        return axios.post('https://api.escuelajs.co/api/v1/auth/refresh-token', {
            refreshToken: refresh_token
           })
    }

    return useQuery('token', fetchToken, {
        refetchInterval: 1800000, // 30 minutes in milliseconds
        refetchIntervalInBackground: true, // Allow refetching even when the window is not in focus
        staleTime: 1800000, // Keep the token fresh for 30 minutes
        cacheTime: 1800000, 
        onSuccess:(response) => {
            setTokens(response.data.access_token, response.data.refresh_token);
            return response.data.access_token
        },
        onError: (error) => {
          console.error('Token refresh failed:', error);
          // Handle token refresh failure, possibly redirect to login
        },
      });
}


