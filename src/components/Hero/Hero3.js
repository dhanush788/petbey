import React from 'react'
import { styles } from '../../style'
import { bird, dog, cat, reptile, small_animal, farm_animal, bird1, fish } from '../../assets/landing/animal/animal'
import { MdArrowForwardIos } from 'react-icons/md'

const cardDetails = [{
  title: 'Birds',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .',
  icon: bird
}, {
  title: 'Dog',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .',
  icon: dog
}, {
  title: 'Cat',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .',
  icon: cat
}, {
  title: 'Fish',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .',
  icon: fish
}, {
  title: 'Reptile',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .',
  icon: reptile
}, {
  title: 'Small Animal',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .',
  icon: small_animal
}, {
  title: 'Farm Animal',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .',
  icon: farm_animal
}, {
  title: 'Birds',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .',
  icon: bird1
}]



const card = (title, description, icon) => {
  return (
    <div className='flex flex-col max-w-xl text-center'>
      <img src={icon} alt="icon" className='' />
      <p className={`${styles.heroSubHeadText}`}>{title}</p>
      <p className={`${styles.heroSubText}`}>{description}</p>
    </div>
  )
}

const Hero3 = () => {
  return (
    <div className='py-16 px-6 md:px-28'>
      <div className='flex flex-col w-full h-full items-center gap-6 md:gap-16'>
        <div className='flex flex-col md:max-w-xl text-center gap-2 md:gap-6'>
          <p className={`${styles.heroHeadText}`}>Pet Categories</p>
          <p className={`${styles.heroSubText}`}>Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.</p>
        </div>
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8'>
            {cardDetails.map((cardDetail) => card(cardDetail.title, cardDetail.description, cardDetail.icon))}
          </div>
        </div>
        <div className='flex flex-col md:max-w-xl text-center'>
          <div className='px-8 py-3 bg-red rounded-full text-white font-semibold text-xs md:text-lg flex flex-row gap-1  hover:translate-x-3'>
            <a href='./'>Explore</a> <MdArrowForwardIos className='my-auto font-bold' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero3