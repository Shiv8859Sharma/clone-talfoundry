import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { SelectField } from "@/components/formFields"
import countryList from '@/utills/countryStateCity';
import Image from "@/components/ImageElement";
import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { getPublicFreelancerUserList } from "@/globalStates/actions/freelancerUserAction";
import { isArray, isEmpty } from "lodash";
import CustomLoader from "@/layouts/skeletonLoaders";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage"

const SearchFreelancer = () => {
    const dispatch = useDispatch()
    const reduxState = useSelector(state => state)
    let { publicFreelancerUserList, loader } = reduxState
    useEffect(() => {
        getFreelancerList()
    }, [])

    const getFreelancerList = () => {
        dispatch(getPublicFreelancerUserList())
    }
    return (
        <main className="font-figtree bg-[#FDFBFE]">
            <section className="talent_section">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="talent_content pt-28 xl:pt-52 pb-16 flex flex-col gap-16 lg:gap-20 xl:gap-24 3xl:gap-24">
                        <div className="talent_top flex flex-col items-center gap-6 xl:gap-8">
                            <div className="talent_heading flex flex-col items-center gap-4">
                                <h1 className="flex flex-col gap-1 text-[32px] leading-[42px] md:text-4xl lg:text-5xl lg:leading-[68px] xl:text-6xl xl:leading-[74px] text-[#17181C] font-semibold text-center md:inline-block">
                                    Hire the World’s Best
                                    <span className="word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%"> Cloud Expert</span>
                                </h1>
                                <span className="max-w-[80%] text-[#3E4048] text-center">We are your one-stop site to find amazing Cloud
                                    Experts!</span>
                            </div>
                        </div>
                        <div className="hero_btm">
                            <div className="flex flex-col gap-6 xl:gap-8">
                                <div className="filter_section">
                                    <ul className="flex items-center flex-wrap gap-4">

                                        <li className="filter flex items-center gap-2">
                                            <SelectField
                                                inputContainerClass='border border-[#BBBDC8] rounded-xl'
                                                defaultValue='Category'
                                                options={['Category']}
                                            />
                                        </li>
                                        <li className="filter flex items-center gap-2">
                                            <SelectField
                                                inputContainerClass='border border-[#BBBDC8] rounded-xl'
                                                options={['Expert Details']}
                                                defaultValue='Expert Details'

                                            />
                                        </li>
                                        <li className="filter flex items-center gap-2">

                                            <SelectField
                                                inputContainerClass='border border-[#BBBDC8] rounded-xl'
                                                options={['Pricing']}
                                                defaultValue='Pricing'
                                            />
                                        </li>
                                        <li className="filter flex items-center gap-2">
                                            <SelectField
                                                inputContainerClass='border border-[#BBBDC8] rounded-xl'
                                                options={['Delivery time']}
                                                defaultValue='Delivery time'
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <div className="count">
                                    <span className="text-[#3E4048] text-sm">10,920</span>
                                    <span className="text-[#3E4048] text-sm">available experts</span>
                                </div>
                                {loader.isLoading ?
                                    <ul className="available_expert grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-x-9 md:gap-y-10 3xl:gap-14">
                                        <CustomLoader count={8} name='FindExpertLoader' />
                                    </ul>
                                    :
                                    !isEmpty(publicFreelancerUserList) && isArray(publicFreelancerUserList) ?
                                        <ul className="available_expert grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-x-9 md:gap-y-10 3xl:gap-14">
                                            {publicFreelancerUserList.map((freelancer, index) => {
                                                return (
                                                    <Fragment key={`publicFreelancerUserList_${index}`}>
                                                        <ExpertDetails
                                                            location={freelancer?.location}
                                                            fullName={freelancer?.fullName}
                                                            profilePicture={freelancer?.profilePicture}
                                                            jobTitle={freelancer?.jobTitle}
                                                            skills={freelancer?.skills}
                                                            hourlyRate={freelancer?.hourlyRate}
                                                            maximumRating={freelancer?.maximumRating}
                                                        />
                                                    </Fragment>
                                                )
                                            })}
                                        </ul>
                                        : <NoDataFoundMessage message='Freelancer Not found!' />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SearchFreelancer

function ExpertDetails(props) {
    let { location = 'India', fullName = '', profilePicture = '', jobTitle = '', skills = [], hourlyRate = '00', maximumRating = '0' } = props
    let countryObject = countryList.find((countryData) => countryData.name === location)

    let renderSkills = (data) => {
        if (data?.length > 2) {
            let firstTwoSkills = data.slice(0, 2)
            let RemaingSkills = data.slice(2)
            return (
                <>
                    {firstTwoSkills.map((item, index) => (
                        <li key={`skill_list_${item}_${index}`} className="text-[#3E4048] text-xs border border-[#F1E7F8] rounded-full bg-[#FDFBFE] px-2 py-1 whitespace-nowrap">
                            {item}
                        </li>
                    ))}
                    <li className="text-[#3E4048] text-xs border border-[#F1E7F8] rounded-full bg-[#FDFBFE] px-2 py-1">
                        +{RemaingSkills.length}
                    </li>
                </>
            )
        }
        return (
            data.map((item, index) => (
                <li key={`${index}_skills`} className="text-[#3E4048] text-xs border border-[#F1E7F8] rounded-full bg-[#FDFBFE] px-2 py-1 whitespace-nowrap">
                    {item}
                </li>
            ))
        )
    }
    return (
        <li className="py-8 px-6 border border-[#F1E7F8] rounded-[16px] bg-[#FFFFFF] flex flex-col items-center gap-6">
            <div className="expert_img relative w-20 h-20">
                <div className="exp_img">
                    <Image src={profilePicture} type='profile' alt='user' className='min-w-[5rem] w-[5rem] h-[5rem] rounded-full' />
                </div>
                <div className="flag absolute bottom-0 right-0 rounded">
                    <div className="rounded-icon h-[24px] w-[24px] overflow-hidden rounded-full">
                        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="50" fill="#ccc" />
                            <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="central" fontSize="7rem" fill="black">{countryObject.flag}</text>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="exp_detail flex flex-col gap-4">
                <div className="detail_txt flex flex-col items-center gap-1">
                    <span className="text-[#17181C] text-xl font-bold">{fullName}</span>
                    <span className="text-[#3E4048] font-semibold text-sm">{jobTitle}</span>
                </div>

                <ul className="exp_cat flex items-center gap-1">
                    {
                        !isEmpty(skills) && isArray(skills) ?
                            renderSkills(skills)
                            : ''
                    }
                </ul>

                <div className="details_btm flex items-center justify-center gap-2">
                    <div className="hours px-2 border-r border-[#BBBDC8]">
                        <span className="text-[#3E4048] font-semibold text-sm">${parseInt(hourlyRate).toFixed(2)}</span>
                        <span className="text-[#3E4048] font-semibold text-sm">/ hr</span>
                    </div>

                    <div className="rating flex items-center gap-2">
                        <div>
                            <Image src="" alt="star" className='w-[1rem] h-[1rem]' />
                        </div>
                        <div>
                            <span className="text-[#3E4048] font-semibold text-sm">{maximumRating}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hire_btn">
                <button className="px-6 py-3 rounded-full border font-semibold text-[#ECF9FD] text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr">
                    Hire Cloud Experts
                </button>
            </div>
        </li>
    )
}