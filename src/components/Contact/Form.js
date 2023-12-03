import React from 'react'

const Form = () => {

  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mx-6 md:mx-36 my-4 md:my-10 flex flex-col bg-[#F7F7F8] rounded-xl px-3 py-5 md:py-16 md:px-8 gap-4 md:gap-10'>
        <div className='flex flex-row justify-center gap-3 md:gap-6 text-center items-center'>
          <div className='px-5 md:px-10 py-3 bg-red rounded-full text-white font-semibold text-xs md:text-lg'>General Enquiry</div>
          <div className='px-5 md:px-10 py-3 border border-red rounded-full text-red font-semibold text-xs md:text-lg'>Partnership</div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10'>
          <div className='flex flex-col gap-3'>
            <label htmlFor='fullName' className='text-xs md:text-lg font-semibold'>
              Full name
            </label>
            <input
              type='text'
              id='fullName'
              name='fullName'
              placeholder='Enter full name'
              className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'
              autoComplete='name'
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='email' className='text-xs md:text-lg font-semibold'>
              Your email
            </label>
            <input
              type='email'
              id='email_address'
              name='email'
              placeholder='Enter email address'
              className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'
              autoComplete='email'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='phoneNumber' className='text-xs md:text-lg font-semibold'>Phone Number</label>
            <input
              type='tel'
              id='phoneNumber'
              name='phoneNumber'
              placeholder='Enter Phone Number'
              className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'
              autoComplete='tel'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col gap-3'>
            <label htmlFor='subject' className='text-xs md:text-lg font-semibold'>Subject</label>
            <input
              type='text'
              id='subject'
              name='subject'
              placeholder='Enter Subject'
              className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full'
              autoComplete='subject'
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex flex-col gap-3 md:col-span-2'>
            <label htmlFor='message' className='text-xs md:text-lg font-semibold'>
              We can help you?
            </label>
            <textarea
              id='message'
              name='message'
              placeholder='Type your message here...'
              className='border border-[#D3D3D3] rounded-lg md:rounded-2xl px-4 py-3 bg-[#F3F5F6] w-full resize-none'
              autoComplete='message'
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
            ></textarea>
          </div>
        </div>
        <div className='flex flex-row justify-end gap-6'>
          <button
            type='submit'
            className='px-5 md:px-10 py-3 bg-red rounded-full text-white font-semibold text-xs md:text-lg'
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form