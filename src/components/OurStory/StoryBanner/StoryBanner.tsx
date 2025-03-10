
const StoryBanner = () => {
    return (
        <div
            className="hero min-h-[360px] md:min-h-[380px]"
            style={{
                backgroundImage: "url(https://s3-alpha-sig.figma.com/img/188e/83cb/8d2396305728e405dda997bbc02a5cd2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WTjgAh5zCeAC-15HRx00RULk52bWlbTvytwpzIL7oWU76YJlFc-vEmXqIYF14Du-03j-oCI7fYTuSC65gsJBsikMR8UB7OEBS05EzTPTKeiZc8Dt3j6bY07yghz-6FfZnW2DoYs92SkcONqmqYH0uXJFcBrabFlLNeJo3YU6X~LqVVf8Vk416b9wv4Axho4gos2e5zjnsv-v-X1mQG5V9ll~7Hb8UYrdQSFTQkdiBPzLH1sR0Ht3fKObuplHI3~3dDzFeBhv8dA-KRj-rLBEbVYFwouQ~aAg~z9C~a2C6ZCOf5SpDP-Jw16GijC8L3T5uDKlHyWv94X7mpELHcn31A__)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center custom-bangla-font">
                <div className="max-w-5xl">
                    <h1 className="mb-5 text-xl md:text-4xl lg:text-6xl font-bold">
                        আপনার স্বাস্থ্য, আমাদের অঙ্গীকার
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default StoryBanner