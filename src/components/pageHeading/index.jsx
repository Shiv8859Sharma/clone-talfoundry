const PageHeadeing = (props) => {
    const { title } = props
    return (
        <section className="bg-[#FFFFFF] shadow-[inset_0px_-1px_0px_0px_#F1E7F8]">
            <div className="default_container max-w-xs sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto">
                <div className="content py-5 flex items-center justify-between">
                    <div className="left_content">
                        <span className="font-figtree font-bold text-[24px] leading-[34px]">
                            {title}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeadeing