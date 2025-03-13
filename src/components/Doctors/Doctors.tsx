"use client";
import { MdArrowRightAlt } from "react-icons/md";
import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "ডা. আহমেদ হাসান",
    specialist: "বিশেষজ্ঞ, কিডনি বিভাগ (নেফ্রোলজি)",
    experience: "১০+ বছরের অভিজ্ঞতা",
    visitingTime: "+৮৮০১৭XXXXXXXX",
    visitingHour: "৯:০০ AM - ৫:০০ PM",
    image:
      "https://s3-alpha-sig.figma.com/img/cfdb/880b/2f6fd142999c7c4d7f852aa2b31e1b34?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hkTWRUbTEYWxA9Zz8g0e1NweuUq3J6IERSX9tF9sz3X2Jc0Drdy3WDfyy-pJHhzGVbT5jdFChM9HIr9FfOiQbswZjb1kt4PWPfkHn2cowzaZT9ylTuRGmc6oFT1BETECsyuDruFxM-KhFK6xGSoZqzh6jhsBp9QfMA-rnHtXCdrmYt8vLsajN2amF6g0resj5q1My7hMl5X5G2JxjO1lh8ON1n6QW0sHVDtxCIdqpkgQG9qfQTHUmk8Xju61zScg6~FimrjkZDsjzHGibw86HHLPIeHUlLG6lQiQ0yH4olVEO6RXRkCVgEhl2BNaqk5FA0-KVf-YUtCQzXIhK~3H0A__",
  },
  {
    id: 2,
    name: "ডা. আহমেদ হাসান",
    specialist: "বিশেষজ্ঞ, কিডনি বিভাগ (নেফ্রোলজি)",
    experience: "১০+ বছরের অভিজ্ঞতা",
    visitingTime: "+৮৮০১৭XXXXXXXX",
    visitingHour: "৯:০০ AM - ৫:০০ PM",
    image:
      "https://s3-alpha-sig.figma.com/img/cfdb/880b/2f6fd142999c7c4d7f852aa2b31e1b34?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hkTWRUbTEYWxA9Zz8g0e1NweuUq3J6IERSX9tF9sz3X2Jc0Drdy3WDfyy-pJHhzGVbT5jdFChM9HIr9FfOiQbswZjb1kt4PWPfkHn2cowzaZT9ylTuRGmc6oFT1BETECsyuDruFxM-KhFK6xGSoZqzh6jhsBp9QfMA-rnHtXCdrmYt8vLsajN2amF6g0resj5q1My7hMl5X5G2JxjO1lh8ON1n6QW0sHVDtxCIdqpkgQG9qfQTHUmk8Xju61zScg6~FimrjkZDsjzHGibw86HHLPIeHUlLG6lQiQ0yH4olVEO6RXRkCVgEhl2BNaqk5FA0-KVf-YUtCQzXIhK~3H0A__",
  },
  {
    id: 3,
    name: "ডা. আহমেদ হাসান",
    specialist: "বিশেষজ্ঞ, কিডনি বিভাগ (নেফ্রোলজি)",
    experience: "১০+ বছরের অভিজ্ঞতা",
    visitingTime: "+৮৮০১৭XXXXXXXX",
    visitingHour: "৯:০০ AM - ৫:০০ PM",
    image:
      "https://s3-alpha-sig.figma.com/img/cfdb/880b/2f6fd142999c7c4d7f852aa2b31e1b34?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hkTWRUbTEYWxA9Zz8g0e1NweuUq3J6IERSX9tF9sz3X2Jc0Drdy3WDfyy-pJHhzGVbT5jdFChM9HIr9FfOiQbswZjb1kt4PWPfkHn2cowzaZT9ylTuRGmc6oFT1BETECsyuDruFxM-KhFK6xGSoZqzh6jhsBp9QfMA-rnHtXCdrmYt8vLsajN2amF6g0resj5q1My7hMl5X5G2JxjO1lh8ON1n6QW0sHVDtxCIdqpkgQG9qfQTHUmk8Xju61zScg6~FimrjkZDsjzHGibw86HHLPIeHUlLG6lQiQ0yH4olVEO6RXRkCVgEhl2BNaqk5FA0-KVf-YUtCQzXIhK~3H0A__",
  },
];

const Doctors = () => {
  return (
    <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6">
      {doctors.map((heroDoctor) => (
        <div
          key={heroDoctor.id}
          className="card bg-base-100 shadow-xl custom-bangla-font"
        >
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
            <h2 className="card-title text-xl md:text-xl mx-auto pb-2">
              {heroDoctor.name}
            </h2>
            <p>
              <span className="font-bold text-xs md:text-sm">বিশেষত্ব: </span>
              {heroDoctor.specialist}
            </p>
            <p>
              <span className="font-bold text-xs md:text-sm">অভিজ্ঞতা: </span>
              {heroDoctor.experience}
            </p>
            <p>
              <span className="font-bold text-xs md:text-sm">যোগাযোগ: </span>
              {heroDoctor.visitingTime}
            </p>
            <p>({heroDoctor.visitingHour})</p>
            <div className="card-actions justify-center py-2">
              <button className="border-2 border-[#00AEEF] rounded-full p-6 flex items-center justify-center">
                বিস্তারিত দেখুন{" "}
                <MdArrowRightAlt className="text-[#001522] h-6 w-6 ml-2" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctors;
