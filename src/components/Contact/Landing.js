import React from 'react'
import { styles } from '../../style'
import { icon10, icon11 } from '../../assets/landing/icon/icon'

const Landing = () => {
  return (
    <div className='flex flex-col w-full h-full items-center gap-8 md:gap-16 pt-20 py-5 px-4'>
      <div className='flex flex-col md:max-w-xl text-center gap-2 md:gap-4'>
        <p className={`${styles.heroHeadText}`}>Get in touch today!</p>
        <p className={`${styles.heroSubText}`}>Ariel Hocsman launched a new career in software development by taking courses on Besnik. What will you be able to do?</p>
      </div>
      <div className='flex flex-wrap md:justify-center gap-4 md:gap-16'>
        <div className='flex flex-row gap-3 items-center'>
          <img src={icon10} alt='phone' className='h-10 w-10 md:h-14 md:w-14' />
          <p className='font-bold text-base md:text-2xl text-red'>Call Us: <span className='text-black'>+001 6547 6589</span></p>
        </div>
        <div className='flex flex-row gap-3 items-center'>
          <img src={icon11} alt='email' className='h-10 w-10 md:h-14 md:w-14' />
          <p className='font-bold text-base md:text-2xl text-red'>Mail Us: <span className='text-black'>Petbey@gmail.com</span></p>
        </div>
      </div>


    </div>
  )
}

export default Landing