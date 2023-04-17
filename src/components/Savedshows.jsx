import React, { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {AiOutlineClose}from "react-icons/ai"
import { UserAuth } from '../context/AuthContext'
import { doc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../pages/firebase'

const Savedshows = () => {
const [movies,setmovies]=useState([])
    const {user}=UserAuth()
    
    const movieref=doc(db,"users",`${user?.email}`)
    const deleteShow=async(del_id)=>{
      try{
       const res=movies.filter( (item)=>(del_id!==item.id))
       await updateDoc(movieref,{
        savedShows:res,
       })
      }catch(err){
        console.log(err)
      }
    }
    
    const slideLeft=()=>{
        let slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft - 500
      }
      const slideRight=()=>{
        let slider=document.getElementById("slider")
        slider.scrollLeft=slider.scrollLeft + 500
      }   

useEffect(()=>{
onSnapshot(doc(db,"users",`${user?.email}`),
(doc)=>{setmovies(doc.data()?.savedShows)})
},[user?.email])

  return (
    <div>
    
      <h2 className='text-white font-bold md:text-xl p-4'>Shows</h2>
      <div className='relative flex items-center group'>
       <MdChevronLeft  onClick={slideLeft} size='40px' className='bg-white rounded-full left-0 text-black absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block' />
       <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>   
   
        {movies.map((item,id)=>(
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
            <img className='w-full height: auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />
            <div className='absolute top-0 left-0 w-full h-full  hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
          <p    className='white-space-normal text-xs md:text-sm font-bold  flex items-center justify-center h-full text-center'>{item?.title}</p>
          <p  onClick={()=>deleteShow(item.id)} className='absolute top-4 right-4 text-gray-300 ' > <AiOutlineClose size={20}/></p>
            </div>
          </div>
        ))}
             
       </div>
       <MdChevronRight onClick={slideRight} size='40px' className='bg-white right-0 rounded-full text-black  absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block'/>
      </div>

    </div>
  
    
  )
}

export default Savedshows
