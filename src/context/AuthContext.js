import { useContext,createContext,useEffect,useState } from "react";
import { auth,db } from "../pages/firebase";

import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";
import { setDoc,doc } from "firebase/firestore";
const AuthContext=createContext()

export function AuthContextProvider({children}){
   
   const [user,setuser]=useState({})

   function signUp(email,password)
   {
    createUserWithEmailAndPassword(auth,email,password)
    setDoc(doc(db,"users",email),{
        savedShows:[]
    })
   }
   function logIn(email,password)
   {
    return signInWithEmailAndPassword(auth,email,password)
   }
   function logOut()
   {
    return signOut(auth)
   }
   useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
    setuser(currentUser)})
    //unsubscribe is a method in firebase
return()=>{unsubscribe()}
})
   
    return (
       <AuthContext.Provider value={{logIn,logOut,signUp,user}}>
        {children}
       </AuthContext.Provider>
    )
}
export function UserAuth()
{return useContext(AuthContext)
    
}