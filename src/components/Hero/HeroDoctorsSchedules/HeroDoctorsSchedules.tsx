// HeroDoctorsSchedules

"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import stethoscopeImage from "../../../../public/stethoscope.png"; // If 'stethoscope.png' is inside the 'public' folder


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
      <div className="container mx-auto px-4 relative z-10 w-[970px]">
        <h2
          id="schedule-heading"
          className="text-4xl font-bold text-[#005A92] text-center py-20 custom-bangla-font"
        >
          আপনার প্রয়োজন অনুযায়ী চিকিৎসক সেবা, প্রতিদিন
        </h2>

        {doctorsSchedules.map(({ day, doctors }) => (
          <div key={day} className="bg-white shadow-md rounded-lg overflow-hidden relative">
            <div className="bg-[#00AEEF] text-white text-center py-3 text-4xl font-semibold custom-bangla-font">
              {day}
            </div>

            <table className="w-full border-collapse border-[1px] border-[#424344]">
              <thead>
                <tr className="bg-[#EBEBEB] text-[#001522] text-lg custom-bangla-font">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    <span className="text-[#001522] text-xl">ডাক্তার</span>
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    <span className="text-[#001522] text-xl">সময়</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {doctors.map(({ name, time }, index) => (
                  <tr key={index} className="text-xl custom-bangla-font text-[#424344]">
                    <td className="border border-gray-300 px-4 py-4">{name}</td>
                    <td className="border border-gray-300 px-4 py-4">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Right-bottom image */}
      <div className="absolute bottom-4 right-4 w-40 md:w-48 lg:w-56 z-20">
        <Image
          src={stethoscopeImage}
          alt="Stethoscope"
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default HeroDoctorsSchedules;
