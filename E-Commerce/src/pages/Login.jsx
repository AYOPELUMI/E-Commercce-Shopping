import { useState } from 'react';
import { LoginSVG } from "../assets/SVG/LoginSVG";
import { Button } from "../components/Elements/Button/Button";
import { Input } from "../components/Elements/Input";
export const Login = () => {

  const [loginDetails, setLoginDetails] = useState({username:"",password:""});

  function handleUserNameChange (args){
      setLoginDetails({
        ...loginDetails,
        username: args
      })
  }

  function handlePasswordChange (args){
    setLoginDetails({
      ...loginDetails,
      password: args
    })
  }

  return (
    <div className='w-screen h-screen flex bg-white'>
      <aside className="flex-1 overflow-hidden">
        <LoginSVG />
      </aside>
      <aside className="flex-1 flex items-center justify-center">
        <form className='w-full px-20 flex flex-col gap-7'>
          <h3 className='font-bold text-[30px]/[43px] text-[#131118]'>Welcome {String.fromCodePoint('0x1F44B')}</h3>
          <p className='font-normal text-[#A4A1A1] text-sm/[23px] mb-6'>Please login here</p>
          <Input
            labelFor="Email Address"
            type='email'
            placeHolder="Email Address" 
            updateState={handleUserNameChange}
            value={loginDetails.username}
            className="w-full p-6 pr-12 transition-all bg-white border rounded-lg outline-none border-custom-text-black focus:border-custom-text-black"
            />
          <Input 
            labelFor="Password"
            className="w-full p-6 pr-12 transition-all bg-white border rounded-lg outline-none border-custom-text-black focus:border-custom-text-black"
            placeHolder="Password"
            updateState={handlePasswordChange}
            value={loginDetails.password}
            type='password'
            />

          <Button 
          displayWord='Login'
          className="bg-custom-text-black text-white p-6 rounded-lg"
         />
        </form>
      </aside>
    </div>
    );
}
