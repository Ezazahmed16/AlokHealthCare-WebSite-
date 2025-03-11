'use client';
import { useState } from "react";
import { X, Search } from "lucide-react";
import CommonButton from "../shared/CommonButton/CommonButton";

const doctors = [
    {
        id: 1,
        name: "ডা. আহমেদ হাসান",
        specialty: "বিশেষজ্ঞ, কিডনি বিভাগ (নেফ্রোলজি)",
        experience: "১০+ বছরের অভিজ্ঞতা",
        contact: "ফোনঃ +৮৮০১৭XXXXXXXX",
        image: "/doctor-placeholder.jpg",
    },
    {
        id: 2,
        name: "ডা. আহমেদ হাসান",
        specialty: "বিশেষজ্ঞ, কিডনি বিভাগ (নেফ্রোলজি)",
        experience: "১০+ বছরের অভিজ্ঞতা",
        contact: "ফোনঃ +৮৮০১৭XXXXXXXX",
        image: "/doctor-placeholder.jpg",
    },
    {
        id: 3,
        name: "ডা. আহমেদ হাসান",
        specialty: "বিশেষজ্ঞ, কিডনি বিভাগ (নেফ্রোলজি)",
        experience: "১০+ বছরের অভিজ্ঞতা",
        contact: "ফোনঃ +৮৮০১৭XXXXXXXX",
        image: "/doctor-placeholder.jpg",
    },
];

const Doctors = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="container mx-auto p-6">
            {/* Search & Filters */}
            <div className="flex flex-wrap gap-3 items-center mb-6">
                <input
                    type="text"
                    className="w-[250px] bg-[#F9FAFB] px-3 py-2 rounded-2xl focus:outline-none focus:ring-2"
                    style={{border: "1px solid var(--Heading, #005A92);", boxShadow: '4px 4px 16px 0px rgba(0, 0, 0, 0.06)'}}
                    placeholder="ডাক্তারের নাম দিয়ে খুঁজুন"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <CommonButton>
                    খুঁজুন
                </CommonButton>
            </div>

            {/* Doctors List */}
            <div className="grid md:grid-cols-3 gap-6">
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className="border border-dashed border-gray-400 p-4 rounded-lg"
                    >
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <h3 className="text-lg font-semibold mt-3">{doctor.name}</h3>
                        <p className="text-gray-600">{doctor.specialty}</p>
                        <p className="text-gray-600">{doctor.experience}</p>
                        <p className="text-gray-600">{doctor.contact}</p>
                        {/* <Button className="mt-4 bg-blue-500 text-white w-full">
              বিস্তারিত দেখুন →
            </Button> */}
                        <button> বিস্তারিত দেখুন</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doctors;
