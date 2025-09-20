import React from 'react'
import { href, Link } from 'react-router-dom'

const navLinks = [
    {
        id:1,
        href: "/",
        title: "Home"
    },
    {
        id:2,
        href: "/about",
        title: "About"
    },
]

function Navbar() {
  return (
      <nav>

        <ul className='flex items-center gap-8'>
            {navLinks.map((links) => {
                return ( <li >
                    <Link className='font-medium text-xl hover:text-primary hover:-translate-1' to={links.href}>{links.title}</Link>
                </li>
                )
            })}
        </ul>

      </nav>
  )
}

export default Navbar
