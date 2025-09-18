import React from 'react'
import useGetData from '../hooks/useGetData'
import { Link } from 'react-router-dom'

function Home() {
    const { loading, error, data} = useGetData()

    if(loading) {
      return <h1>Loading...</h1>
    }
    
    
  
    return <div className='flex flex-col bg-amber-300 items-center justify-center font-bold text-3xl'>
      <ul>
        {data && data.map((obj)=>{
          return <li key={obj.id}>
            <Link to={'/movie'}>{obj.title}</Link>
          </li>
        })}
      </ul>
  
    </div> 
}

export default Home
