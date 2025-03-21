import CommonButton from '@/components/shared/CommonButton/CommonButton';
import React from 'react';

const HeroBanner = () => {
    return (
        <section>
            <div
                className="hero min-h-[270px] md:min-h-screen image-full"
                style={{
                    backgroundImage:
                        "url(https://s3-alpha-sig.figma.com/img/0c84/5827/aeb95a0276025a0d3412970f9d7c0467?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n2rPvWWmjgOJuio05xBJM7rr-Vn53ldYR1dKHu1tjYSZMOFF5iSoA5M04Q4kKD8gpZ0V169Z-A3fFcyM6I7LjB1XuztXHtvOrnKB8ZHCf6v92FZAT4QGEux4zGDtYOBwvcaW9y-1B6IhRAtHhW64x~~g9UjVZ2KwpaLOGx2kyAtE~vsrvYdmwDTVmT8YaQOIqgwgP49t3rG98IeWsYpj2JNzJMEx0u0EP0ACgXXI~6WPzi0az308qXww360t5RJaAyGJCHtdlj7sG~Jd7hlXP2MR649tJX9KVsMU3wsM7xwtc2p-UT0hdKaisDxnCJN~qBNXugDWmEa51SZilZIY1A__)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-start">
                    <div className="container mx-auto py-5">
                        <h1 className="custom-bangla-font text-2xl md:text-6xl text-[#F9FAFB] text-left font-bold" style={{ textShadow: '0px 0px 20px rgba(0, 0, 0, 0.25)' }}>
                            <span>সুস্থ জীবনের শুরু এখানে,</span>
                            <span className="block my-1">আলোক হেলথ কেয়ার</span>
                            <span>এন্ড ডায়াগনস্টিক সলিউশন</span>
                        </h1>
                        <p className="my-4 text-[#F9FAFB] text-sm md:text-lg">
                            আধুনিক স্বাস্থ্যসেবা কেন্দ্র, যেখানে নির্ভুল ডায়াগনস্টিক টেস্ট, উন্নত চিকিৎসা পরামর্শ এবং
                            মানসম্পন্ন স্বাস্থ্যসেবা প্রদান করা হয়। দক্ষ চিকিৎসক ও অভিজ্ঞ ল্যাব টেকনিশিয়ানদের মাধ্যমে
                            সর্বাধুনিক প্রযুক্তি ব্যবহার করে আমরা রোগ নির্ণয় ও চিকিৎসা নিশ্চিত করি। আমাদের সেবার মধ্যে
                            রয়েছে ব্লাড টেস্ট, আল্ট্রাসোনোগ্রাফি, এক্স-রে, স্বাস্থ্য পরীক্ষা প্যাকেজ এবং বিশেষজ্ঞ চিকিৎসকের
                            পরামর্শ। সাশ্রয়ী মূল্যে দ্রুত ও নির্ভরযোগ্য স্বাস্থ্যসেবা পেতে আলোক হেলথকেয়ার অ্যান্ড ডায়াগনস্টিক
                            সল্যুশন আপনার নির্ভরযোগ্য ঠিকানা।
                        </p>
                        <CommonButton>
                            সেবা সম্পর্কে জানুন
                        </CommonButton>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default HeroBanner;
