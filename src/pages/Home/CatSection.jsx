const CatSection = () => {
    return (
        <section className="CAT_section bg-[#ECEFFD]">
            <div className="default_container h-full max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="cat_content py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                    <div className="cat_top lg:max-w-[50%] xl:max-w-[60%] mx-auto flex flex-col items-center justify-center gap-4">
                        <div className="title flex justify-center gap-2 flex-wrap">
                            <span className="text-3xl 3xl:text-4xl 3xl:text-5xl xl:leading-[58px] 3xl:leading-[58px] text-[#17181C] font-semibold">Choose the</span>
                            <span className="text-3xl xl:text-4xl 3xl:text-5xl xl:leading-[58px] 3xl:leading-[58px] font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">right job</span>
                            <span className="text-3xl xl:text-4xl 3xl:text-5xl xl:leading-[58px] 3xl:leading-[58px] text-[#17181C] font-semibold">for you</span>
                        </div>
                        <div className="subtitle flex items-center justify-center md:w-[80%] lg:w-[auto]">
                            <span className="text-[#3E4048] text-center text-sm md:text-base">We're sure you can find the perfect job in our panel below.
                                If you meet the requirements and consider that the benefits
                                are motivational make sure to apply using our form.</span>
                        </div>
                    </div>
                    <div className="cat_btn flex justify-center items-center">
                        <button className="px-6 py-3 rounded-full border font-semibold text-[#ECF9FD] text-sm md:text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CatSection