import React from 'react'
import { FaInstagram, FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='shadow-[-4px_0_8px] py-8'>
      <div className='container flex justify-between'>
        <p className='text-2xl font-bold'>English Movies by MJ</p>

        <span className='flex gap-5'>
          <Link className='text-4xl' to={"https://t.me/English_CartoonsMovies"}><FaTelegram /></Link>
          <Link className='text-4xl' to={"#"}><FaInstagram /></Link>
        </span>
      </div>
    </div>
  )
}

export default Footer
