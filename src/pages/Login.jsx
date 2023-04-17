import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [error,seterror]=useState('')
    const {user,logIn}=UserAuth()
   const navigate=useNavigate() 
    const handleSubmit=async(e)=>{
   e.preventDefault()
   seterror('')
   try{ await logIn(email,password)
       navigate("/")
   }catch(err){console.log(err)
seterror(err.message)}
    }
 
    return (
    <div>
      <div className='w-full h-screen'>
      <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/61e79073-50cf-4f7b-9a23-73290e6f7dca/d0322828-6d63-4f5f-92fb-30f492e7cca4/IN-en-20230410-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Netflix" />
    <div className='bg-black/60 w-full h-screen top-0 fixed left-0 '></div>
   <div className='fixed w-full px-4 py-24 z-50'>
   <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>
    <div className='max-w-[320px] mx-auto py-16'>
        <h1 className='text-3xl font-bold '>Sign In</h1>
        {error?<p className='bg-red-700 p-3 my-2'>{error}</p>:null}
<form onSubmit={handleSubmit} className='flex flex-col py-4'>
    <input onChange={(e)=>{setemail(e.target.value)}} className='p-3 my-2 bg-gray-700  rounded' type="email" placeholder='email' autoComplete='email' />
    <input onChange={(e)=>{setpassword(e.target.value)}} className='p-3 my-2 bg-gray-700  rounded' type="password" placeholder='password' autoComplete='current-password' />
    <button  className='bg-red-600 py-3 my-6 rounded font-bold '>Sign In</button>
    <div className='flex justify-between items-center'>
        <p> <input className='mr-2' type="checkbox" />
            Remember Me</p>
            <p>Need Help</p>
    </div>
    <div className='flex'>
    <p className='py-6'><span className='text-gray-600'>New to Netflix?</span> {" "}</p>
    <Link to="/signup">
        <button className='py-6'>Sign Up</button>
    </Link>
    </div>
 
</form>
    </div>
   </div>
  </div>    
    
    </div>
    </div>
  )
}

export default Login
