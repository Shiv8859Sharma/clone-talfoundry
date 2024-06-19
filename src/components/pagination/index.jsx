import React, { useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbersToShow = 3;

    const generatePageNumbers = () => {
        const pages = [];
        const ellipsis = '...';

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else if (currentPage < pageNumbersToShow) {
            for (let i = 1; i <= pageNumbersToShow; i++) {
                pages.push(i);
            }
            pages.push(ellipsis, totalPages);
        } else if (currentPage === pageNumbersToShow) {
            for (let i = 1; i <= pageNumbersToShow + 1; i++) {
                pages.push(i);
            }
            pages.push(ellipsis, totalPages);
        } else if (currentPage > pageNumbersToShow && currentPage < totalPages - pageNumbersToShow + 1) {
            pages.push(1, ellipsis);
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pages.push(i);
            }
            pages.push(ellipsis, totalPages);
            console.log("pages :::", pages);
        } else {
            pages.push(1, ellipsis);
            for (let i = totalPages - pageNumbersToShow; i <= totalPages; i++) {
                pages.push(i);
            }
        }

        return pages;
    };


    const pageNumbers = useMemo(() => {
        return generatePageNumbers()
    }, [currentPage]);

    return (
        <div className="w-full">
            <div className="content">
                <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                    <div className="flex flex-1 justify-between sm:hidden">
                        <button
                            onClick={() => onPageChange(currentPage - 1)}
                            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => onPageChange(currentPage + 1)}
                            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-[#BBBDC8] flex gap-1">
                                <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span>
                                -
                                <span className="font-medium">{Math.min(currentPage * itemsPerPage, totalItems)}</span>
                                of
                                <span className="font-medium">{totalItems}</span>
                            </p>
                        </div>
                        <div>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm gap-2" aria-label="Pagination">
                                <button
                                    onClick={() => onPageChange(currentPage - 1)}
                                    className="relative inline-flex items-center rounded-xl px-2 py-2 text-gray-400 ring-1 ring-inset ring-[#BBBDC8] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    disabled={currentPage === 1}
                                >
                                    <span className="sr-only">Previous</span>
                                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                                {pageNumbers.map((page, index) => (
                                    <button
                                        key={index}
                                        onClick={() => page !== '...' && onPageChange(page)}
                                        className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === page
                                            ? 'text-indigo-600'
                                            : 'text-[#BBBDC8] hover:bg-gray-50'
                                            } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                        disabled={page === '...'}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => onPageChange(currentPage + 1)}
                                    className="relative inline-flex items-center rounded-xl px-2 py-2 text-gray-400 ring-1 ring-inset ring-[#BBBDC8] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    disabled={currentPage === totalPages}
                                >
                                    <span className="sr-only">Next</span>
                                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
