import React from 'react';

const HeroBanner = () => {
    return (
        <section>
            <div
                className="hero min-h-[270px] md:min-h-screen image-full"
                style={{
                    backgroundImage:
                        "url(https://s3-alpha-sig.figma.com/img/0c84/5827/aeb95a0276025a0d3412970f9d7c0467?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TqrJhX1WKs9-H8FD7lJEdpZRMNrd2iIhwphIoKmbLHdPKbTcRlsGvjWaYcnuv~9tPWFh3XZv0HSAfOE-XZxzfAYbYAXP76Tkx~zgqWm7fSpkJa0Z75zdD2aR7wsefGfx71nI-BTKhVmS88y-Ntgjm8cGwQ3XWri0iJqCa~yNbovANy1nSaQ5OeGHuUl2F1VBsNTTPkUufQ0UBEplFUQgaAZL2qsDSWjdQq7~O4BLleJt2afyoHVyYcIKtx9V5WxV4ojqQmOHzTK1UewmtqOhh~I6a4e2yLuU1jrMZ9O1-fkV83kPV0JKhZATQyYmggjgHdopvcV~wuUMVRp8GboB7Q__)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-start">
                    <div className="w-full py-10 md:py-5">
                        <h1 className="custom-bangla-font text-2xl md:text-6xl text-[#F9FAFB] text-left">
                            <span>সুস্থ জীবনের শুরু এখানে,</span>
                            <span className="block">আলোক হেলথ কেয়ার</span>
                            <span>এন্ড ডায়াগনস্টিক সলিউশন</span>
                        </h1>
                        <p className="my-5 text-[#F9FAFB] text-sm md:text-lg">
                            আধুনিক স্বাস্থ্যসেবা কেন্দ্র, যেখানে নির্ভুল ডায়াগনস্টিক টেস্ট, উন্নত চিকিৎসা পরামর্শ এবং
                            মানসম্পন্ন স্বাস্থ্যসেবা প্রদান করা হয়। দক্ষ চিকিৎসক ও অভিজ্ঞ ল্যাব টেকনিশিয়ানদের মাধ্যমে
                            সর্বাধুনিক প্রযুক্তি ব্যবহার করে আমরা রোগ নির্ণয় ও চিকিৎসা নিশ্চিত করি। আমাদের সেবার মধ্যে
                            রয়েছে ব্লাড টেস্ট, আল্ট্রাসোনোগ্রাফি, এক্স-রে, স্বাস্থ্য পরীক্ষা প্যাকেজ এবং বিশেষজ্ঞ চিকিৎসকের
                            পরামর্শ। সাশ্রয়ী মূল্যে দ্রুত ও নির্ভরযোগ্য স্বাস্থ্যসেবা পেতে আলোক হেলথকেয়ার অ্যান্ড ডায়াগনস্টিক
                            সল্যুশন আপনার নির্ভরযোগ্য ঠিকানা।
                        </p>
                        <button className="btn bg-[#FFDE24] rounded-full border-0">
                            <span className="custom-bangla-font text-[#001522] px-4 md:px-5">সেবা সম্পর্কে জানুন</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
