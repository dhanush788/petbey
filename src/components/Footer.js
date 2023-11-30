import React from 'react'
import { styles } from '../style'

const Footer = () => {
    return (
        <div className='bg-[#F3F5F6] flex items-center flex-col'>
            <div className='w-full flex flex-col gap-y-8 md:flex-row py-6 md:py-16 px-6 max-w-7xl'>
                <div className='flex flex-1'>
                    <div className='flex flex-col md:mx-auto text-left gap-y-5'>
                        <div className='flex flex-row'>
                            <img src='./logo1.png' alt='logo' className='h-12'></img>
                        </div>
                        <p className={`${styles.heroSubText}`}>Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.</p>

                    </div>
                </div>
                <div className='flex flex-1'>
                    <div className='flex flex-col md:mx-auto gap-y-3 '>
                        <p className={`${styles.heroSubHeadText}`}>Social Media</p>
                        <p className={`${styles.heroSubText}`}>Instagram</p>
                        <p className={`${styles.heroSubText}`}>Facebook</p>
                        <p className={`${styles.heroSubText}`}>LinkedIn</p>
                        <p className={`${styles.heroSubText}`}>WhatsApp</p>
                    </div>
                </div>
                <div className='flex flex-1'>
                    <ul className='flex flex-col md:mx-auto gap-y-3 w-full'>
                        <p className={`${styles.heroSubHeadText}`}>Get in Touch</p>
                        <p className={`${styles.heroSubText}`}>Question or feedback? We’d love to hear from you.</p>
                        <input type='text' placeholder='Your email' className='border-2 border-gray-300 rounded-md px-4 py-3 bg-[#F3F5F6] w-full'></input>
                    </ul>
                </div>
            </div>
            <div className='bg-red w-full flex justify-center py-2 md:py-4'>
                <p className={`${styles.heroSubText2}`}>© 2023 Petbey. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer