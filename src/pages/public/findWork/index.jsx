import { InputField, SelectField } from "@/components/formFields"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
import { getPublicJobs } from "@/globalStates/actions/jobsAction"
import { useEffect } from "react"
import { isArray, isEmpty } from "lodash"
import NoDataFoundMessage from "@/constants/NoDataFoundMessage"
import CustomLoader from "@/layouts/skeletonLoaders"

const FindWork = () => {
    const dispatch = useDispatch()
    const reduxState = useSelector(state => state)
    let { publicJobs, loader } = reduxState

    useEffect(() => {
        getFreelancerList()
    }, [])

    const getFreelancerList = () => {
        dispatch(getPublicJobs())
    }

    return (
        <main>
            <section className="talent_section">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="talent_content pt-28 xl:pt-52 pb-16 flex flex-col gap-16 lg:gap-20 xl:gap-24 3xl:gap-24">
                        <div className="talent_top flex flex-col items-center gap-6 xl:gap-8">
                            <div className="talent_heading flex flex-col items-center gap-4">
                                <h1 className="flex flex-wrap justify-center gap-1 text-[38px] leading-[48px] md:text-4xl lg:text-5xl lg:leading-[68px] xl:text-6xl xl:leading-[74px] text-[#17181C] font-semibold text-center md:inline-block">
                                    Explore Top
                                    <span className="word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%"> Cloud Expert</span>
                                    Jobs
                                </h1>
                                <span className="max-w-[80%] text-[#3E4048] text-center">We are your one-stop site to find amazing Cloud
                                    Experts!</span>
                            </div>
                        </div>

                        <div className="hero_btm">
                            <div className="flex flex-col gap-6 xl:gap-8">
                                <div className="filter_section flex flex-wrap justify-between gap-4">
                                    <ul className="flex items-center flex-wrap gap-4">

                                        <li className="filter flex items-center gap-2">
                                            <SelectField
                                                inputContainerClass='border border-[#BBBDC8] rounded-xl'
                                                options={['Category']}
                                            />
                                        </li>
                                        <li className="filter flex items-center gap-2">
                                            <SelectField
                                                inputContainerClass='border border-[#BBBDC8] rounded-xl'
                                                options={['Expert Details']}
                                            />
                                        </li>
                                        <li className="filter flex items-center gap-2">

                                            <SelectField
                                                inputContainerClass='border border-[#BBBDC8] rounded-xl'
                                                options={['Pricing']}
                                            />
                                        </li>
                                        <li className="filter flex items-center gap-2">
                                            <SelectField
                                                inputContainerClass='border border-[#BBBDC8] rounded-xl'
                                                options={['Delivery time']}
                                            />
                                        </li>
                                    </ul>
                                    <div className="search_input flex items-center gap-2">
                                        <InputField
                                            inputContainerClass='rounded-xl'
                                            leftIcon={<MagnifyingGlassIcon className="stroke-1" />}
                                            placeholder='Search title'
                                        />

                                    </div>
                                </div>
                                <div className="count">
                                    <span className="text-[#3E4048] text-sm">{publicJobs?.length}</span>
                                    <span className="text-[#3E4048] text-sm"> jobs found</span>
                                </div>
                                {
                                    loader?.isLoading ?
                                        <ul className="available_jobs grid lg:grid-cols-2 gap-6 xl:gap-y-8">
                                            <CustomLoader count={4} name='FindWorkLoader' />
                                        </ul>
                                        :
                                        !isEmpty(publicJobs) && isArray(publicJobs) ?
                                            <ul className="available_jobs grid lg:grid-cols-2 gap-6 xl:gap-y-8">
                                                {
                                                    publicJobs.map((job) => {
                                                        return (
                                                            <Fragment key={`public_job${job?.uuid}`}>
                                                                <AvailableJobContainer />
                                                            </Fragment>
                                                        )
                                                    })

                                                }
                                            </ul>
                                            : <NoDataFoundMessage message={'No job Found'} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default FindWork


const AvailableJobContainer = () => {
    return (
        <li className="p-8 border border-[#F1E7F8] rounded-[16px] bg-[#FFFFFF] flex flex-col gap-6">
            <div className="details_top flex flex-wrap justify-between">
                <div className="top_left flex items-center gap-4">
                    <div className="job_img">
                        <img src="./assets/find_work/job_logo.webp" alt="job_logo" />
                    </div>
                    <div className="job_details flex flex-col gap-2">
                        <span className="text-[#17181C] text-xl font-bold">Tech Lead - Frontend Engineeer</span>
                        <span className="text-[#3E4048] font-semibold text-sm">Prospa</span>
                    </div>
                </div>

                <div className="top_right flex gap-1 pl-14 sm:pl-16 md:pl-0">
                    <span className="text-[#6D6F79] text-sm">9</span>
                    <span className="text-[#6D6F79] text-sm">min ago</span>
                </div>
            </div>

            <ul className="tags flex flex-wrap items-center gap-2">
                <li className="bg-[#ECEFFD] px-2 py-1 rounded-full flex items-center gap-2">
                    <div>
                        <img src="./assets/find_work/moneys.webp" alt="moneys" />
                    </div>
                    <div>
                        <span className="text-[#4361EE] text-sm">$60k - $90k</span>
                    </div>
                </li>
                <li className="bg-[#ECEFFD] px-2 py-1 rounded-full flex items-center gap-2">
                    <div>
                        <img src="./assets/find_work/briefcase.webp" alt="briefcase" />
                    </div>
                    <div>
                        <span className="text-[#4361EE] text-sm">Full-time</span>
                    </div>
                </li>
                <li className="bg-[#ECEFFD] px-2 py-1 rounded-full flex items-center gap-2">
                    <div>
                        <img src="./assets/find_work/clock.webp" alt="clock" />
                    </div>
                    <div>
                        <span className="text-[#4361EE] text-sm">1 month</span>
                    </div>
                </li>
                <li className="bg-[#ECEFFD] px-2 py-1 rounded-full flex items-center gap-2">
                    <div>
                        <img src="./assets/find_work/location.webp" alt="location" />
                    </div>
                    <div>
                        <span className="text-[#4361EE] text-sm">Anywhere</span>
                    </div>
                </li>
            </ul>

            <div className="desc">
                <span className="text-[#3E4048]">We want to move a large number of customer portal users
                    (users who self-register via a pre-existing Contact
                    record).</span>
            </div>

            <div className="apply_btn w-full">
                <button className="px-6 py-3 w-full rounded-full border font-semibold text-[#ECF9FD] text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr">
                    Apply Now
                </button>
            </div>
        </li>
    )
}