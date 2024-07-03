import { useState } from 'react';
import img from '../assets/login_image.png';
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
        <img src={img} alt='image' />
      </aside>
      <aside className="flex-1 flex items-center justify-center">
        <form className='w-full p-20 flex flex-col gap-6'>
          <Input
            labelFor="username"
            placeHolder="Entr your username" 
            updateState={handleUserNameChange}
            value={loginDetails.username}
            className="w-full p-6 pr-12 transition-all bg-white border rounded-lg outline-none border-custom-text-black focus:border-custom-text-black"
            />
          <Input 
            labelFor="Password"
            className="w-full p-6 pr-12 transition-all bg-white border rounded-lg outline-none border-custom-text-black focus:border-custom-text-black"
            placeHolder="Entr your password"
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
