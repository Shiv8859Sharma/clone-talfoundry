import { InputField, SelectField } from '@/components/formFields';
import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SvgIcon from "@/assets/svg";
import { searchFilterOptionsJson } from "@/static";
import { isArray, isEmpty } from "lodash";
import { Disclosure, DisclosureButton, DisclosurePanel, Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Pagination from "@/components/pagination";
import PageHeading from '../../layouts/pageHeading';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const SearchJobAndFreelancerLayout = (props) => {
    let { type = '', children, filterCountes = {}, handleActiveTab = () => { }, totalItems = 0, currentPage = 1, handlePageChange = () => { }, updateList = () => { }, searchPlaceholder = 'Search freelancer by skill & role' } = props
    const location = useLocation();
    const [search, setSearch] = useState('')
    const [filterData, setFilterData] = useState({})

    useEffect(() => {
        let searchvalue = location?.state?.search
        if (searchvalue) {
            setSearch(searchvalue)
        }
    }, [])

    let timerId = 0

    const handleSkillSearch = (e) => {
        const { value } = e.target;
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            setSearch(value)
            updateList({
                search: value,
                filter: filterData
            })
        }, 500)
    }

    const getFilterData = (name, value, type, checked, prevData) => {
        if (type === 'checkbox') {
            const values = prevData[name] || [];
            return {
                ...prevData,
                [name]: checked
                    ? [...values, value]
                    : values.filter((v) => v !== value),
            };
        } else if (type === 'select') {
            return {
                ...prevData,
                [name]: value?.value,
            };
        } else {
            return {
                ...prevData,
                [name]: value,
            };
        }
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        let data = getFilterData(name, value, type, checked, { ...filterData })
        setFilterData(data);
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            updateList({
                search,
                filter: data
            })
        }, 500)
    };

    const removeFilterValue = (key, valueToRemove) => {
        if (key === 'clear all') {
            setFilterData({})
        } else {
            setFilterData(prevFilterData => {
                const updatedData = { ...prevFilterData };
                updatedData[key] = isArray(updatedData[key]) ? updatedData[key].filter(item => item !== valueToRemove) : [];
                return updatedData;
            });
        }
    };

    let tabList = [
        { label: 'Search', icon: 'search-icon' },
        { label: 'Recommended', icon: 'RecommendedStar' },
        { label: `Saved ${type}`, icon: 'bookmark' },
    ]

    return (
        <main className="pt-2">
            <PageHeading title={`Search ${type}`} />
            <section className="w-[calc(100%-212px)] mx-auto py-6 flex gap-5">
                <div className="flex flex-col gap-5 w-full md:w-9/12 lg:w-4/5">
                    <div className="flex items-center gap-3 p-4 w-full rounded-full border bg-[#FFFFFF] border-[#F1E7F8]">

                        <form onSubmit={(e) => e.preventDefault()} onInput={handleSkillSearch} className="w-full">
                            <div className="flex gap-2 items-center">
                                <InputField
                                    name='skill'
                                    type='text'
                                    placeholder={searchPlaceholder}
                                    defaultValue={search}
                                    leftIcon={<SvgIcon name='search-icon' className='stroke-[#292D32]' />}
                                />
                            </div>
                        </form>
                    </div>
                    {Object.entries(filterData).filter(([key, values]) => !isEmpty(filterData[key])).length ?
                        <div className="flex gap-4 items-center">
                            {
                                Object.entries(filterData).map(([category, values], index) => (
                                    <React.Fragment key={`filterCategory_${index}`}>
                                        {[...(isArray(values) ? values : values ? [values] : [])].map((item, index) => (
                                            <div key={`filterData_${category}_${index}`} className="flex items-center gap-1 py-1 px-2.5 bg-[#E0E2FF] rounded-full">
                                                <span className="font-figtree font-normal text-xs text-[#17181C]">{item}</span>
                                                <span className="cursor-pointer" onClick={() => removeFilterValue(category, item)}>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M15.7123 16.7729L7.22699 8.28765C6.93708 7.99773 6.93708 7.5169 7.22699 7.22699C7.51691 6.93707 7.99774 6.93707 8.28765 7.22699L16.7729 15.7123C17.0628 16.0022 17.0628 16.483 16.7729 16.7729C16.483 17.0628 16.0022 17.0628 15.7123 16.7729Z" fill="#17181C"></path>
                                                        <path d="M7.22706 16.7729C6.93715 16.483 6.93715 16.0022 7.22706 15.7123L15.7123 7.22699C16.0023 6.93707 16.4831 6.93707 16.773 7.22699C17.0629 7.5169 17.0629 7.99773 16.773 8.28765L8.28772 16.7729C7.99781 17.0628 7.51698 17.0628 7.22706 16.7729Z" fill="#17181C"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        ))}
                                    </React.Fragment>
                                ))
                            }

                            <div className="">

                                {Object.entries(filterData).filter(([key, values]) => !isEmpty(filterData[key])).length ?
                                    <span className="font-figtree font-semibold text-sm text-[#4361EE] cursor-pointer" onClick={() => removeFilterValue('clear all')}>Clear All</span>
                                    : ''
                                }
                            </div>
                        </div>
                        : ''
                    }

                    <TabGroup>
                        <div>
                            <TabList className="flex items-center justify-between border-b border-[#F1E7F8]">
                                {tabList.map((detail, index) => {
                                    return (
                                        <Tab as="li" key={detail?.label} className={({ selected }) =>
                                            classNames(
                                                'py-5 px-6 flex gap-2 items-center outline-none',
                                                selected ? 'text-[#4361EE] font-bold' : 'text-[#17181C] font-bold'
                                            )
                                        }
                                            onClick={handleActiveTab}
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <SvgIcon name={detail?.icon} className={`${selected ? 'stroke-[#4361EE]' : 'stroke-[#17181C]'}`} />
                                                    <button data-target={`panel-${index + 1}`} className={classNames(
                                                        'tab-link sm:text-sm text-[18px] leading-[28px] font-figtree',
                                                        selected ? 'text-[#4361EE]' : 'text-[#17181C]'
                                                    )}>
                                                        {detail?.label}
                                                    </button>
                                                </>
                                            )}
                                        </Tab>
                                    )
                                })}

                            </TabList>
                        </div>
                        <TabPanels>
                            {
                                tabList.map((detail) => {
                                    return (
                                        <TabPanel key={`search-job-freelancer-layout-panel$-${detail?.label}`}>
                                            {children}
                                        </TabPanel>
                                    )
                                })
                            }
                        </TabPanels>
                    </TabGroup>
                </div>


                <div className="flex flex-col bg-white rounded-2xl border border-[#F1E7F8] px-4 py-4 hidden md:flex lg:flex md:w-1/4 lg:w-1/5">
                    <div className="flex justify-between items-center pt-2.5 px-4">
                        <div>
                            <span className="font-bold text-2xl">Filter</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <SvgIcon name="bookmark" className="stroke-[#4361EE]" />
                            <span className="text-[#4361EE] text-sm font-semibold">Save search</span>
                        </div>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()} onInput={handleChange}>
                        {searchFilterOptionsJson.map((filter, index) => (
                            <Disclosure as="div" key={`searchFilterOptionsJson_${index}`} defaultOpen={true} className="pt-4">
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex justify-between items-center py-2.5 px-4 w-full text-left">
                                            <span className="font-bold text-base text-[#17181C]">{filter?.label}</span>
                                            <ChevronDownIcon className={`w-6 h-6 ${open ? 'transform rotate-180' : ''}`} />
                                        </DisclosureButton>
                                        <DisclosurePanel className="py-2.5 px-4">
                                            {filter?.inputType === 'select' && (
                                                <SelectField
                                                    name={filter?.name}
                                                    options={filter?.options}
                                                    leftIcon={<SvgIcon name="search-icon" className="stroke-[#292D32]" />}
                                                    onChange={handleChange}
                                                />
                                            )}
                                            {filter?.inputType === 'checkbox' && (
                                                filter?.fields.map((field) => {
                                                    const countValue = filter?.labelCountKey === 'job_type' ? filterCountes?.[filter?.labelCountKey]?.[field?.label]?.['Total Count'] : filterCountes?.[filter?.labelCountKey]?.[field?.label] ?? 0;
                                                    return (
                                                        <React.Fragment key={field?.label}>
                                                            <div className="py-2.5 flex justify-between items-center">
                                                                <div className="flex gap-2 items-center">
                                                                    <input
                                                                        type="checkbox"
                                                                        name={field?.name}
                                                                        value={field.value}
                                                                        checked={filterData?.[field?.name]?.includes(field.value)}
                                                                        disabled={!countValue}
                                                                    />
                                                                    <span className="text-[#3E4048] text-sm">{field?.label}</span>
                                                                </div>
                                                                <span className="text-[#6D6F79] text-xs">{countValue}</span>
                                                            </div>
                                                            {filter?.label === 'Job Type' && field?.nestedInput && (
                                                                <div className="py-2.5 px-4">
                                                                    {field?.nestedInput?.type === 'range' && (
                                                                        <>
                                                                            <div className="flex gap-2 items-center justify-start pl-[24px]">
                                                                                <span className="text-[#3E4048] text-sm">{field?.nestedInput?.label}</span>
                                                                            </div>
                                                                            <div className="flex gap-2 items-center justify-start  pl-4">
                                                                                <input
                                                                                    className="w-full"
                                                                                    type="range"
                                                                                    name="job_hourly_range"
                                                                                    defaultValue={filterData?.['job_hourly_range']}
                                                                                    min={field?.nestedInput?.min}
                                                                                    max={field?.nestedInput?.max}
                                                                                    step={field?.nestedInput?.step}
                                                                                    disabled={!filterData?.[field?.name]?.includes('hourly')}
                                                                                />
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                    {field?.nestedInput?.type === 'radio' && (
                                                                        field?.nestedInput?.fields.map((nestField) => {
                                                                            let nestFieldCount = filterCountes?.[filter?.labelCountKey]?.[field?.label]?.[nestField?.label] || 0
                                                                            return (
                                                                                <div className="py-2.5 flex justify-between gap-2 pl-4" key={nestField?.label}>
                                                                                    <div className="flex gap-2">
                                                                                        <input
                                                                                            type={nestField?.type}
                                                                                            name={nestField?.name}
                                                                                            value={nestField.value}
                                                                                            defaultChecked={filterData?.[nestField?.name]?.includes(nestField.value)}
                                                                                            disabled={filterData?.[field?.name]?.includes('fixed price') ? !nestFieldCount : true}
                                                                                        />
                                                                                        <span className="text-[#3E4048] text-sm">{nestField?.label}</span>
                                                                                    </div>
                                                                                    <span className="text-[#6D6F79] text-xs">{nestFieldCount}</span>
                                                                                </div>
                                                                            );
                                                                        })
                                                                    )}
                                                                </div>
                                                            )}
                                                        </React.Fragment>
                                                    );
                                                })
                                            )}
                                            {filter?.inputType === 'timeZone' && (
                                                <SelectField
                                                    name={filter?.name}
                                                    options={filter?.options}
                                                    leftIcon={<SvgIcon name="search-icon" className="stroke-[#292D32]" />}
                                                />
                                            )}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </form>
                </div>

            </section>
            <section className="w-[calc(100%-212px)] mx-auto py-6 flex gap-5">
                {totalItems > 0 &&
                    <Pagination
                        totalItems={totalItems}
                        itemsPerPage={10}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />}
            </section>
        </main>
    )
}

export default memo(SearchJobAndFreelancerLayout);