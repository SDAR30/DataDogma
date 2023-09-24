import React from 'react'
import { Logo } from './Logo';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='w-full p-4 px-10 flex items-center justify-between'><Logo />
    <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center
    fixed top-6 right-1/2 translate-x-1/2">
        <Link href="/" className='mx-2'>Home</Link>
        <Link href="/about" className='mx-2'>About</Link>
        <Link href="/contact" className='mx-2'>Contact</Link>
        <button>T</button>
    </nav>
    <div>Social Links</div>
    
    </header>
  )
}

export default Header;