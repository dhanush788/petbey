import React from 'react'
import hero from '../../assets/landing/hero.png'
import vector from '../../assets/landing/Vector.png'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-screen bg-red'>
            <div className='flex md:w-1/2 h-full flex-col justify-center'>
                <div className='w-full text-white text-center md:text-left px-6 md:pl-10'>
                    <p className='font-bold text-3xl md:text-6xl'>Take good care of your small pets.</p>
                    <p className='opacity-80 text-sm md:text-base font-normal py-4'>Ariel Hocsman launched a new career in software development by taking courses on Besnik. What will you be able to do?</p>
                    <div className="text-white hidden font-semibold text-lg md:flex gap-16">
                    <div className='px-8 py-2 bg-white absolute opacity-10 rounded-full'>
                        <a href='/contact'>Contact Us</a>
                    </div>
                    <a href='/contact' className='px-8 py-2 '>Contact Us 
                    </a>
                </div>
                </div>
            </div>
            {/* fix this later */}
            {/* adjust photo size */}
            <div className='flex md:flex-1 justify-center'>
                <img src={vector} alt='vector' className='w-5 md:w-11 mt-auto mb-24' />
                <img src={hero} alt='hero' className='w-3/4 mt-auto' />
                <img src={vector} alt='vector' className='w-5 md:w-11 mb-auto mt-36' />
            </div>
        </div>
    )
}

export default Hero