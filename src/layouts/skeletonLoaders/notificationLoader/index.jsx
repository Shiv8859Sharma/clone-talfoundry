import { memo, useId } from "react"

const NotificationLoader = ({ count }) => {
    return (
        [...Array(count)].map((item) => {
            let loaderid = useId()
            return (
                <div key={`notification_loader${item}-${loaderid}`} className="flex justify-between lg:items-center p-6 border-b border-[#F1E7F8] animate-pulse">
                    <div className="flex">
                        <div className="logo flex justify-center lg:items-center">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        </div>
                        <div className="detail flex flex-col gap-2 px-6">
                            <div>
                                <div className="w-96 h-4 bg-gray-300 rounded"></div>
                            </div>
                            <div>
                                <div className="w-16 h-4 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    </div>
                </div>

            )
        })
    )
}

export default memo(NotificationLoader);