import React, { useState } from 'react'
import Header from './Header'
import { LOGIN_URL } from '../utils/constants'
const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(false)//create this state variable to know wheather Sign In or Sign Up form show . we take isSignInForm value as false so Sign Up form will shown.  

  //Below toggleSignInForm function change the isSignInForm state variable.
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);//toogle condition.(if isSignInForm is true then change to false or if isSignInForm is false then change to true)
  }
  return (
    <div className='relative'>
      <Header/>
      <div >
        <img src={LOGIN_URL} alt="" />
      </div> 
      {/* mx-auto left-0 right-0 these three property make form horizentally centered and bg-opacity-80 property makes background transparent. */}
      <form action="" className='flex flex-col bg-black w-[25%] py-16 px-10 gap-10 absolute top-[10%] rounded-md mx-auto left-0 right-0 bg-opacity-80 text-white'>
        <h1 className='text-white font-[600] text-[1.8rem]'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        <div className='w-[100%] flex flex-col gap-5'>
          {/* When isSignInForm is false then input with placeholder name is shown. */}
          {!isSignInForm && <input type="text" placeholder='Name' className='py-3 px-2 w-[100%] rounded-md outline-none bg-gray-600'/>}
          <input type="email" placeholder='Email Address' className='py-3 px-2 w-[100%] rounded-md outline-none bg-gray-600'/>
          <input type="password" placeholder='Password' className='py-3 px-2 w-[100%] rounded-md outline-none bg-gray-600'/>
        </div>
        <button className='py-3 px-2 text-white bg-red-700 rounded-md'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p>{isSignInForm?"New to Netflix?":"Already Registered? "} <b className="cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"Sign up now":"Sign in now"}</b></p>
      </form>
    </div>
  )
}

export default Login

