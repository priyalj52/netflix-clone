import axios from 'axios'
import React, { useEffect, useState } from 'react'
import req from './Request'

const Main = () => {
 
 
  const [movies,setmovies]=useState([])
//random movie
 const movie=movies[Math.floor(Math.random() * movies.length)]
 const shortString=(str,num)=>{
if(str?.length >num)
return str.slice(0,num)+"..."
else
return str;
 }
 
 useEffect(()=>{
    axios.get(req.popular).then(res=>
      { console.log(res)
        setmovies(res.data.results)})

},
    []
)
console.log(movie)
 return (
    <div className='w-full text-white h-[580px] '>
         <div className='w-full h-full'> 
         {/* gradient  */}
         <div className=' absolute w-full h-[580px] bg-gradient-to-r from-black '>

         </div>
         {/* if random movies[2]/movie exist then check its image  */}
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <div className='absolute top-[20%] p-4  md-p-8'>
            <h1 className='text-3xl md-5xl font-bold '>{movie?.title}</h1>
            <div className='my-4'>
            <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 '>Play</button>
            <button className='border  text-white border-gray-300 py-2 px-5 ml-4 '>Watch Later</button>
            </div>
         <p className='text-gray-400 text-sm'> {movie?.release_date}</p>
         <p className='w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{shortString(movie?.overview,120)}</p>
          </div>
          </div>      
    </div>
  )
}

export default Main
 