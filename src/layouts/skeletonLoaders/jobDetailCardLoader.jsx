import { useId } from "react"

const JobDetailsCardLoader = ({ count }) => {
    return (
        [...Array(count)].map((item) => {
            let loaderid = useId()
            return (
                <div key={`Job_Details_Card_Loader_${item}-${loaderid}`} className="detail animate-pulse flex flex-col gap-4 p-8 bg-[#FFFFFF] rounded-2xl border-[#F1E7F8] border animate-pulse">
                    <div className="heading flex gap-4 justify-between items-center">
                        <div className="left flex flex-col gap-4">
                            <div>
                                <div className="bg-gray-200 h-5 w-32"></div>
                            </div>
                            <div>
                                <div className="bg-gray-200 h-8 w-80"></div>
                            </div>
                        </div>
                        <div className="right flex gap-4 items-center">
                            <div className="bg-gray-200 rounded-full h-14 w-14"></div>
                        </div>
                    </div>
                    <div className="paragraph flex flex-col gap-[10px]">
                        <div>
                            <div className="bg-gray-200 h-6 w-96"></div>
                        </div>
                        <div>
                            <div className="bg-gray-200 h-16 w-full"></div>
                        </div>
                    </div>
                    <div className="flex gap-[10px]">
                        <div className="py-0.5 px-2 bg-gray-200 rounded-full">
                            <div className="text-[#17181C] font-figtree font-normal text-xs h-5 w-36"></div>
                        </div>
                        <div className="py-0.5 px-2 bg-gray-200 rounded-full">
                            <div className="text-[#17181C] font-figtree font-normal text-xs h-5 w-24"></div>
                        </div>
                        <div className="py-0.5 px-2 bg-gray-200 rounded-full">
                            <div className="text-[#17181C] font-figtree font-normal text-xs h-5 w-32"></div>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div>
                            <div className="font-figtree font-normal text-xs leading-[20px] bg-gray-200 h-5 w-20"></div>
                        </div>
                        <div>
                            <div className="font-figtree font-normal text-xs leading-[20px] bg-gray-200 h-5 w-28"></div>
                        </div>
                        <div className="flex items-center">
                            <div className="font-figtree font-normal text-xs leading-[20px] bg-gray-200 h-5 w-20"></div>
                        </div>
                        <div>
                            <div className="bg-gray-200 h-4 w-44"></div>
                        </div>
                    </div>
                </div>

            )
        })
    )
}

export default JobDetailsCardLoader