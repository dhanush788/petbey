import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#F3F5F6]  border-t border-gray-300 bottom-0'>
            <div className='w-full flex flex-col gap-y-16 md:flex-row p-10'>
                <div className='flex flex-1'>
                    <div className='flex flex-col mx-auto text-center gap-y-1'>
                        <div className='flex flex-row mx-auto gap-y-1'>
                            {/* <img src='logo.png' alt='logo' className='h-16 w-16 mx-auto'></img> */}
                            <p className='text-lg font-medium text-text'>CONTACT US</p>
                        </div>
                        <p className='text-lg font-medium text-text'>Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.</p>

                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='flex flex-col mx-auto text-center gap-y-4 '>
                        <p className='text-lg font-medium text-text'>Social Media</p>
                        <p className='text-lg font-medium text-text'>Instagram</p>
                        <p className='text-lg font-medium text-text'>Facebook</p>
                        <p className='text-lg font-medium text-text'>LinkedIn</p>
                        <p className='text-lg font-medium text-text'>WhatsApp</p>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <ul className='flex flex-col mx-auto gap-y-1 text-center'>
                        <p className='text-lg font-medium text-text'>Get in Touch</p>
                        <p className='text-lg font-medium text-text'>Question or feedback? We’d love to hear from you.</p>
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Footer