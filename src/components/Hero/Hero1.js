import React from 'react'
import { styles } from '../../style'
import { icon1 ,icon2,icon3 } from '../../assets/landing/icon/icon'


const cardDetails = [{
  title: 'Trusted Sellers',
  description: ' Rest assured, our sellers are as passionate about pets as you are. We prioritize responsible breeding and ethical practices, ensuring that every pet gets a loving family.',
  icon: icon1,
}, {
  title: 'Easy Navigation',
  description: 'Our user-friendly interface makes exploring, buying, and selling pets a breeze. Filter your search based on species, breed, age, and more, ensuring you find the perfect suit to your lifestyle.',
  icon: icon2,
}, {
  title: 'Community',
  description: 'Petbey App boasts a welcoming and supportive community, creating a unique environment for buying and selling pets online. Connect with like-minded pet enthusiasts and experience the warmth of our dedicated community feature.',
  icon: icon3,
}]



const card = (title, description,icon,key) => {
  return (
    <div className='flex flex-col max-w-xl text-center gap-2 md:gap-4' key={key}>
      <img src={icon} alt="icon" className='w-16 h-16 md:w-24 md:h-24 mx-auto'/>
      <p className={`${styles.heroSubHeadText}`}>{title}</p>
      <p className={`${styles.heroSubText}`}>{description}</p>
    </div>
  )
}

const Hero1 = () => {
  return (
    <div className='py-28 px-6 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-12 md:gap-24'>
        <div className='flex flex-col md:max-w-xl text-center gap-2 md:gap-4'>
          <p className={`${styles.heroHeadText}`}>Why petbey?</p>
          <p className={`${styles.heroSubText}`}>Here's why we are the best for your pets:</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12'>
            {cardDetails.map((cardDetail,index) => (card(cardDetail.title, cardDetail.description,cardDetail.icon,index)))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero1