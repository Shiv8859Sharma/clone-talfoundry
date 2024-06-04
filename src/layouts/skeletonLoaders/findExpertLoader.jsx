const FindExpertLoader = ({ count }) => {
    return (
        [...Array(count)].map((item) => {
            return <li key={`Find_Expert_Loader_${item}`} className="py-8 px-6 animate-pulse border border-[#F1E7F8] rounded-[16px] bg-[#FFFFFF] flex flex-col items-center gap-6">
                <div className="expert_img relative w-20 h-20">
                    <div className="exp_img">
                        <div className="skeleton-loader bg-gray-200 rounded-full w-20 h-20"></div>
                    </div>
                    <div className="flag absolute bottom-0 right-0">
                        <div className="skeleton-loader bg-gray-200 rounded-full w-6 h-6"></div>
                    </div>
                </div>

                <div className="exp_detail flex flex-col gap-4">
                    <div className="detail_txt flex flex-col items-center gap-1">
                        <div className="skeleton-loader bg-gray-200 rounded-full w-32 h-8"></div>
                        <div className="skeleton-loader bg-gray-200 rounded-full w-48 h-6"></div>
                    </div>

                    <ul className="exp_cat flex items-center gap-1">
                        <li className="skeleton-loader bg-gray-200 rounded-full w-20 h-6"></li>
                        <li className="skeleton-loader bg-gray-200 rounded-full w-20 h-6"></li>
                        <li className="skeleton-loader bg-gray-200 rounded-full w-6 h-6"></li>
                    </ul>

                    <div className="details_btm flex items-center justify-center gap-2">
                        <div className="hours px-2 border-r border-[#BBBDC8]">
                            <div className="skeleton-loader bg-gray-200 rounded-full w-12 h-6"></div>
                        </div>

                        <div className="rating flex items-center gap-2">
                            <div>
                                <div className="skeleton-loader bg-gray-200 rounded-full w-6 h-6"></div>
                            </div>
                            <div>
                                <div className="skeleton-loader bg-gray-200 rounded-full w-8 h-6"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hire_btn w-4/5">
                    <div className="skeleton-loader bg-gray-200 rounded-full w-full h-12"></div>
                </div>
            </li>
        })

    )
}

export default FindExpertLoader