import PageHeading from "@/layouts/pageHeading"
import { memo } from "react";

const CEAnalytics = () => {

    return (
        <main className="">
            <PageHeading title='Analytics'>
                <div className="content_right px-[14px] py-[9px] bg-[#FFFFFF] border border-[#17181C29] rounded-[10px] flex items-center gap-2">
                    <span className="text-primary text-sm">1 year</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.66667 1.66666V4.16666M13.3333 1.66666V4.16666M2.91667 7.57499H17.0833M17.5 7.08332V14.1667C17.5 16.6667 16.25 18.3333 13.3333 18.3333H6.66667C3.75 18.3333 2.5 16.6667 2.5 14.1667V7.08332C2.5 4.58332 3.75 2.91666 6.66667 2.91666H13.3333C16.25 2.91666 17.5 4.58332 17.5 7.08332Z" stroke="#3E4048" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M13.0791 11.4167H13.0866M13.0791 13.9167H13.0866M9.99579 11.4167H10.0041M9.99579 13.9167H10.0041M6.91162 11.4167H6.91995M6.91162 13.9167H6.91995" stroke="#3E4048" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            </PageHeading>
        </main>
    )
}

export default memo(CEAnalytics);