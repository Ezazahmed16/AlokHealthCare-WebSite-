import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";

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
    return (
        <section className='py-10 bg-[#F3F3F3]'>
            <div className="container mx-auto">
                {/* section title */}
                <div className="">
                    <h1 className='text-4xl font-bold text-[#005A92] custom-bangla-font text-center py-10'>
                        বিশেষজ্ঞ ডাক্তারদের সাথে সুস্বাস্থ্যের পথে এক ধাপ এগিয়ে
                    </h1>
                </div>
                {/* Doctots Loop  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center p-4">
                    {
                        heroDoctorsData.map((heroDoctor) => (
                            <div key={heroDoctor.id} className="card bg-base-100 w-96 shadow-xl custom-bangla-font">
                                <figure>
                                    <Image
                                        height={328}
                                        width={370}
                                        className="h-80 w-full"
                                        src={heroDoctor.image}
                                        alt="Doctor Information" />
                                </figure>
                                <div className="card-body text-center text-[#001522]">
                                    <h2 className="card-title text-xl mx-auto pb-2">{heroDoctor.name}</h2>
                                    <p className="">
                                        <span className="font-bold">বিশেষত্ব: </span>
                                        {heroDoctor.specialist}
                                    </p>
                                    <p>
                                        <span className="font-bold">অভিজ্ঞতা: </span>
                                        {heroDoctor.experience}
                                    </p>
                                    <p>
                                        <span className="font-bold">যোগাযোগ: </span>
                                        {heroDoctor.visitingTime}
                                    </p>
                                    <p>({heroDoctor.visitingHour})</p>
                                    <div className="card-actions justify-center py-2">
                                        <button className="border-2 border-[#00AEEF] rounded-full p-6 items-center justify-center flex">
                                            বিস্তারিত দেখুন
                                            <MdArrowRightAlt className="text-[#001522] h-6 w-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Details Action */}
                <div className="py-5 mx-auto w-full flex justify-center">
                    <button className="p-9 border-1 border-[#dedede] bg-[#FFDE24] rounded-full items-center justify-center flex">
                        <span className="text-[#001522] text-xl">সমস্ত বিশেষজ্ঞ দেখুন</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroDoctors