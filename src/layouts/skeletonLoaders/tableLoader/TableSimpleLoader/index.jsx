import { memo, useId } from "react"

const TableSimpleLoader = ({ tbCount = 6, trCount = 10 }) => {
    return (
        [...Array(trCount)].map((tr) => {
            let loaderid = useId()
            return <tr key={`table_loader-${loaderid}_${tr}`} className="animate-pulse">
                {
                    [...Array(tbCount)].map((td, index) => {
                        let tdloaderid = useId()
                        return <td key={`table_td_loader-${tdloaderid}_${td}`} className={index ===  0 ? "pt-3 px-8" : '' }>
                            <div className="w-11/12 h-6 bg-gray-300 rounded">{td}</div>
                        </td>
                    })
                }

            </tr>
        })


    )
}

export default memo(TableSimpleLoader)