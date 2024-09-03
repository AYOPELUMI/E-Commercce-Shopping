import axios from "axios";
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query";
import { LoginSVG } from "../../../assets/SVG/LoginSVG";
import { Button } from "../../../components/Elements/Button/Button";
import { Input } from "../../../components/Elements/Input";

let className="w-full p-3 transition-all bg-white border rounded-xl text-base outline-none border-custom-text-black focus:border-custom-text-black";

export const Login = () => {
  const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });
  const queryClient = useQueryClient()
  function handleUserNameChange(args) {
    setLoginDetails({
      ...loginDetails,
      username: args
    });
  }

  function handlePasswordChange(args) {
    setLoginDetails({
      ...loginDetails,
      password: args
    });
  }

  const handleLogin = () => {
    return axios.post("https://api.escuelajs.co/api/v1/auth/login", {
      email: loginDetails.username,
      password: loginDetails.password,
    });
  }

  const mutation = useMutation(handleLogin, {
    onSuccess: (response) => {
      const data = response.data;
      console.log({ data });
      if (data && data.user) {
        queryClient.setQueryData(['token'], data);
        toast.success("Login successful");
      } else {
        toast.error("User data is missing");
      }
    },
    onError: (error) => {
      toast.error("Login failed");
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!loginDetails.username) {
      toast.error("Enter your username");
      return;
    }
    if (!loginDetails.password) {
      toast.error("Enter your password");
      return;
    }
    mutation.mutate();
  }

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
            type='email'
            placeHolder="Email Address"
            updateState={handleUserNameChange}
            value={loginDetails.username}
            className={className}
          />
          <Input
            labelFor="Password"
            className={className}
            placeHolder="Password"
            updateState={handlePasswordChange}
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
}
