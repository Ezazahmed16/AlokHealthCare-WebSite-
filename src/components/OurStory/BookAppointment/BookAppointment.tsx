import CommonButton from '@/components/shared/CommonButton/CommonButton'
import React from 'react'

const BookAppointment = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <div className="container mx-auto py-20">
                <div
                    className="hero h-[502px] max-w-6xl mx-auto bg-cover bg-center relative rounded-xl "
                    style={{
                        backgroundImage: "url(https://s3-alpha-sig.figma.com/img/94ef/3a60/9355ffb2c5ea40e30276a60a8d8b740f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aa0y7g2Nfl6wdGWK6HmRUBvfU08LubDfwoQQ0go56J6CWt1Idwk55cGvCBh5PJ6nA3T6Y4oRkjLBLuJDTXovNiIjF14~y4R-QhHW3BPY~N8AuAgUQuDZeUtszcbssWjIMiPOt70PZt-BQOXis40dlQyjQuY7CRszgq3xHAjN9eKKAuE92IhUOtuYvBdiNjQ-EPzYHof1tS2bAHqGj1NaUO0TuDoHyNerral6LWVvTwiNjvN67Cb3kB06Beqd2rzuatspeoglTfUbai8hvtz~EPG4zftcgHOYKWuDORpBgD5p4kXPPWoJz21rJFWvdmNa4Ds6tXZTuwuAxUQJn59lPA__)",
                    }}>
                    <div className="hero-overlay rounded-xl"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-2xl custom-bangla-font">
                            <h1 className="mb-5 text-xl md:text-4xl font-bold">
                                আজই আপনার অ্যাপয়েন্টমেন্ট নিন
                            </h1>
                            <p className="mb-5 text-sm md:text-md">
                                আমরা আধুনিক প্রযুক্তি এবং অভিজ্ঞ চিকিৎসকদের সাহায্যে দ্রুত এবং সহজ প্রক্রিয়ায় উন্নত সেবা প্রদান করি,
                                যাতে আপনি দ্রুত এবং সঠিক চিকিৎসা লাভ করতে পারেন|
                            </p>
                            <div className="">
                                <CommonButton>
                                    অ্যাপয়েন্টমেন্ট নিন
                                </CommonButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookAppointment