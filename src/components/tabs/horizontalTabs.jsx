import { Tab, TabList } from "@headlessui/react"
import { horizontalTabItems } from "@/static"
import { classNames } from '@/utills/reuse-functions';

const HorinatalTabs = (props) => {
    let { name = 'default', className = 'justify-between', tabClassName = '', tabUnActiveClassName = '', tabActiveClassName = '' } = props
    return (
        <div>
            <TabList className={`flex overflow-x-auto scrollbar border-b border-[#F1E7F8] ${className}`}>
                {horizontalTabItems?.[name].map((item, index) => {
                    return (
                        <Tab as="li" key={item?.label} className={({ selected }) =>
                            classNames(
                                `flex gap-2 items-center outline-none  font-bold ${tabClassName}`,
                                selected ? `${tabActiveClassName}` : `${tabUnActiveClassName}`
                            )
                        }
                        // onClick={handleActiveTab}
                        >
                            {({ selected }) => (
                                <>
                                    {/* <SvgIcon name={detail?.icon} className={`${selected ? 'stroke-[#4361EE]' : 'stroke-[#17181C]'}`} /> */}
                                    <button data-target={`panel-${index + 1}`} className={classNames(
                                        'tab-link sm:text-sm text-[18px] leading-[28px] font-figtree',
                                    )}>
                                        {item.icon && (
                                            <span className="flex items-center gap-2">
                                                <img src={item.icon} alt="" className="w-5 h-5" />
                                                {item.label}
                                            </span>
                                        )}
                                        {!item.icon && item.label}
                                    </button>
                                </>
                            )}
                        </Tab>
                    )
                })}
            </TabList>
        </div>
    )
}

export default HorinatalTabs