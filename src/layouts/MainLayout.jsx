import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return  <>
      <header>
        <h2 className='font-extrabold text-3xl'>Movie Finder</h2>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>Footer</footer>
    </>
  
}

export default MainLayout
