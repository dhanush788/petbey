import React from 'react'
import { styles } from '../../style'
import profile1 from '../../assets/landing/profile/profile1.png'
import profile2 from '../../assets/landing/profile/profile2.png'
import profile3 from '../../assets/landing/profile/profile3.png'
import icon12 from '../../assets/landing/icon/icon12.png'
import { keyboard } from '@testing-library/user-event/dist/keyboard'

const cardDetails = [{
  title: 'Esther Howard',
  description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas the futer never sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”',
  icon: profile1
}, {
  title: 'Albert Flores',
  description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas the futer never sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”',
  icon: profile2
}, {
  title: 'Ronald Richards',
  description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas the futer never sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”',
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
  <div className='flex flex-col w-full h-full gap-12 py-12 md:py-24 px-6 md:px-36'>
    <div className='mx-auto flex flex-col md:max-w-xl text-center gap-3 px-2'>
      <p className={`${styles.heroHeadText}`}>Our Happy Customers</p>
      <p className={`${styles.heroSubText}`}>Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.</p>
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