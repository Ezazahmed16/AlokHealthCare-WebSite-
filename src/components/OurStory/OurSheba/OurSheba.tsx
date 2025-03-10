import React from 'react';

const OurSheba = () => {
    return (
        <div className="w-full flex flex-col-reverse lg:flex-row bg-[#EBEBEB] md:p-5 lg:p-0">
            
            {/* Text Section */}
            <div className="w-full lg:w-2/3 flex flex-col justify-center pt-32 p-5 lg:p-12">
                <h2 className="text-[#005A92] text-xl md:text-2xl lg:text-4xl font-bold mb-4">
                    আমাদের সেবা ও মান
                </h2>
                <h3 className="text-[#424344] text-sm md:text-md lg:text-lg mb-6 max-w-xl">
                    আমরা বিশ্বাস করি যে প্রতিটি রোগীই বিশেষ এবং তাদের জন্য বিশেষ যত্ন প্রয়োজন। আমাদের বিশেষত্ব:
                </h3>
                
                {["আধুনিক চিকিৎসা প্রযুক্তি", "অভিজ্ঞ ডাক্তার ও পেশাদার কর্মী", "দ্রুত এবং নির্ভুল ডায়াগনস্টিক রিপোর্ট", "রোগীর প্রয়োজনই আমাদের প্রথম অগ্রাধিকার"].map((text, index) => (
                    <div key={index} className="flex items-center gap-3 py-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#00AEEF" />
                        </svg>
                        <span className="text-[#424344] text-sm md:text-md lg:text-lg">{text}</span>
                    </div>
                ))}
            </div>
            
            {/* Image Section */}
            <div className="lg:w-1/3 flex justify-center items-center bg-[#005A92] 
            w-[360px] md:w-[435px] h-[176px] md:h-[654px] mx-auto relative">
                <img 
                    src="https://s3-alpha-sig.figma.com/img/0117/66a4/eba32c651f71bcc8a87be8ff779fe050?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=swGIZ2wJ50JPGhKZnvw6BdOdyWSvUWLGp95t1HY-mwjvF6JYEruaQqtNBciRFpCY1uMSEVx2n~pID1u2902liJ70u0chU9DLx9cjuWRErCC30i8P6Vxi3QmxUmbNjcKy1JtRDe~ELoN7p0kj3K85NE212BQv71jtBVB8-gEMiYj0IBif8tR6b0PLTCbPBVwEgHhjLTAZYOqKxrbX3Sr4Ji2MiKFM5hN0qhig7nAo98FrjSfIeuyD1EFwyU~I35RvX9~q3hnOCURLUs9t3xQsF-9FrZEFsL1bW8b1RSem3AJoKSp0BqtjUimxSNzVvKjhh-RWPCMem7NenG8yAUw40A__" 
                    alt="Our Services" 
                    className="min-h-[239px] md:min-h-[437px] min-w-[328px] md:min-w-[600px] rounded-2xl absolute justify-center items-center mx-auto top-10 md:top-1/2 md:transform md:-translate-y-1/2 left-auto md:-left-2/4 px-5"
                />
            </div>
        </div>
    );
}

export default OurSheba;