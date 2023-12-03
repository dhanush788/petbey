import React from 'react'
import { useTheme } from '../context/Theme'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false)
    const { theme, setTheme } = useTheme()

    React.useEffect(() => {
        const links = document.querySelectorAll('.nav-link');
        
        links.forEach(link => {
            if (link.getAttribute('href') === window.location.pathname) {
                link.classList.add('font-semibold');
            }
        });
    }, []);

    return (
        <div className="absolute top-0 w-full">
            <div className="flex items-center justify-between px-6 md:px-36 py-4">
                <div className="flex items-center gap-x-14">
                    <a href="/" aria-label="Home" className="block">
                        {theme ?
                            <img src='./logo.svg' alt="logo" className="h-8 w-28 md:h-12 md:w-48" />

                            :
                            <img src='./red_logo.svg' alt="logo" className="h-8 w-28 md:h-12 md:w-48" />
                        }
                    </a>
                </div>
                <div className={`hidden ${theme ? 'text-white' : 'text-black'} font-normal text-lg md:flex gap-16`}>
                    <a href="/" className="nav-link">Home</a>
                    <a href="/features" className="nav-link">Features</a>
                    <a href="/testimonial" className="nav-link">Testimonial</a>
                    <a href="/contact" className="nav-link">Contact</a>
                </div>
                <div className="text-white hidden font-semibold text-lg md:flex gap-16">
                    <div className={`px-8 py-2  rounded-full ${theme ? "bg-white bg-opacity-10" : "bg-red"}`}>
                        <a href='/download'>Download</a>
                    </div>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="mobile-menu-button">
                        <svg className="w-6 h-6" fill="none" stroke={`${theme ? "white" : "black"}`} viewBox="0 0 24 24"
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
