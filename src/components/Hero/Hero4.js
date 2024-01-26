import React from 'react'
import { styles } from '../../style'
import { icon4, icon5, icon6, icon7, icon8, icon9 } from '../../assets/landing/icon/icon'
import phone1 from '../../assets/landing/phone1.png'

const cardDetails = [{
  title: 'Explore Pet Categories',
  description: 'Navigate effortlessly through various pet categories, discovering pets seeking their forever homes.',
  icon: icon4,
}, {
  title: 'User-Friendly Interface',
  description: 'Glide through an intuitive app design, finding the perfect pet based on your preferences.',
  icon: icon5,
}, {
  title: 'Seamless Listing Process',
  description: 'Create detailed pet listings effortlessly, showcasing their personalities for potential adopters',
  icon: icon6,
}, {
  title: 'Connect with Sellers/Buyers',
  description: 'Engage seamlessly with our vibrant network through WhatsApp messaging for easy communication',
  icon: icon7,
}, {
  title: 'Community',
  description: 'Join an amazing pet community network, connecting with enthusiasts to share the joy of companionship.',
  icon: icon8,
}, {
  title: 'Resources',
  description: 'Access educational materials, suggest pet care tips, and connect with fellow pet lovers on Petbey.',
  icon: icon9,
}]



const card = (title, description, icon,check,key) => {
  return (
    <div className={`flex h- flex-col max-w-xl text-left ${check && 'md:text-right md:items-end'} gap-2`} key={key}>
      <img src={icon} alt="icon" className='h-12 w-12' />
      <p className={`${styles.heroSubHeadText}`}>{title}</p>
      <p className={`${styles.heroSubText}`}>{description}</p>
    </div>
  )
}

const Hero4 = () => {
  return (
    <div className='py-6 px-6 md:py-16 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-16'>
        <div className='flex flex-col md:max-w-xl text-center gap-2 md:gap-4'>
          <p className={`${styles.heroHeadText}`}>How App Works</p>
          <p className={`${styles.heroSubText}`}>Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.</p>
        </div>
        <div className='grid grid-cols-6 md:grid-cols-8 gap-4 md:gap-8'>
  <div className='flex flex-col md:my-auto  justify-between col-span-3 gap-6'>
    {cardDetails.slice(0, 3).map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon, true,index))}
  </div>
  <div className='hidden md:flex md:my-auto justify-center col-span-2'>
    <img src={phone1} alt="phone" className='w-full md:w-[300px]' />
  </div>
  <div className='flex flex-col md:my-auto justify-between col-span-3 gap-6'>
    {cardDetails.slice(3, 6).map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon, false,index))}
  </div>
</div>

      </div>
    </div>
  )
}

export default Hero4