import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from '../components'
import Footer from '../components/Footer'

function MainLayout() {
  return  <>
      <Header/>
      <main className='py-10 grow'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  
}

export default MainLayout
