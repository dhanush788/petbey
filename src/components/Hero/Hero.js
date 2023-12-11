import React from 'react'
import hero from '../../assets/landing/hero.png'
import vector from '../../assets/landing/Vector.png'
import { MdArrowForwardIos } from "react-icons/md";

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-screen bg-red px-6 md:px-36 max-h-[900px]'>
            <div className='flex md:w-1/2 h-full flex-col justify-center sm:justify-end md:justify-center'>
                <div className='w-full text-white text-center md:text-left'>
                    <p className='font-bold text-3xl md:text-6xl'>Take good care of your small pets.</p>
                    <p className='opacity-80 text-sm md:text-base font-normal py-4'>Ariel Hocsman launched a new career in software development by taking courses on Besnik. What will you be able to do?</p>
                    <div className="text-white font-semibold text-lg flex gap-16 justify-center md:justify-start">
                    <div className='px-6 py-2 bg-white bg-opacity-10 rounded-full flex flex-row gap-2'>
                        <a href='/contact'>Contact Us </a>
                        <MdArrowForwardIos className='my-auto'/>
                    </div>
                </div>
                </div>
            </div>
            <div className='flex md:flex-1 justify-center'>
                <img src={vector} alt='vector' className='w-5 md:w-11 mt-auto mb-24' />
                <img src={hero} alt='hero' className='w-[240px] sm:w-[350px] md:w-3/4 mt-auto' />
                <img src={vector} alt='vector' className='w-5 md:w-11 mb-auto mt-36' />
            </div>
        </div>
    )
}

export default Hero