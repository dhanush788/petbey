import React from 'react'

const cardDetails = [{
  title: 'Esther Howard',
  description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas the futer never sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”'
}, {
  title: 'Albert Flores',
  description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas the futer never sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”'
}, {
  title: 'Ronald Richards',
  description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio massa, ultricies ut lobortis ac, egestas the futer never sit amet urna. Aenean vitae dapibus ligula, quis porttitor erat.”'
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

const Hero6 = () => {
  return (
    <div className='py-16 px-10'>
      <div className='flex flex-col w-full h-full items-center gap-24'>
        <div className='flex flex-col md:max-w-xl text-center'>
          <p>Our Happy Customers</p>
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

export default Hero6