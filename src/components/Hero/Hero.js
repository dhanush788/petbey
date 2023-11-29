import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-screen bg-red'>
            <div className='flex md:flex-1 h-full flex-col justify-center items-center'>
                <div className='md:max-w-lg'>
                    <p>Take good care of yout small pets.</p>
                    <p >Ariel Hocsman launched a new career in software development by taking courses on Besnik. What will you be able to do?</p>
                </div>
                <div className='px-6 py-2 bg-gray-400 rounded-full'>
                    <a href='/contact'>Contact Us</a>
                </div>
            </div>
            <div className='flex md:flex-1 h-full justify-center items-center'>
                photo here
            </div>
        </div>
    )
}

export default Hero