import axios from "axios";
import { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { LoginSVG } from "../../../assets/SVG/LoginSVG";
import { Button } from "../../../components/Elements/Button/Button";
import { Input } from "../../../components/Elements/Input";

let className="w-full p-3 transition-all bg-white border rounded-xl text-base outline-none border-custom-text-black focus:border-custom-text-black";

const PWD_REGEX =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*&_-])[A-Za-z\d!@#$%*&_-]{8,24}$/;
export const Login = () => {

  const [loginDetails, setLoginDetails] = useState({username:"",password:""});

  function handleUserNameChange (args){
      setLoginDetails({
        ...loginDetails,
        username: args
      })
  }

  function handlePasswordChange (args){
    e.preventDefault()
    setLoginDetails({
      ...loginDetails,
      password: args
    })
  }
  const handleSubmit = () =>{
    if(/^$/.test(loginDetails.username)){
        console.log("i am here")
        toast.error("enter your username")
        return;
    }
    if(/^$/.test(loginDetails.password)){
        toast.error("enter your last name")
        return;
    }

  axios.post("https://fakestoreapi.com/auth/login",{
    body:{
      "username": loginDetails.username,
      "password" : loginDetails.password,
  }}).then(response =>{
    toast.success("log in successfully")
    console.log({response})
  })

  }

  return (
    <div className='w-screen h-screen flex flex-col md:flex-row bg-white xl:items-center'>
      <aside className="flex-1 overflow-hidden">
        <LoginSVG />
      </aside>
      <aside className="flex-1 flex items-center px-8 xl:px-20 2xl:justify-center">
        <form onSubmit={handleSubmit} className='bg-amber-900 w-full flex flex-col gap-4 lg:max-w-[500px] 2xl:max-w-[660px]'>
          <h3 className='font-bold text-[30px]/[43px] text-[#131118]'>Welcome {String.fromCodePoint('0x1F44B')}</h3>
          <p className='font-normal text-[#A4A1A1] text-sm/[23px] mb-8 mt-1'>Please login here</p>
          <Toaster />
          <Input
            labelFor="Email Address"
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
