import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { LoginSVG } from '../../../assets/SVG/LoginSVG';
import { Button } from '../../../components/Elements/Button/Button';
import { Input } from '../../../components/Elements/Input';
import { useAuthStore } from './LoginStore';

const className = "w-full p-3 transition-all bg-white border rounded-xl text-base outline-none border-custom-text-black focus:border-custom-text-black";

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const queryClient = useQueryClient();
  const setTokens = useAuthStore((state) => state.setTokens);
  const navigate =useNavigate()

  const handleChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    const { username, password } = loginDetails;
    return axios.post('https://api.escuelajs.co/api/v1/auth/login', {
      email: username,
      password,
    });
  };

  const mutation = useMutation(handleLogin, {
    onSuccess: (response) => {
      const data = response.data;
      if (data) {
        console.log(data)
        queryClient.setQueryData(['token'], data);
        setTokens(data.access_token, data.refresh_token);
        useAuthStore.setState({accessToken: data.access_token})
        toast.success('Login successful');
        navigate("/products")
      } else {
        toast.error('User data is missing');
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed');
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = loginDetails;
    if (!username) {
      toast.error('Enter your username');
      return;
    }
    if (!password) {
      toast.error('Enter your password');
      return;
    }
    mutation.mutate();
  };
  const  accessToken  = useAuthStore((state) => state.accessToken );
  console.log(accessToken)
  return (
    <div className='w-screen h-screen flex flex-col md:flex-row bg-white xl:items-center'>
      <aside className="flex-1 overflow-hidden">
        <LoginSVG />
      </aside>
      <aside className="flex-1 flex items-center px-8 xl:px-20 2xl:justify-center">
        <form className='bg-amber-900 w-full flex flex-col gap-4 lg:max-w-[500px] 2xl:max-w-[660px]' onSubmit={handleSubmit}>
          <h3 className='font-bold text-[30px]/[43px] text-[#131118]'>Welcome {String.fromCodePoint('0x1F44B')}</h3>
          <p className='font-normal text-[#A4A1A1] text-sm/[23px] mb-8 mt-1'>Please login here</p>
          <Toaster />
          <Input
            labelFor="Email"
            name="username"
            type='email'
            placeHolder="Email Address"
            updateState={handleChange}
            value={loginDetails.username}
            className={className}
          />
          <Input
            labelFor="Password"
            name="password"
            className={className}
            placeHolder="Password"
            updateState={handleChange}
            value={loginDetails.password}
            type='password'
          />
          <Button
            displayWord='Login'
            type='submit'
            className="bg-custom-text-black text-white p-4 rounded-lg"
          />
        </form>
      </aside>
    </div>
  );
};
