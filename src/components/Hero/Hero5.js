import React from 'react'

const Hero5 = () => {
    return (
        <div className='flex flex-col md:flex-row w-full py-36 bg-[#FFF9F9]'>
            <div className='flex md:flex-1 h-full justify-center items-center'>
                photo here
            </div>
            <div className='flex md:flex-1 h-full flex-col justify-center items-start'>
                <div className='md:max-w-lg'>
                    <p>Making pet parenting easy for everyone</p>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec venenatis massa auctor at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec venenatis massa auctor at.</p>
                </div>
                <div className='px-6 py-2 bg-gray-400 rounded-full'>
                    <a href='/contact'>Explore</a>
                </div>
            </div>
        </div>
    )
}

export default Hero5