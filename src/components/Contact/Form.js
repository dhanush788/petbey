import React from 'react'

const Form = () => {
  return (
    <div className='mx-4 md:mx-10 my-4 md:my-10 flex flex-col bg-[#F7F7F8] rounded-xl px-3 py-5 md:py-16 md:px-8 gap-4 md:gap-10'>
      <div className='flex flex-row justify-center gap-3 md:gap-6 text-center items-center'>
        <div className='px-5 md:px-10 py-3 bg-red rounded-full text-white font-semibold text-xs md:text-lg'>General Enquiry</div>
        <div className='px-5 md:px-10 py-3 border border-red rounded-full text-red font-semibold text-xs md:text-lg'>Partnership</div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
        <div className='flex flex-col gap-3'>
          <label className='text-xs md:text-lg font-semibold'>Full name </label>
          <input type='text' placeholder='Enter full name' className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'></input>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='text-xs md:text-lg font-semibold'>Your email</label>
          <input type='text' placeholder='Enter email address' className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'></input>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='text-xs md:text-lg font-semibold'>Phone Number</label>
          <input type='text' placeholder='Enter Phone Number' className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'></input>
        </div>
        <div className='flex flex-col gap-3'>
          <label className='text-xs md:text-lg font-semibold'>Subject</label>
          <input type='text' placeholder='Enter Subject' className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'></input>
        </div>
        <div className='flex flex-col gap-3 md:col-span-2'>
          <label className='text-xs md:text-lg font-semibold'>We can help you?</label>
          <input type='text' placeholder='Type your message here...' className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'></input>
        </div>
      </div>
      <div className='flex flex-row justify-end gap-6'>
        <div className='px-5 md:px-10 py-3 bg-red rounded-full text-white font-semibold text-xs md:text-lg'>Send Message</div>
      </div>
      

    </div>
  )
}

export default Form