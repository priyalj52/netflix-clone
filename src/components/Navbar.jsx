import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Navbar=()=>{
const {user,logOut}=UserAuth()
const navigate=useNavigate()
const handleLogout=async(e)=>{

    try{
       await logOut()
       navigate("/")
    }catch(err){console.log(err)}
}

return(
<div >
   
    <div className="flex justify-between items-center p-4 z-[100] absolute w-full"> 
    <Link to="/">
    <h1 className="text-red-600 text-4xl font-bold cursor-pointer  ">NETFLIX</h1>
    </Link>
       
      
            {user?.email ? (
              <div>
        <Link to="/account">
        <button  className="text-white pr-4 ">Account</button>
        </Link>
       <Link to="/signup">
       < button onClick={handleLogout} className="bg-red-600 text-white  px-6 py-2  rounded
         cursor-pointer ">Logout  </button>
       </Link>
       </div>
       ) : (   
        <div>

       <Link to="/login">
        <button  className="text-white pr-4 ">Sign In</button>
        </Link>
       <Link to="/signup">
       < button className="bg-red-600 text-white  px-6 py-2  rounded
         cursor-pointer ">Sign Up  </button>
       </Link>
    
        </div> )}
   
    </div>
</div>
)


}
export default Navbar