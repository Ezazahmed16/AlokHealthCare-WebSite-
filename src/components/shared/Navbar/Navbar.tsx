import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='custom-bangla-font'>
            <div className="navbar bg-[#00AEEF] text-[#F9FAFB] text-xl">
                {/* Left side (Booking button in responsive) */}
                <div className="navbar-start w-full md:w-auto flex justify-between md:justify-start py-3">
                    <div className="md:hidden">
                        <button className='bg-[#001522] text-[#F9FAFB] rounded-full px-4 py-5 md:py-8 text-[14px] custom-bangla-font'>
                            আজই অ্যাপয়েন্টমেন্ট নিন
                        </button>
                    </div>

                    {/* Menu button (right in responsive) */}
                    <div className="dropdown md:hidden flex items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#FFDE24" />
                                <path d="M13 18C11.9 18 11 18.9 11 20C11 21.1 11.9 22 13 22C14.1 22 15 21.1 15 20C15 18.9 14.1 18 13 18Z" stroke="#001522" strokeWidth="1.5" />
                                <path d="M27 18C25.9 18 25 18.9 25 20C25 21.1 25.9 22 27 22C28.1 22 29 21.1 29 20C29 18.9 28.1 18 27 18Z" stroke="#001522" strokeWidth="1.5" />
                                <path d="M20 18C18.9 18 18 18.9 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18Z" stroke="#001522" strokeWidth="1.5" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content right-0 mt-3 w-52 rounded-box shadow bg-[#00AEEF] text-[#F9FAFB] text-xl z-[1]">
                            <li className='border-b-2 border-[#FFDE24] border-opacity-50'>
                                <Link href='/'>হোম</Link>
                            </li>
                            <li className='border-b-2 border-[#FFDE24] border-opacity-50'>
                                <Link href='/ourstorys'>আমাদের গল্প</Link>
                            </li>
                            <li className='border-b-2 border-[#FFDE24] border-opacity-50'>
                                <Link href='/doctors'>ডাক্তারের সময়সূচী</Link>
                            </li>
                            <li className='border-b-2 border-[#FFDE24] border-opacity-50'>
                                <Link href='/'>পরীক্ষার খরচ ও বিস্তারিত</Link>
                            </li>
                            <li className='border-b-2 border-[#FFDE24] border-opacity-50'>
                                <Link href='/contact'>যোগাযোগ করুন</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Center menu for larger screens */}
                <div className="navbar-center hidden lg:flex w-full">
                    <ul className="menu menu-horizontal gap-6 w-full justify-center">
                        <li><Link href='/'>হোম</Link></li>
                        <li><Link href='/ourstorys'>আমাদের গল্প</Link></li>
                        <li><Link href='/doctors'>ডাক্তারের সময়সূচী</Link></li>
                        <li><Link href='/'>পরীক্ষার খরচ ও বিস্তারিত</Link></li>
                        <li><Link href='/contact'>যোগাযোগ করুন</Link></li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;