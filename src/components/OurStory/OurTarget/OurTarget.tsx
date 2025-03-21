import Image from "next/image"

const OurTarget = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <div className="container mx-auto py-20">
                <div className="card lg:card-side shadow-sm grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
                    <figure className="p-5">
                            <Image src="https://s3-alpha-sig.figma.com/img/d33d/2746/a98a6bf299045d3bdc06b082bab833b5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cEi0WelNJdLY~hW~q0Mrz~rF8RLiYIjYCBRBhFSwETcU-RuRHl30iwI7kjorkCFyrkdntIPIYD9GczLkbyUAQmzuos1r5~ZCQtAcGDCWF-ty845NfcTHnbg0Tp6t9kDjrQKjwyLP8YiVS8oxXIk9IAGkpOKWXeuQKmJdlcaMg8ECFvvJAwywTOBHaUFeAz44~wcuTOzXJ--~xaB7ojZvU7n-xxukspQAbspRFgIjeqbU-e1iTmP0yBEeskGS4uZ3oKWv1xAqzJTUSWru-3FGmXQb9Q~YMKFUlPl2SX12e9jaPO9YDu46W9wR~0dAhurnW3XolFQMrnyc5uCVxsyJSQ__" alt="Album" width={566} height={376} className="w-[328px] md:w-[566px] h-[220px] md:h-[376px] rounded-xl" />
                    </figure>
                    <div className="card-body custom-bangla-font">
                        <h2 className="card-title text-[#005A92] text-xl md:text-4xl mb-2 md:mb-6">
                            একটি মহৎ লক্ষ্য এবং সুস্থ যাত্রা
                        </h2>
                        <p className="text-[#424344] text-sm md:text-lg">
                            <span>
                                আলোর হেলথ কেয়ার এন্ড ডায়াগনস্টিক  সলিউশন একটি  বিশ্বস্ত নাম, যা সুস্থ  জীবনধারার
                                পথে  আপনাকে  সঙ্গ দেয়|  আমাদের  লক্ষ্য হল  আধুনিক  চিকিৎসা ও  ডায়াগনস্টিক  সেবার
                                মাধ্যমে সবার কাছে মানসম্মত স্বাস্থ্যসেবা পৌঁছে দেওয়া| ।
                            </span>
                            <br />
                            <span>
                                আমাদের  যাত্রা শুরু  হয়েছিল  একটি  সহজ কিন্তু  মহৎ  লক্ষ্য নিয়ে  মানুষের  সুস্বাস্থ্য  নিশ্চিত
                                করা| আধুনিক চিকিৎসা প্রযুক্তি, অভিজ্ঞ চিকিৎসক, এবং পেশাদার কর্মীবাহিনী নিয়ে আমরা
                                প্রতিদিনই  আমাদের সেবার মান উন্নত করার চেষ্টা করছি, যেন আমরা সবার জন্য স্বাস্থ্যসেবা
                                নিশ্চিত করতে পারি|
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTarget