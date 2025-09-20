import React, { useState } from 'react'
import useGetData from '../hooks/useGetData'
import { Link } from 'react-router-dom'
import {Movies, Modal} from '../components'
import { FaCirclePlus } from "react-icons/fa6";
import { RotateLoader } from 'react-spinners';

function Home() {
  const [showModal, setShowModal] = useState(false)
  const {data, loading, error} = useGetData(showModal)



  if(loading) {
    return (
      <div className='w-full flex justify-center'>
      <RotateLoader color='#079707' />
      </div>
    )

  }

    return <>
    <div  className='w-full flex justify-end mb-10'>
  <button onClick={()=>setShowModal(true)} className='flex gap-2 items-center bg-green-600 rounded-2xl py-2 px-4 mr-2'type='button'>
    <FaCirclePlus />
    Create</button>
    </div>

    {showModal && <Modal setShowModal={setShowModal}/>}
    {data &&<Movies data ={data}/>}

    </>
}

export default Home
