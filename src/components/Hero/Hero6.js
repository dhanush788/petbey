import React from 'react'
import { styles } from '../../style'
import profile1 from '../../assets/landing/profile/profile1.png'
import profile2 from '../../assets/landing/profile/profile2.png'
import profile3 from '../../assets/landing/profile/profile3.png'
import icon12 from '../../assets/landing/icon/icon12.png'
import { keyboard } from '@testing-library/user-event/dist/keyboard'

const cardDetails = [{
  title: 'Sarah M',
  description: '"Petbey made finding our new hairy friend a breeze! The platform is user-friendly, and we connected with a seller who genuinely cared approximately the well-being of their pets!"',
  icon: profile1
}, {
  title: 'Jason R',
  description: '"As a primary-time pet seller, Petbey\'s list process grow to be honest. I appreciated the secure transaction feature and the capability to communicate directly with potential buyers. Overall, a positive experience for every sellers and buyers."',
  icon: profile2
}, {
  title: 'Ronald Richards',
  description: '"Petbey made finding our new hairy friend a breeze! The platform is user-friendly, and we connected with a seller who genuinely cared approximately the well-being of their pets!"',
  icon: profile3
}]



const card = (title, description,icon,key) => {
  return (
<div className='flex flex-col text-center min-w-[200px] md:min-w-[350px] md:max-w-[360px] bg-[#FFF9F9] rounded-xl items-center p-6 gap-4 relative mt-10' key={key}>
  <img src={icon} alt="icon" className='w-16 md:w-24 h-16 md:h-24'/>
  <img src={icon12} alt='comment' className='absolute -top-5 right-6 h-10 w-10 md:h-16 md:w-16 md:-top-8'/>
  <p className={`${styles.heroSubHeadText}`}>{title}</p>
  <p className={`${styles.heroSubText}`}>{description}</p>
</div>

  )
}

const Hero6 = () => {
  return (
  <div className='flex flex-col w-full h-full gap-12 py-12 md:py-24 px-6 md:px-36' id='testimonial'>
    <div className='mx-auto flex flex-col md:max-w-xl text-center gap-3 px-2'>
      <p className={`${styles.heroHeadText}`}>Happy Customers, Happy Tails!</p>
      <p className={`${styles.heroSubText}`}>At Petbey, the satisfaction of our customers is our greatest reward. Hear what some of our satisfied pet lovers have to mention:</p>
    </div>  
    <div className='flex justify-center w-full py-1'>
      <div className='flex flex-row gap-8 overflow-x-auto pr-4'>
        {cardDetails.map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon,index))}
      </div>
    </div>
  </div>

  )
}

export default Hero6