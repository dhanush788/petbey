import React from 'react'
import { styles } from '../../style'
import family from '../../assets/landing/family.png'
import Vector2 from '../../assets/landing/Vector2.png'
import Vector1 from '../../assets/landing/Vector1.png'

const Hero2 = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-full py-4 md:py-28 px-6 gap-y-12'>
            <div className='flex md:flex-1 h-full flex-col justify-center items-center my-auto'>
                <div className='md:max-w-lg flex flex-col gap-2 md:gap-4 text-center md:text-left'>
                    <p className={`${styles.heroHeadText}`}>We treat your pet as a family member</p>
                    <p className={`${styles.heroSubText}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec venenatis massa auctor at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor. Cras commodo venenatis diam, nec venenatis massa auctor at.</p>
                </div>
            </div>
            {/* fix this later */}
            <div className='flex md:flex-1 h-full justify-center'>
                <img src={Vector2} alt='Vector2' className='flex h-10 md:h-16 mt-auto -mr-10 md:-mr-20 -mb-10'/>
                <img src={family} alt='family' className='w-80 md:w-[566px] '/>
                <img src={Vector1} alt='Vector1' className='flex h-10 md:h-16 -ml-10 md:-ml-20 -mt-10'/>
            </div>
        </div>
    )
}

export default Hero2