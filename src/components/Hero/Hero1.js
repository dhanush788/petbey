import React from 'react'

const cardDetails = [{
  title: 'Fast & Easy to Use',
  description: 'Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.'
}, {
  title: 'Unique Features',
  description: 'Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.'
}, {
  title: 'User Friendly',
  description: 'Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.'
}]



const card = (title, description) => {
  return (
    <div className='flex flex-col max-w-xl text-center'>
      {/* <img src="icon" alt="icon" /> */}
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}

const Hero1 = () => {
  return (
    <div className='py-16 px-10'>
      <div className='flex flex-col w-full h-full items-center gap-24'>
        <div className='flex flex-col md:max-w-xl text-center'>
          <p>Our Awesome Features</p>
          <p>Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {cardDetails.map((cardDetail, index) => (card(cardDetail.title, cardDetail.description)))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero1