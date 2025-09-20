import axios from 'axios';
import React from 'react'
import { VscClose } from "react-icons/vsc";


function Modal({setShowModal}) {
    
    const handleSubmit = function(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        const obj = Object.fromEntries(formData)

       const postData = async function(params) {
         const response = await axios.post("https://json-api.uz/api/project/movies/movies",obj

         );
         setShowModal(false)
       }
       postData()
        e.target.reset()
       
    };
    
  return (
    <div className='w-screen h-screen fixed top-0 bg-[#000a] z-10'>
          <div className='w-full max-w-[600px] absolute px-4 top-1/2 left-1/2 -translate-1/2'>
          <div className='flex flex-col gap-5 bg-white p-6 rounded-xl'>
              <button onClick={()=> setShowModal(false)} className='p-4 rounded-lg self-end bg-gray-300' type='button'>
                 <VscClose/>
              </button>

              <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                <input 
                className='input'
                type="url" 
                name='image' 
                placeholder='movie poster...'
                autoComplete='off'/>
                <input 
                className='input'
                type="text" 
                name='title' 
                placeholder='movie title...'
                autoComplete='off'/>
                <input 
                className='input'
                type="text" 
                name='desc' 
                placeholder='description...'
                autoComplete='off' />
                <select className='input' name="genre">
                    <option value="romance">Romance</option>
                    <option value="comedy">Comedy</option>
                    <option value="documentary">Documentary</option>
                    <option value="criminal">Criminal</option>
                    <option value="action">Action</option>
                </select>
                <button className=' bg-green-600 rounded-2xl py-2 px-4 'type='submit'>
                   Add
                   </button>

              </form>
          </div>
          </div>
    </div>
  )
}

export default Modal
