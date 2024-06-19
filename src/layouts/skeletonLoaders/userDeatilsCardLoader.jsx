import { useId } from "react";

const UserDeatilsCardLoader = ({ count }) => {
    return (
        [...Array(count)].map((item) => {
            let loaderid = useId()
            return (
                <div key={`User_deatils_card_loader_${item}-${loaderid}`} className="p-4 animate-pulse border border-[#F1E7F8] flex flex-row gap-4 lg:justify-between md:p-6 lg:p-8 bg-white rounded-2xl">
                    <div className="profile w-28 h-28 hidden lg:block bg-gray-300 rounded-full"></div>
                    <div className="info flex flex-col gap-4 lg:w-[90%]">
                        <div className="flex flex-col gap-4 lg:justify-between xl:flex-row">
                            <div className="left flex flex-col gap-1">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-32 h-6 bg-gray-300 rounded"></div>
                                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                                </div>
                                <div className="w-40 h-4 bg-gray-300 rounded"></div>
                                <div className="flex items-center gap-1">
                                    <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                                    <div className="w-24 h-4 bg-gray-300 rounded"></div>
                                </div>
                            </div>

                            <div className="right flex items-center gap-2 md:gap-4 lg:items-start lg:gap-[17px]">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div className="work_btn w-32 h-10 bg-gray-300 rounded-full"></div>
                                <div className="w-32 h-10 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex gap-3 flex-wrap lg:gap-30">
                            <div className="w-24 h-4 bg-gray-300 rounded"></div>
                            <div className="w-28 h-4 bg-gray-300 rounded"></div>
                            <div className="flex items-center gap-1">
                                <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                                <div className="w-24 h-4 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                        <div className="w-full h-20 bg-gray-300 rounded"></div>
                        <div className="flex gap-[10px] flex-wrap">
                            <div className="py-0.5 px-2 w-40 h-6 bg-gray-300 rounded-full"></div>
                            <div className="py-0.5 px-2 w-32 h-6 bg-gray-300 rounded-full"></div>
                            <div className="py-0.5 px-2 w-32 h-6 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
            )
        })
    );
};

export default UserDeatilsCardLoader