import axios from 'axios'
import React, { useEffect, useState } from 'react'

import {MdChevronLeft,MdChevronRight} from "react-icons/md"
import { UserAuth } from '../context/AuthContext'
import { db } from '../pages/firebase'
import { arrayUnion,doc,updateDoc } from 'firebase/firestore'
import Movie from './Movie'
const Row = ({title,url,rowId}) => {
  
 




  const [movies,setmovies]=useState([])
  const slideLeft=()=>{
    let slider=document.getElementById("slider"+rowId)
    slider.scrollLeft=slider.scrollLeft - 500
  }
  const slideRight=()=>{
    let slider=document.getElementById("slider"+rowId)
    slider.scrollLeft=slider.scrollLeft + 500
  }
 useEffect(()=>{
    axios.get(url).then(res=>{
        console.log(res.data,"row")
        setmovies(res.data.results)
      })
      
 },[url])
    return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
       <MdChevronLeft  onClick={slideLeft} size='40px' className='bg-white rounded-full left-0 text-black absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block' />
       <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>   
   
        {movies.map((item,id)=>(
            <Movie key={id} item={item}/>
        ))}
             
       </div>
       <MdChevronRight onClick={slideRight} size='40px' className='bg-white right-0 rounded-full text-black  absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block'/>
      </div>

    </div>
  )
}

export default Row
