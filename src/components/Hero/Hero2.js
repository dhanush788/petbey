import React from 'react'

const Hero2 = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-full py-4 md:py-36 px-6'>
            <div className='flex md:flex-1 h-full flex-col justify-center items-center'>
                <div className='md:max-w-lg flex flex-col gap-2 md:gap-4 text-center md:text-left'>
                    <p className='font-bold text-2xl md:text-5xl'>We treat your pet as a family member</p>
                    <p className='font-normal text-xs md:text-lg text-[#7B6F72]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec venenatis massa auctor at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec venenatis massa auctor at.</p>
                </div>
            </div>
            <div className='flex md:flex-1 h-full justify-center items-center'>
                photo here
            </div>
        </div>
    )
}

export default Hero2