import React from 'react'
import { IoCall } from 'react-icons/io5'
import { MdMail } from 'react-icons/md'

const TopNavbar = () => {
    return (
        <div className="bg-[#F3F3F3] py-3">
            <div className='text-[#424344] container mx-auto flex justify-around items-center gap-4'>
                <div className="">
                    <img src="/assets/logo.png" alt="" height={95} width={128} className='image-full w-[74px] md:w-[128px]' />
                    <p className='custom-bangla-font lg:text-xl md:text-sm text-xs'>হেলথ কেয়ার এন্ড ডায়াগনস্টিক সলিউশন</p>
                </div>
                <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
                    <div className="flex items-center justify-center gap-2">
                        <IoCall className='text-[#00AEEF] w-5 h-5 md:w-6' />
                        <p className='text-sm md:text-xl custom-bangla-font '>+8801329570483</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <MdMail className='text-[#00AEEF] w-5 h-5 md:w-6' />
                        <p className='text-sm md:text-xl'>test@gmail.com</p>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <button className='bg-[#001522] text-[#F9FAFB] rounded-full p-4 text-[16px] custom-bangla-font'>আজই অ্যাপয়েন্টমেন্ট নিন</button>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar