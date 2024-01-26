import React from 'react'
import { styles } from '../style'
import phone2 from '../assets/landing/phone2.png'
import phone3 from '../assets/landing/phone3.png'
import phone4 from '../assets/landing/phone4.png'
import { FaApple ,FaGooglePlay } from "react-icons/fa";

const Hero7 = () => {
  return (
    <div className='mx-6 md:mx-36 my-4 md:my-10 flex flex-col md:flex-row bg-red rounded-xl px-4 gap-4'>
      <div className='flex md:flex-1 flex-col justify-center items-center gap-4 py-4'>
        <div className='md:max-w-lg flex flex-col gap-4'>
          <p className={`${styles.heroHeadText2}`}>Download Petbey now</p>
          <p className={`${styles.heroSubText2} opacity-80`}>Your dream pet is just a click away. Explore Petbey, where every pet has a story, and every story deserves a happy ending. Join the Petbey community now and embark on a journey of love, companionship, and endless wagging tails.</p>
          <div className='flex flex-row gap-4'>
            <div className='px-6 py-2 bg-white bg-opacity-10 rounded-full flex flex-row gap-2 items-center'>
              <FaApple className='text-white  text-3xl' />
              <a href='./' className={`${styles.heroSubText2}`}>App Store</a>
            </div>
            <div className='px-6 py-2 bg-white bg-opacity-10 rounded-full flex flex-row gap-2 items-center'>
              <FaGooglePlay className='text-white  text-2xl' />
              <a href='https://play.google.com/store/apps/details?id=com.petbey.petbey_flutter' className={`${styles.heroSubText2}`} target="_blank" rel="noopener noreferrer">Play Store</a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex md:flex-1 flex-row md:gap-8 justify-around md:justify-center'>
        <img src={phone2} className='h-36 md:h-72 lg:h-96 md:pb-10 hidden md:flex' />
        <img src={phone4} className='h-36 md:h-72 lg:h-96 md:pt-10 flex md:hidden' />
        <img src={phone3} className='h-36 md:h-72 lg:h-96 md:pt-10' />
      </div>
    </div>
  )
}

export default Hero7