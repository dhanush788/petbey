'use client'
import React from 'react'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)

    return (
        <div className="absolute top-0 w-full">
            <div className="flex items-center justify-between px-10 md:px-36 py-4">
                <div className="flex items-center gap-x-14">
                    <a href="/" aria-label="Home" className="block">
                        {/* <img src='logo' alt="logo" className="" /> */}
                    </a>
                </div>
                <div className="text-white hidden font-display text-2xl md:flex gap-16">
                    <a href='/'>Home</a>
                    <a href='/features'>Features</a>
                    <a href='/testimonial'>Testimonial</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="text-white hidden font-display text-2xl md:flex gap-16">
                    <div className='px-6 py-2 bg-gray-400 rounded-full'>
                        <a href='/download'>Download</a>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
