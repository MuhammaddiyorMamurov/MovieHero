import React from 'react'
import { Link } from 'react-router-dom'

function Movie({data}) {
  return (
    <div>
      <div className='container w-[400px]  flex flex-col items-center'>
        <h2 className='text-3xl text-red-600'>404 Not Found</h2>
         <span>Son it will be updated😊</span>
      
      </div>
      <Link className=' flex items-center justify-center mx-auto  rounded-xl w-[100px] bg-green-600 mt-6' to={"/"}> Home page</Link>
    </div>
    
  )
  
}

export default Movie
