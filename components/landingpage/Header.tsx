import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from "@/public/images/Solospace..svg"

const Header = () => {
  return (
    <div className='flex justify-between items-center px-10 py-5'>
        <Link href="/">
            <Image src={Logo} alt="Logo" width={100} height={100} />
        </Link>
        <div>
            <ul className='flex gap-5'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <button className='bg-buttons text-white px-5 py-2 rounded-lg'>Login</button>
            <button className='bg-buttons text-white px-5 py-2 rounded-lg'>Sign Up</button>
        </div>
    </div>
  )
}

export default Header