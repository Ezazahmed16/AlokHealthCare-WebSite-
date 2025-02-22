import React from 'react'
import { IoCall } from 'react-icons/io5'
import { MdMail } from 'react-icons/md'

const TopNavbar = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className='text-[#424344] container mx-auto flex justify-around items-center gap-4'>
                <div className="">
                    <img src="/assets/logo.png" alt="" height={95} width={128} className='image-full' />
                    <p className='custom-bangla-font'>হেলথ কেয়ার এন্ড ডায়াগনস্টিক সলিউশন</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <div className="flex items-center justify-center gap-2">
                        <IoCall className='text-[#00AEEF] w-5 h-5' />
                        <p className='text-xl custom-bangla-font'>+8801329570483</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <MdMail className='text-[#00AEEF] w-5 h-5' />
                        <p className='text-xl'>test@gmail.com</p>
                    </div>
                </div>
                <div className="">
                    <button className='bg-[#001522] text-[#F9FAFB] rounded-full p-4 text-[16px] custom-bangla-font'>আজই অ্যাপয়েন্টমেন্ট নিন</button>
                </div>
            </div>
        </div>
    )
}

export default TopNavbar