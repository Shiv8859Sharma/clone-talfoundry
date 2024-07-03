import { memo } from "react";
import Pagination from "@/components/pagination";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage"
import CustomLoader from "@/layouts/skeletonLoaders"

const CommonTable = (props) => {
    let {
        className = '',
        theadClassName = '',
        tbodyClassName = '',
        tfootClassName = '',
        pagination = false,
        totalItems = 0,
        itemsPerPage = 10,
        currentPage = 1,
        handlePageChange = () => { },
        data = [],
        columns = [],
        noDataAvailableMessage = 'Table data is not present',
        isLoading = false
    } = props

    const renderHeader = () => {
        return (
            <thead className={theadClassName}>
                <tr>
                    {columns.map(({ label, className }, index) => (
                        <th
                            key={`table-header-column-${index}-${label?.replace(/\s+/g, '_')}`}
                            className={className}
                        >
                            {label}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    };

    const renderBody = () => {
        if (isLoading) {
            return (
                <CustomLoader count={{ tbCount: 6, trCount: 10 }} name='TableLoader' tableLoaderName='TableSimpleLoader' />
            );
        }

        if (!Array.isArray(data) || data.length === 0) {
            return (
                <tr>
                    <td colSpan={columns.length || 1} className="pt-5">
                        <NoDataFoundMessage
                            message={!Array.isArray(data) ? 'Table data is incorrect. Data must be array' : noDataAvailableMessage}
                        />
                    </td>
                </tr>
            );
        }

        return data.map((item, rowIndex) => (
            <tr className="" key={`table-body-row-${rowIndex}`}>
                {columns.map(({ label, tdClassname, valueKey, render }, colIndex) => (
                    <td
                        key={`table-body-column-${colIndex}-${label?.replace(/\s+/g, '_')}`}
                        className={tdClassname}
                    >
                        {render ? render(item) : item?.[valueKey]}
                    </td>
                ))}
            </tr>
        ));
    };


    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-1">
                    <div className="overflow-hidden p-1">
                        <table className={`Table min-w-full ${className}`}>
                            {renderHeader()}
                            <tbody className={tbodyClassName}>
                                {renderBody()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {pagination &&
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            }
        </div>
    )

}

export default memo(CommonTable)


