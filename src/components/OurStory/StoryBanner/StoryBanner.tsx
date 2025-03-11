
const StoryBanner = () => {
    return (
        <div
            className="hero min-h-[360px] md:min-h-[380px]"
            style={{
                backgroundImage: "url(https://s3-alpha-sig.figma.com/img/188e/83cb/8d2396305728e405dda997bbc02a5cd2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EETGcm0s~h1NGyfyTZa-UCfTbB8IFvG59GQcAcSq7tWuaEvtUzJLm-jyakOfWFkYGN6tF6kkg-8EvL~aE~n8ma1y4UtKNOHY5WvRA8IM5x3KPs7B1ApBtv0M3BFknErcUudRJ0wTEOJ6NzdrxiKFRDq~f8Sr-8PqE6dPJH9JPhhuPeLH14mX8RUQrArlQ~eyZgQNppphSnx1ivVcJ34cdEi8T7JV2fKRQbZM~OdykFe~YNNJ33hh3pQ~y6hNQmp-TOTVgb71qQUPP0O0DwFDhrKqG~AlNFUiWPphHx8UZG~pis6ejT6I2MkiuXKAXHEBme23EE3d2OsLeuqGWtaVuA__)",
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