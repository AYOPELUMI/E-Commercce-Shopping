import axios from "axios";
import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import image from "../../../assets/images/signup.png";
import { Button } from "../../../components/Elements/Button/Button";
import { Input } from "../../../components/Elements/Input";
let className="w-full p-3 transition-all bg-white border rounded-xl text-base outline-none border-custom-text-black focus:border-custom-text-black";

const PWD_REGEX =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*&_-])[A-Za-z\d!@#$%*&_-]{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const Signup = () => {
    const [loginDetails, setLoginDetails] = useState({firstname:"",ysername:"",lastname:"",email:"",password:""});
    const [ErrorMsg, setErrorMsg] = useState("")
  
    function handleFirstNameChange (args){
        setLoginDetails({
          ...loginDetails,
          firstname: args
        })
        setErrorMsg("")
    }
    function handleLastNameChange (args){
        setLoginDetails({
          ...loginDetails,
          lastname: args
        })
        setErrorMsg("")

    }
    function handleUserNameChange (args){
      setLoginDetails({
        ...loginDetails,
        username: args
      })
    } 
    function handleEmailChange (args){
        setLoginDetails({
          ...loginDetails,
          email: args
        })
        setErrorMsg("")

    }  
    function handlePasswordChange (args){
      setLoginDetails({
        ...loginDetails,
        password: args
      })
      setErrorMsg("")

    }
    const handleSubmit = () =>{
        if(/^$/.test(loginDetails.firstname)){
            console.log("i am here")
            setErrorMsg("fill your first name")
            return;
        }
        if(/^$/.test(loginDetails.lastname)){
            setErrorMsg("fill your last name")
            return;
        }
        if(/^$/.test(loginDetails.username)){
          setErrorMsg("fill your username")
          return;
        }
        if(!EMAIL_REGEX.test(loginDetails.email)){
          setErrorMsg("invalid email address")
          return;
        }
      if (!(PWD_REGEX.test(loginDetails. password))) {
        setErrorMsg("Password must contain Alphanumeric and special characters")
        return;
      }

      axios.post("https://fakestoreapi.com/users",{
        body:{
          "username": loginDetails.username,
          "email" : loginDetails.email,
          "password" : loginDetails.password,
          "name" : {
            "firstname":loginDetails.firstname,
             "lastname": loginDetails.lastname
          }
      }}).then(response =>{
        toast.success("account created successfully")
        console.log({response})
      })

    }
  
    return (
      <div className='w-screen h-screen flex flex-col md:flex-row bg-white'>
        <aside className="flex-1 max-w-[845px] overflow-hidden relative">
            <img src={image} className='absolute top-0 left-0 w-full  h-[1024px] xl:h-full' alt="signup imge" />
        </aside>
        <aside className="flex-1 flex items-center px-8 xl:px-20 2xl:justify-center">
          <form onSubmit={handleSubmit} className=' bg-amber-900 w-full flex flex-col gap-4 lg:max-w-[500px] 2xl:max-w-[660px]'>
            <div><h3 className='font-bold text-[30px]/[43px] text-[#131118]'>Create New Account</h3>
            <p className='font-normal text-[#A4A1A1] text-sm/[23px] mb-8 mt-1'>Please enter details</p>
            </div>
            {ErrorMsg ? <p className="text-center w-fit text-sm p-1 text-custom-red bg-rose-800 border border-rose-500">{ErrorMsg}</p> : null}
            <Toaster />
            <Input
              labelFor="First Name"
              type='text'
              placeHolder="First Name" 
              updateState={handleFirstNameChange}
              value={loginDetails.firstname}
              className={className} 
            />
          <Input 
              labelFor="Last Name"
              className={className}
              placeHolder="Last Name"
              updateState={handleLastNameChange}
              value={loginDetails.lastname}
              type='text'
          />
          <Input
            labelFor="Username"
            type='text'
            placeHolder="username" 
            updateState={handleUserNameChange}
            value={loginDetails.username}
            className={className}
          />
          <Input
              labelFor="Email Address"
              type='email'
              placeHolder="Email Address" 
              updateState={handleEmailChange}
              value={loginDetails.email}
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
            type="button"
            displayWord='sign up'
            className="bg-custom-text-black text-white p-4 rounded-lg"
            onClick={handleSubmit}
           />
          </form>
        </aside>
      </div>
    )
}




