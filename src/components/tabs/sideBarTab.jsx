import React from 'react';
import { sideBarItems } from '@/static';
import { Tab, TabList } from '@headlessui/react';
import { classNames } from '@/utills/reuse-functions';
import { useDispatch } from 'react-redux';
import { setCurrentTab } from '@/globalStates/actions/commanAction';

const Sidebar = ({ name = 'default', className = '', itemClassName = '', showIconWithActive = false }) => {

    const dispatch = useDispatch()

    const handleTabChange = (event, index) => {
        event?.stopPropagation()
        dispatch(setCurrentTab({ name: `sidebar_${name}`, details: { selectedIndex: index, label: event.target.innerText } }))
    }

    return (
        <div className={`left_content ${className}`}>
            <TabList className="p-4 md:p-6 xl:p-8 bg-[#FFFFFF] border border-[#d5bee6] rounded-2xl flex lg:flex-col lg:items-start flex-wrap gap-2 lg:gap-1 items-center">
                {sideBarItems?.[name].map((item, index) => (
                    <Tab as="li" key={item?.label} className={({ selected }) =>
                        classNames(
                            'flex gap-2 py-2 items-center outline-none', itemClassName,
                            selected ? 'text-[#4361EE] font-bold' : 'text-[#17181C] font-bold'
                        )
                    }
                        onClick={(event) => handleTabChange(event, index)}
                    >
                        {({ selected }) => (
                            <>
                                {
                                    showIconWithActive && selected &&
                                    <SvgIcon name={item?.icon} className={`stroke-[#4361EE]`} />
                                }

                                {
                                    !showIconWithActive && item?.icon &&
                                    <SvgIcon name={detail?.icon} className={`${selected ? 'stroke-[#4361EE]' : 'stroke-[#17181C]'}`} />
                                }
                                <button data-target={`panel-${index + 1}`} className={classNames(
                                    'tab-link ext-[#4361EE] lg:text-[18px] lg:leading-[28px] font-figtree font-semibold',
                                    selected ? 'text-[#4361EE]' : 'text-[#17181C]'
                                )}>
                                    {item?.label}
                                </button>
                            </>
                        )}
                    </Tab>
                ))}
            </TabList>
        </div>
    );
};

export default Sidebar;
