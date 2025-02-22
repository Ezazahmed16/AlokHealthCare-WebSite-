import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='custom-bangla-font'>
            <div className="navbar bg-[#00AEEF] text-[#F9FAFB] text-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 shadow">
                            <li>
                                <Link href='/'>হোম</Link>
                            </li>
                            <li>
                                <Link href='/'>আমাদের গল্প</Link>
                            </li>
                            <li>
                                <Link href='/'>ডাক্তারের সময়সূচী</Link>
                            </li>
                            <li>
                                <Link href='/'>পরীক্ষার খরচ ও বিস্তারিত</Link>
                            </li>
                            <li>
                                <Link href='/'>যোগাযোগ করুন</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6">
                        <li>
                            <Link href='/'>হোম</Link>
                        </li>
                        <li>
                            <Link href='/'>আমাদের গল্প</Link>
                        </li>
                        <li>
                            <Link href='/'>ডাক্তারের সময়সূচী</Link>
                        </li>
                        <li>
                            <Link href='/'>পরীক্ষার খরচ ও বিস্তারিত</Link>
                        </li>
                        <li>
                            <Link href='/'>যোগাযোগ করুন</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar


{/* <li>
<Link href='/'>হোম</Link>
</li>
<li>
<Link href='/'>আমাদের গল্প</Link>
</li>
<li>
<Link href='/'>ডাক্তারের সময়সূচী</Link>
</li>
<li>
<Link href='/'>পরীক্ষার খরচ ও বিস্তারিত</Link>
</li>
<li>
<Link href='/'>যোগাযোগ করুন</Link>
</li> */}