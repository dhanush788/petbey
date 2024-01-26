import React from 'react'
import { styles } from '../../style'
import family from '../../assets/landing/family.png'
import Vector2 from '../../assets/landing/Vector2.png'
import Vector1 from '../../assets/landing/Vector1.png'

const Hero2 = () => {
    return (
        <div className='flex flex-col md:flex-row w-full h-full py-4 px-6 md:px-36 gap-y-12 overflow-hidden gap-x-5'>
            <div className='flex md:flex-1 h-full flex-col justify-center items-center my-auto'>
                <div className=' flex flex-col gap-2 md:gap-4 text-center md:text-left'>
                    <p className={`${styles.heroHeadText}`}>We treat your pet as a family member</p>
                    <p className={`${styles.heroSubText}`}>At Petbey, we understand that your furry friend is not only a pet; they're a cherished member of your family. That's why we're committed in treating every pet with the love, care, and respect they deserve. From the moment you enter the Petbey family, assure that your pet will be embraced with open palms and treated as more than best a companion – they're circle of families.</p>
                </div>
            </div>
            <div className='flex md:flex-1 h-full justify-center my-auto'>
                <img src={Vector2} alt='Vector2' className='h-10 md:h-12 lg:h-16 mt-auto '/>
                <img src={family} alt='family' className='w-full -ml-8 -mr-8'/>
                <img src={Vector1} alt='Vector1' className='h-10 md:h-12 lg:h-16 '/>
            </div>
        </div>
    )
}

export default Hero2