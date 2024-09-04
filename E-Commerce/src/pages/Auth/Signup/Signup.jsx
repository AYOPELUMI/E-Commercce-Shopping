import axios from "axios";
import React, { useState } from 'react';
import toast, { Toaster } from "react-hot-toast";
import { useMutation } from "react-query";
import image from "../../../assets/images/signup.png";
import { Button } from "../../../components/Elements/Button/Button";
import { Input } from "../../../components/Elements/Input";

const className = "w-full p-3 transition-all bg-white border rounded-xl text-base outline-none border-custom-text-black focus:border-custom-text-black";

const PWD_REGEX =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%*&_-])[A-Za-z\d!@#$%*&_-]{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Signup = () => {
  const [loginDetails, setLoginDetails] = useState({
    firstname: "",
    username: "",
    lastname: "",
    email: "",
    password: ""
  });

  const [ErrorMsg, setErrorMsg] = useState("");

  const handleFirstNameChange = (event) => {
    setLoginDetails({ ...loginDetails, firstname: event.target.value });
    setErrorMsg("");
  };

  const handleLastNameChange = (event) => {
    setLoginDetails({ ...loginDetails, lastname: event.target.value });
    setErrorMsg("");
  };

  const handleUserNameChange = (event) => {
    setLoginDetails({ ...loginDetails, username: event.target.value });
  };

  const handleEmailChange = (event) => {
    setLoginDetails({ ...loginDetails, email: event.target.value });
    setErrorMsg("");
  };

  const handlePasswordChange = (event) => {
    setLoginDetails({ ...loginDetails, password: event.target.value });
    setErrorMsg("");
  };

  const createAccount = () => {
    return axios.post("https://api.escuelajs.co/api/v1/users/", {
      username: loginDetails.username,
      email: loginDetails.email,
      password: loginDetails.password,
      name: `${loginDetails.firstname} ${loginDetails.lastname}`,
      avatar: "https://picsum.photos/800",
    });
  };

  const mutation = useMutation(createAccount, {
    onSuccess: (response) => {
      toast.success("Account created successfully");
    },
    onError: (error) => {
      toast.error(error.message[0]);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (/^$/.test(loginDetails.firstname)) {
      setErrorMsg("Fill in your first name");
      return;
    }
    if (/^$/.test(loginDetails.lastname)) {
      setErrorMsg("Fill in your last name");
      return;
    }
    if (/^$/.test(loginDetails.username)) {
      setErrorMsg("Fill in your username");
      return;
    }
    if (!EMAIL_REGEX.test(loginDetails.email)) {
      setErrorMsg("Invalid email address");
      return;
    }
    // if (!PWD_REGEX.test(loginDetails.password)) {
    //   setErrorMsg("Password must contain alphanumeric and special characters");
    //   return;
    // }
    mutation.mutate();
  };

  return (
    <div className='w-screen h-screen flex flex-col md:flex-row bg-white'>
      <aside className="flex-1 max-w-[845px] overflow-hidden relative">
        <img src={image} className='absolute top-0 left-0 w-full h-[1024px] xl:h-full' alt="Signup" />
      </aside>
      <aside className="flex-1 flex items-center px-8 xl:px-20 2xl:justify-center">
        <form onSubmit={handleSubmit} className='bg-amber-900 w-full flex flex-col gap-4 lg:max-w-[500px] 2xl:max-w-[660px]'>
          <div>
            <h3 className='font-bold text-[30px]/[43px] text-[#131118]'>Create New Account</h3>
            <p className='font-normal text-[#A4A1A1] text-sm/[23px] mb-8 mt-1'>Please enter details</p>
          </div>
          {ErrorMsg && (
            <p className="text-center w-fit text-sm p-1 text-custom-red bg-rose-800 border border-rose-500">
              {ErrorMsg}
            </p>
          )}
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
            placeHolder="Username"
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
            type="submit"
            displayWord='Sign Up'
            className="bg-custom-text-black text-white p-4 rounded-lg"
          />
        </form>
      </aside>
    </div>
  );
}