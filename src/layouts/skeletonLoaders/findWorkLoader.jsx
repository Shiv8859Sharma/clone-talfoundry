import React, { useId } from 'react';

const FindWorkLoader = ({ count }) => {
    return (
        [...Array(count)].map((item) => {
            let loaderid =  useId()
            return <li key={`find_work_loader_${item}-${loaderid}`} className="p-8 animate-pulse border border-[#F1E7F8] rounded-[16px] bg-[#FFFFFF] flex flex-col gap-6">
                <div className="details_top flex flex-wrap justify-between">
                    <div className="top_left flex items-center gap-4">
                        <div className="skeleton-loader w-12 h-12 bg-gray-300 rounded-full"></div> {/* Skeleton loader for job image */}
                        <div className="job_details flex flex-col gap-2">
                            <div className="skeleton-loader w-40 h-6 bg-gray-300 rounded"></div> {/* Skeleton loader for job title */}
                            <div className="skeleton-loader w-24 h-4 bg-gray-300 rounded"></div> {/* Skeleton loader for company name */}
                        </div>
                    </div>

                    <div className="top_right flex gap-1 pl-14 sm:pl-16 md:pl-0">
                        <div className="skeleton-loader w-6 h-4 bg-gray-300 rounded"></div> {/* Skeleton loader for time ago */}
                        <div className="skeleton-loader w-12 h-4 bg-gray-300 rounded"></div> {/* Skeleton loader for time unit */}
                    </div>
                </div>

                <ul className="tags flex flex-wrap items-center gap-2">
                    {[...Array(4)].map((_, index) => (
                        <li key={index} className="bg-gray-300 px-2 py-1 rounded-full flex items-center gap-2">
                            <div className="skeleton-loader w-6 h-6 bg-gray-200 rounded-full"></div> {/* Skeleton loader for tag icon */}
                            <div className="skeleton-loader w-16 h-4 bg-gray-200 rounded"></div> {/* Skeleton loader for tag text */}
                        </li>
                    ))}
                </ul>

                <div className="desc">
                    <div className="skeleton-loader w-full h-16 bg-gray-300 rounded"></div>
                </div>

                <div className="apply_btn w-full">
                    <div className="skeleton-loader w-full h-12 bg-gray-300 rounded-full"></div> {/* Skeleton loader for apply button */}
                </div>
            </li>
        })
    );
};

export default FindWorkLoader;
