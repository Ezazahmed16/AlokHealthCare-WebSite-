// HeroDoctorsSchedules

"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import stethoscopeImage from "../../../../public/stethoscope.png";

const doctorsSchedules = [
  {
    day: "শনিবার",
    doctors: [
      { name: "ডা. আহমেদ হাসান (কার্ডিওলজিস্ট)", time: "৯:০০ AM - ২:০০ PM" },
      { name: "ডা. মুনাইমা মান্নান (পেডিয়াট্রিশিয়ান)", time: "১০:০০ AM - ২:০০ PM" },
      { name: "ডা. রাজীব চৌধুরী (গ্যাস্ট্রোএন্টারোলজি বিশেষজ্ঞ)", time: "১১:০০ AM - ৮:০০ PM" },
      { name: "ডা. নাজিম ইমরান (নেফ্রোলজি বিশেষজ্ঞ)", time: "৫:০০ PM - ৮:০০ PM" },
      { name: "ডা. ফজলুল রহমান (গাইনোকোলজিস্ট)", time: "৭:০০ AM - ৮:০০ PM" },
    ],
  },
];

const HeroDoctorsSchedules = () => {
  return (
    <section className="py-10 bg-[#F3F3F3] relative" aria-labelledby="schedule-heading">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <h2
            id="schedule-heading"
            className="text-xl sm:text-2xl md:text-4xl font-bold text-[#005A92] custom-bangla-font text-end md:text-center mx-auto sm:text-left flex items-center justify-center"
          >
            আপনার প্রয়োজন অনুযায়ী চিকিৎসক সেবা, প্রতিদিন
            <div className="w-28 sm:w-36 md:w-44 lg:w-52">
              <Image
                src={stethoscopeImage}
                alt="Stethoscope"
                className="w-full h-auto"
                priority
              />
            </div>
          </h2>
        </div>

        {doctorsSchedules.map(({ day, doctors }) => (
          <div key={day} className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-3xl mx-auto">
            <div className="bg-[#00AEEF] text-white text-center py-3 text-xl md:text-2xl font-semibold custom-bangla-font">
              {day}
            </div>

            <table className="w-full border-collapse border border-[#424344]">
              <thead>
                <tr className="bg-[#EBEBEB] text-[#001522] text-lg custom-bangla-font">
                  <th className="border border-gray-300 px-3 py-2 text-left">
                    <span className="text-sm md:text-base">ডাক্তার</span>
                  </th>
                  <th className="border border-gray-300 px-3 py-2 text-left">
                    <span className="text-sm md:text-base">সময়</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctors.map(({ name, time }, index) => (
                  <tr key={index} className="text-base md:text-lg custom-bangla-font text-[#424344]">
                    <td className="border border-gray-300 px-3 py-3">
                      <div className="flex flex-wrap items-center gap-2">{name}</div>
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <div className="flex items-center">{time}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      {/* Right-bottom image */}
      <div className="absolute bottom-4 right-4 w-40 md:w-48 lg:w-56 z-20 hidden md:flex">
        <Image
          src={stethoscopeImage}
          alt="Stethoscope"
          className="w-full h-auto"
          priority
        />
      </div>
    </section >
  );
};

export default HeroDoctorsSchedules;
