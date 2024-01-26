import React from 'react'
import { styles } from '../../style'
import { bird, dog, cat, reptile, small_animal, farm_animal, bird1, fish } from '../../assets/landing/animal/animal'
import { MdArrowForwardIos } from 'react-icons/md'

const cardDetails = [{
  title: 'Birds',
  description: 'From colourful parrots to melodious canaries, our Birds category is a symphony of avian wonders.',
  icon: bird
}, {
  title: 'Dog',
  description: 'Find the perfect canine companion to join you on life\'s adventures.',
  icon: dog
}, {
  title: 'Cat',
  description: 'Our Cats category offers a selection of graceful kitties ready to characteristic a hint of warmth and appeal to your home.',
  icon: cat
}, {
  title: 'Fish',
  description: 'Transform your space into an underwater oasis with our Fish category.',
  icon: fish
}, {
  title: 'Reptile',
  description: 'For the reptile enthusiasts, our Reptiles category introduces you to a international of charming creatures. ',
  icon: reptile
}, {
  title: 'Small Animal',
  description: 'In our Small Animals category, find out petite companions with personalities that defy their size.',
  icon: small_animal
}, {
  title: 'Farm Animal',
  description: 'From friendly goats to fluffy sheep, deliver the pleasure of the countryside on your doorstep with our lovable farm animals.',
  icon: farm_animal
}, {
  title: 'Birds',
  description: 'From colourful parrots to melodious canaries, our Birds category is a symphony of avian wonders.',
  icon: bird1
}]



const card = (title, description, icon,key) => {
  return (
    <div className='flex flex-col max-w-xl text-center gap-4' key={key}>
      <img src={icon} alt="icon" className='' />
      <p className={`${styles.heroSubHeadText}`}>{title}</p>
      <p className={`${styles.heroSubText}`}>{description}</p>
    </div>
  )
}

const Hero3 = () => {
  return (
    <div className='py-16 px-6 md:px-36'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-16'>
        <div className='flex flex-col md:max-w-xl text-center gap-2 md:gap-6'>
          <p className={`${styles.heroHeadText}`}>Categories</p>
          <p className={`${styles.heroSubText}`}>Discover a variety of pet possibilities at Petbey! :</p>
        </div>
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8'>
            {cardDetails.map((cardDetail,index) => card(cardDetail.title, cardDetail.description, cardDetail.icon,index))}
          </div>
        </div>
        <div className='flex flex-col md:max-w-xl text-center'>
          <div className='px-8 py-3 bg-red rounded-full text-white font-semibold text-xs md:text-lg flex flex-row gap-1  hover:translate-x-3'>
            <a href='https://play.google.com/store/apps/details?id=com.petbey.petbey_flutter'>Explore</a> <MdArrowForwardIos className='my-auto font-bold' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3