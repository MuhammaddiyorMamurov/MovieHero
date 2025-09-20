import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar} from './'

function Header() {
  return (
    <div className='bg-white shadow-lg py-6'>
      <div className="container flex items-center justify-between">
        <Link className='text-2xl font-bold text-primary' to={"/"}>Movie Finder</Link>

          
          <Navbar/>
      </div>
    </div>
  )
}

export default Header
