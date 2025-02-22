"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* Arrow Button Component */
const ArrowButton = ({ onClick, direction }: { onClick?: () => void; direction: "prev" | "next" }) => {
  const isNext = direction === "next";
  return (
    <button
      onClick={onClick}
      aria-label={isNext ? "Next testimonial" : "Previous testimonial"}
      className={`absolute ${isNext ? "right-[-30px]" : "left-[-30px]"} top-1/2 transform -translate-y-1/2 z-20 text-[#00AEEF] hover:text-[#005A92] text-2xl focus:outline-none focus:ring-2 focus:ring-[#00AEEF] rounded-full`}
    >
      {isNext ? (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 51.3334C15.1134 51.3334 4.6667 40.8867 4.6667 28.0001C4.6667 15.1134 15.1134 4.66675 28 4.66675C40.8867 4.66675 51.3334 15.1134 51.3334 28.0001C51.3334 40.8867 40.8867 51.3334 28 51.3334Z" stroke="#001522" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M25.06 36.2365L33.2733 27.9998L25.06 19.7632" stroke="#001522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      ) : (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 51.3334C40.8867 51.3334 51.3333 40.8867 51.3333 28.0001C51.3333 15.1134 40.8867 4.66675 28 4.66675C15.1134 4.66675 4.66667 15.1134 4.66667 28.0001C4.66667 40.8867 15.1134 51.3334 28 51.3334Z" stroke="#001522" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M30.94 36.2365L22.7266 27.9998L30.94 19.7632" stroke="#001522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      )}
    </button>
  );
};

const Testimonials = () => {
  const settings = {
    className: "testimonial-slider",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <ArrowButton direction="next" />,
    prevArrow: <ArrowButton direction="prev" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "20px" } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "10px" } },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "আফিফ চৌধুরী",
      text: "এখানকার পরিষেবা আমার প্রত্যাশার থেকেও ভালো ছিল। ডাক্তারদের অভিজ্ঞতা, সঠিক রোগ নির্ণয় এবং চিকিৎসা আধুনিক পদ্দতি আমার সুস্থতার পথ সহজ করে তুলেছে। আমি সবার কাছে আলোক হেলথ কেয়ার সুপারিশ করবো।",
      boldText: "সঠিক রোগ নির্ণয় এবং চিকিৎসা আধুনিক পদ্দতি",
    },
    {
      id: 2,
      name: "সালমা ইসলাম",
      text: "পরিষেবার মান অসাধারণ! আমি দ্রুত স্বাস্থ্য পরীক্ষা করিয়েছি এবং রিপোর্ট যথাযথ সময়ে হাতে পেয়েছি। ডাক্তারদের আন্তরিকতা সত্যিই প্রশংসনীয়।",
      boldText: "ডাক্তারদের আন্তরিকতা সত্যিই প্রশংসনীয়",
    },
    {
      id: 3,
      name: "রাজিব আহমেদ",
      text: "আমি আলোক হেলথ কেয়ার থেকে সম্পূর্ণ সন্তুষ্ট। আধুনিক প্রযুক্তির ব্যবহার এবং দক্ষ চিকিৎসকদের পরামর্শ সত্যিই বিশ্বস্ত।",
      boldText: "আধুনিক প্রযুক্তির ব্যবহার এবং দক্ষ চিকিৎসকদের পরামর্শ",
    },
  ];

  return (
    <section className="py-10 bg-[#EBEBEB] overflow-hidden" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4 relative">
        <h1 id="testimonials-heading" className="text-4xl font-bold text-[#005A92] text-center py-10">
          আপনার মতামত আমাদের প্রেরণা
        </h1>

        <Slider {...settings}>
          {testimonials.map(({ id, name, text, boldText }) => (
            <div key={id} className="px-2 py-16">
              <article className="bg-white shadow-lg rounded-lg pt-16 pb-6 px-6 relative h-[380px] flex flex-col justify-between" aria-label={`Testimonial from ${name}`}>
                {/* Decorative Icon */}
                <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 z-20" aria-hidden="true">
                  <svg width="120" height="120" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="76" cy="76" r="74" fill="#F3F3F3" stroke="#00AEEF" strokeWidth="4" />
                    <circle cx="76" cy="76" r="62" fill="#001522" />
                    <path d="M64.27 74.8899H50.2C50.44 60.8799 53.2 58.5699 61.81 53.4699C62.8 52.8699 63.13 51.6099 62.53 50.5899C61.96 49.5999 60.67 49.2699 59.68 49.8699C49.54 55.8699 46 59.5299 46 76.9599V93.1299C46 98.2599 50.17 102.4 55.27 102.4H64.27C69.55 102.4 73.54 98.4099 73.54 93.1299V84.1299C73.54 78.8799 69.55 74.8899 64.27 74.8899Z" fill="#00AEEF" />
                    <path d="M96.73 74.8899H82.66C82.9 60.8799 85.66 58.5699 94.27 53.4699C95.26 52.8699 95.59 51.6099 94.99 50.5899C94.39 49.5999 93.13 49.2699 92.11 49.8699C81.97 55.8699 78.43 59.5299 78.43 76.9899V93.1599C78.43 98.2899 82.6 102.43 87.7 102.43H96.7C101.98 102.43 105.97 98.4399 105.97 93.1599V84.1599C106 78.8799 102.01 74.8899 96.73 74.8899Z" fill="#00AEEF" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-center text-lg font-medium leading-relaxed flex-grow">
                  “{text.split(boldText)[0]}
                  <span className="font-bold text-black">{boldText}</span>
                  {text.split(boldText)[1]}”
                </blockquote>

                {/* Name */}
                <footer className="text-center text-[#001522] font-semibold mt-4">
                  --- {name} ---
                </footer>

                {/* Star Rating */}
                <div className="flex justify-center mt-2 text-yellow-500" aria-label="5-star rating">
                  ⭐⭐⭐⭐⭐
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
