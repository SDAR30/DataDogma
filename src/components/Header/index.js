import React from 'react'
import { Logo } from './Logo';
import Link from 'next/link';
import { GithubIcon, LeetcodeIcon, LinkedinIcon, SunIcon, TwitterIcon } from '../icons';

const Header = () => {
    return (
        <header className='w-full p-4 px-10 flex items-center justify-between'><Logo />
            <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center
    fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-40">
                <Link href="/" className='mx-2'>Home</Link>
                <Link href="/about" className='mx-2'>About</Link>
                <Link href="/contact" className='mx-2'>Contact</Link>
                <button>
                    <SunIcon />
                </button>
            </nav>
            <div>
                <a href='https://github.com/sdar30' className='inline-block w-6 h-6 mr-4'><GithubIcon className='hover:scale-125 transition-all ease duration-200' /></a>
                <a href='https://github.com/sdar30' className='inline-block w-6 h-6 mr-4'><LinkedinIcon className='hover:scale-125 transition-all ease duration-200' /></a>
                <a href='https://github.com/sdar30' className='inline-block w-6 h-6 mr-4'><TwitterIcon className='hover:scale-125 transition-all ease duration-200' /></a>
                <a href='https://leetcode.com/SDAR30/' className='inline-block w-6 h-6 mr-4'><LeetcodeIcon className='hover:scale-125 transition-all ease duration-200' /></a>
            </div>

        </header>
    )
}

export default Header;