import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between bg-white text-black p-4'>
            <div className="logo ">
                Logo
            </div>
            <div>
                <ul className='flex gap-3'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
