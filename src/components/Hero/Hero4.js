import React from 'react'

const cardDetails = [{
  title: 'Download the App',
  description: 'Businesses need qualified business consulting and professional advice to win over the world.'
}, {
  title: 'Download the App',
  description: 'Businesses need qualified business consulting and professional advice to win over the world.'
}, {
  title: 'Dedicated Teams',
  description: 'Businesses need qualified business consulting and professional advice to win over the world.'
}, {
  title: 'Collaborative ',
  description: 'Businesses need qualified business consulting and professional advice to win over the world.'
}, {
  title: 'Communication',
  description: 'Businesses need qualified business consulting and professional advice to win over the world.'
}, {
  title: 'Ease of Setup',
  description: 'Businesses need qualified business consulting and professional advice to win over the world.'
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

const Hero4 = () => {
  return (
    <div className='py-16 px-10'>
      <div className='flex flex-col w-full h-full items-center gap-24'>
        <div className='flex flex-col md:max-w-xl text-center'>
          <p>How App Works</p>
          <p>Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Arcu cursus euismod quis viverra nibh cras.</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {cardDetails.map((cardDetail) => card(cardDetail.title, cardDetail.description))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero4