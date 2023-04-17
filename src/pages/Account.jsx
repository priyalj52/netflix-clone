import React from 'react'
import Savedshows from '../components/Savedshows'

const Account = () => {
  return (
   <>
  
   <div className='w-full text-white'>
       <img className=" w-full h-[400px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/61e79073-50cf-4f7b-9a23-73290e6f7dca/d0322828-6d63-4f5f-92fb-30f492e7cca4/IN-en-20230410-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="Netflix" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
      <div className='absolute p-4 top-[20%] md:p-8 '>
        <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
      </div>
    </div>
    </div>
    <Savedshows/>
    </>
  )
}

export default Account
