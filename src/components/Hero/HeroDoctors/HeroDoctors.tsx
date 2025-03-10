"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonButton from "@/components/shared/CommonButton/CommonButton";

/* Arrow Button Component */
const ArrowButton = ({ onClick, direction }: { onClick?: () => void; direction: "prev" | "next" }) => {
    const isNext = direction === "next";
    return (
        <button
            onClick={onClick}
            aria-label={isNext ? "Next doctor" : "Previous doctor"}
            className={`absolute ${isNext ? "right-[-30px]" : "left-[-30px]"} top-1/2 transform -translate-y-1/2 z-20 text-[#00AEEF] hover:text-[#005A92] text-2xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] rounded-full`}
        >
            {isNext ? (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8799 26.5599L20.5732 17.8666C21.5999 16.8399 21.5999 15.1599 20.5732 14.1333L11.8799 5.43994" stroke="#001522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            ) : (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.12 26.5599L11.4267 17.8666C10.4 16.8399 10.4 15.1599 11.4267 14.1333L20.12 5.43994" stroke="#001522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )}
        </button>
    );
};

const heroDoctorsData = [
    {
        id: 1,
        name: 'ডা. আহমেদ হাসান',
        specialist: 'হৃদরোগ বিশেষজ্ঞ (কার্ডিওলজিস্ট)',
        experience: '১০ বছরের অভিজ্ঞতা',
        visitingTime: 'প্রতি সপ্তাহে সোমবার ও বুধবার',
        visitingHour: '৫ টা - ৮ টা',
        image: 'https://img.freepik.com/premium-photo/portrait-smiling-doctor-white-uniform-standing-with-crossed-hands-grey-background_168410-1747.jpg?w=740'
    },
    {
        id: 2,
        name: 'ডা. ফারিয়া আক্তার',
        specialist: 'মানসিক স্বাস্থ্য বিশেষজ্ঞ',
        experience: '১৫ বছরের অভিজ্ঞতা',
        visitingTime: 'প্রতি সপ্তাহে মঙ্গলবার ও শুক্রবার',
        visitingHour: '১০ টা - ১ টা',
        image: 'https://img.freepik.com/premium-photo/cheerful-middle-aged-male-doctor-working-with-patient-anamnesis-holding-folder-smiling-panorama-free-space_116547-53173.jpg?w=826'
    },
    {
        id: 3,
        name: 'ডা. মোহাম্মদ আকিল',
        specialist: 'অতিরিক্ত সঙ্গীত চিকিৎসা বিশেষজ্ঞ',
        experience: '১২ বছরের অভিজ্ঞতা',
        visitingTime: 'প্রতি সপ্তাহে বৃহস্পতিবার ও শনিবার',
        visitingHour: '৪ টা - ৭ টা',
        image: 'https://img.freepik.com/premium-photo/cheerful-handsome-african-american-man-looking-copy-space_116547-49056.jpg?w=826'
    },
];

const HeroDoctors = () => {
    const settings = {
        className: "hero-doctor-slider",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <ArrowButton direction="next" />,
        prevArrow: <ArrowButton direction="prev" />,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "15px" } },
            { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10px" } },
        ],
    };

    return (
        <section className='py-10 bg-[#F3F3F3] overflow-hidden'>
            <div className="container mx-auto px-8 relative">
                <h1 className='text-xl md:text-4xl font-bold text-[#005A92] custom-bangla-font text-center py-10 px-2'>
                    বিশেষজ্ঞ ডাক্তারদের সাথে সুস্বাস্থ্যের পথে এক ধাপ এগিয়ে
                </h1>

                <Slider {...settings}>
                    {heroDoctorsData.map((heroDoctor) => (
                        <div key={heroDoctor.id} className="py-8 p-2">
                            <div className="card bg-base-100 shadow-xl custom-bangla-font">
                                <figure>
                                    <Image
                                        height={328}
                                        width={370}
                                        className="h-64 md:h-80 w-full object-cover"
                                        src={heroDoctor.image}
                                        alt={heroDoctor.name}
                                    />
                                </figure>
                                <div className="card-body text-center text-[#001522] mx-auto p-2 mt-2">
                                    <h2 className="card-title text-xl md:text-xl mx-auto pb-2">{heroDoctor.name}</h2>
                                    <p><span className="font-bold text-xs md:text-sm">বিশেষত্ব: </span>{heroDoctor.specialist}</p>
                                    <p><span className="font-bold text-xs md:text-sm">অভিজ্ঞতা: </span>{heroDoctor.experience}</p>
                                    <p><span className="font-bold text-xs md:text-sm">যোগাযোগ: </span>{heroDoctor.visitingTime}</p>
                                    <p>({heroDoctor.visitingHour})</p>
                                    <div className="card-actions justify-center py-2">
                                        <button className="border-2 border-[#00AEEF] rounded-full p-6 flex items-center justify-center">
                                            বিস্তারিত দেখুন <MdArrowRightAlt className="text-[#001522] h-6 w-6 ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="py-3 md:py-5 flex justify-center">
                    {/* <button className="p-4 md:p-9 border border-[#dedede] bg-[#FFDE24] rounded-full flex items-center justify-center">
                        <span className="text-[#001522] text-xl">সমস্ত বিশেষজ্ঞ দেখুন</span>
                    </button> */}
                    <CommonButton>সমস্ত বিশেষজ্ঞ দেখুন</CommonButton>
                </div>
            </div>
        </section>
    );
};

export default HeroDoctors;
