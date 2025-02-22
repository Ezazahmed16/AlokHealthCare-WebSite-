import React from 'react'

const HeroBanner = () => {
    return (
        <section className=''>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/baby-visiting-doctor-checkup_53876-139548.jpg?t=st=1739572059~exp=1739575659~hmac=261be6cba379f6f907457d62329b1d452ac81b9f43c0f1b421d9fccb5d3a5be5&w=740)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-start">
                    <div className="">
                        <h1 className="custom-bangla-font text-6xl text-[#F9FAFB] text-left">
                            <span>
                                সুস্থ জীবনের শুরু এখানে,
                            </span>
                            <span className='block'>
                                আলোক হেলথ কেয়ার
                            </span>
                            <span>এন্ড ডায়াগনস্টিক সলিউশন</span>
                        </h1>
                        <p className="my-5 text-[#F9FAFB] text-lg">
                            আপনার এবং আপনার পরিবারের জন্য আধুনিক চিকিৎসার নির্ভরযোগ্য কেন্দ্র। আমাদের সেবায় আস্থা রাখুন |।
                        </p>
                        <button className="btn bg-[#FFDE24] rounded-full border-0">
                            <span className='custom-bangla-font text-[#001522] px-4'>সেবা সম্পর্কে জানুন</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroBanner