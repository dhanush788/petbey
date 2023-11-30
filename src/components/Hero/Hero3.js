import React from 'react'

const cardDetails = [{
  title: 'Birds',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .'
}, {
  title: 'Dog',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .'
}, {
  title: 'Cat',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .'
}, {
  title: 'Fish',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .'
}, {
  title: 'Reptile',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .'
}, {
  title: 'Small Animal',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .'
}, {
  title: 'Farm Animal',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .'
}, {
  title: 'Birds',
  description: 'Quisque augue eros, pellentesque nec tempor eu, sollicitudin at dolor  commodo venenatis .'
}]



const card = (title, description) => {
  return (
    <div className='flex flex-col max-w-xl text-center'>
      {/* <img src="icon" alt="icon" /> */}
      <p className='font-bold text-base md:text-2xl'>{title}</p>
      <p className='font-normal text-xs md:text-lg text-[#7B6F72]'>{description}</p>
    </div>
  )
}

const Hero3 = () => {
  return (
    <div className='py-16 px-10'>
      <div className='flex flex-col w-full h-full items-center gap-24'>
        <div className='flex flex-col md:max-w-xl text-center'>
          <p className='font-bold text-2xl md:text-5xl'>Pet Categories</p>
          <p className='font-normal text-xs md:text-lg text-[#7B6F72]'>Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.</p>
        </div>
        <div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            {cardDetails.map((cardDetail) => card(cardDetail.title, cardDetail.description))}
          </div>
        </div>
        <div className='flex flex-col md:max-w-xl text-center'>
          <div className='px-12 py-3 bg-red rounded-full text-white font-semibold text-xs md:text-lg'>Explore</div>
        </div>
      </div>
    </div>
  )
}

export default Hero3