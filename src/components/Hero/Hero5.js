import React from 'react'
import { styles } from '../../style'
import family1 from '../../assets/landing/family1.png'
import Vector3 from '../../assets/landing/Vector3.png'
import Vector4 from '../../assets/landing/Vector4.png'
import { MdArrowForwardIos } from 'react-icons/md'

const Hero5 = () => {
    return (
        <div className='relative flex flex-col md:flex-row w-full px-6 md:px-36 py-6 md:py-10 bg-[#FFF9F9] overflow-hidden gap-x-10'>
            <img src={Vector3} alt='vector' className='absolute h-8 md:h-12 md:left-16 md:top-16'/>
            <div className='flex md:flex-1 h-full justify-center items-center my-auto'>
                <img src={family1} alt='family' className='py-6 w-10/12 sm:w-3/5 md:w-11/12' />
            </div>
            <div className='flex md:flex-1 h-full flex-col my-auto items-center md:items-start gap-4'>
                <div className='md:max-w-lg flex flex-col gap-2 md:gap-6 text-center md:text-left'>
                    <p className={`${styles.heroHeadText}`}>Making pet parenting easy for everyone</p>
                    <p className={`${styles.heroSubText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec venenatis massa auctor at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec venenatis massa auctor at.</p>
                </div>
                <div className='px-6 py-2 bg-red rounded-full text-white font-semibold text-xs md:text-lg flex flex-row gap-1   '>
                <a href='./'>Explore</a> <MdArrowForwardIos className='my-auto font-bold' />
                </div>
            </div>
            <img src={Vector4} alt='vector' className='absolute h-10 md:h-20 bottom-4 -right-2 md:bottom-10 md:right-10'/>
        </div>
    )
}

export default Hero5