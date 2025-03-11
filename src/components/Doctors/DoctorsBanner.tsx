
const DoctorsBanner = () => {
    return (
        <div
            className="hero min-h-[360px] md:min-h-[380px]"
            style={{
                backgroundImage: "url(https://s3-alpha-sig.figma.com/img/77c6/8e73/5a7e02c59afbe495ffe48681d070ce5d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ne4V4pgy0EJE7DzBV060CkVGKFqd7iwKsaasLPI2cQUa9YCLyR1r2LArrwTV26aGL5gLnfmN3VHKLdEMl-431WB8XjhNhnTjZGDpnYoPRwWmH0lP~4oWOaFdeYDgn9oR8p7lV4~CDtHcrvosa~1BTy86hvnSiKx188ZudukoUB1e6R26H4dbhULc5wY~oCT~N2q42UuKV0TULytW8S8A3zNDTB2DyM-lfXkOY070DQNWnTfG7jOANAQsT5ppGLz28pg9X57alrsdPqpC1WFHLvIJ2T5h9KnQkHf6DkVRNigWRQ1bdA7barXyK66JbUiThJn96sbo6CLcqXn~ccKQwg__)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center custom-bangla-font">
                <div className="max-w-5xl">
                    <h1 className="mb-5 text-xl md:text-4xl lg:text-6xl font-bold">
                        পছন্দের ডাক্তার খুঁজুন সহজেই!
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default DoctorsBanner