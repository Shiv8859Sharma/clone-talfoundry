import SearchJobAndFreelancerLayout from "@/components/searchJob&FreelancerLayout";
import UserDetailsCard from "@/components/userDetailsCard";
import { getFreelancerUserList } from '@/globalStates/actions/freelancerUserAction';
import { resetReduxState } from '@/globalStates/actions/commanAction';
import CustomLoader from "@/layouts/skeletonLoaders"
import { FavoritedHeartIcon } from "@/assets/svg";
import { GradientButton, OutlineButton } from "@/components/buttons";
import { useDispatch, useSelector } from "react-redux";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage"
import { useEffect, useState } from "react";
import { isArray, isEmpty } from "lodash";
import { useLocation } from "react-router-dom";
import RollSkillTagList from "@/components/skill&rollTagList"
import { popupOpen } from "@/globalStates/actions/PopupAction";
import SvgIcon from "@/assets/svg";

let ButtonsLayout = ({ data }) => {
    const dispatch = useDispatch()
    const [isFavorited, setIsFavorited] = useState(data?.favorited_freelancer)
    const handleActionButton = (buttonType, data) => {
        if (buttonType === 'Favorited') {
            setIsFavorited(!isFavorited)
        } else {

            let popupDetails = {
                options: data?.profile?.available_jobs_for_contract, cloudExpertname: data?.full_name, uuid: data?.uuid,
                id: data?.id, location: data?.profile?.current_location_country, title: data?.profile?.current_job_title
            }

            dispatch(popupOpen({ open: true, type: buttonType, className: 'w-[35rem]', details: popupDetails }))
        }

    }
    return (
        <>
            <div onClick={() => handleActionButton('Favorited', data)}>
                <FavoritedHeartIcon fill={isFavorited} />
            </div>
            <OutlineButton onClick={() => handleActionButton('SEND_INVITE', data)}>
                Invite to Job
            </OutlineButton>
            <GradientButton onClick={() => handleActionButton('Hire_FREELANCER', data)}>
                Hire Cloud Expert
            </GradientButton>
        </>
    )
}

const FindFreelancer = () => {
    const dispatch = useDispatch()
    const cloudExpertList = useSelector((state) => state.freelancerUserList)
    const isLoading = useSelector((state => state.loader?.isLoading))
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('Search')

    let timerId = 0

    useEffect(() => {
        getFreelancerUserDetailsList({ perPage: 10, search: location?.state?.search || '' })
        return () => {
            dispatch(resetReduxState('freelancerUserList'))
        }
    }, [])

    const getFreelancerUserDetailsList = (params, page, tab) => {
        let sendParams = {
            page: page || currentPage,
            status: tab || activeTab,
            ...params
        }
        dispatch(getFreelancerUserList(sendParams))
    }

    const handlePageChange = (page) => {

        clearTimeout(timerId);

        timerId = setTimeout(() => {
            setCurrentPage(page);
            getFreelancerUserDetailsList({}, page)
        }, 500)
    };





    const handleActiveTab = (event) => {

        let tab = event.target.innerHTML

        clearTimeout(timerId)
        timerId = setTimeout(() => {
            setActiveTab(tab)
            setCurrentPage(1)
            getFreelancerUserDetailsList({}, 1, tab)
        }, 500)

    }
    return (
        <>
            <SearchJobAndFreelancerLayout
                type='Freelancer'
                handleActiveTab={handleActiveTab}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                updateList={getFreelancerUserDetailsList}
                totalItems={0}
            >
                <div className="flex flex-col gap-6">

                    {
                        isLoading ? <CustomLoader count={6} name='UserDeatilsCardLoader' />
                            : !isEmpty(cloudExpertList) && isArray(cloudExpertList) ?
                                <>
                                    {cloudExpertList.map((cloudExpert) => {
                                        
                                        return (
                                            <UserDetailsCard
                                                name={cloudExpert?.full_name}
                                                buttons={<ButtonsLayout data={cloudExpert} />}
                                                location={cloudExpert?.profile?.current_location_country}
                                                title={cloudExpert?.profile?.current_job_title}
                                                key={`find_freelancer_${cloudExpert?.uuid}`}
                                                image={cloudExpert?.user_picture}
                                                visibility={cloudExpert?.profile?.visibility}
                                            >

                                                <div className="flex gap-3 flex-wrap lg:gap-30">
                                                    <div>
                                                        <span className="font-figtree font-semibold text-sm text-[#3E4048]">${cloudExpert?.profile?.hourly_rate} / hr</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-figtree font-semibold text-sm text-[#3E4048]">${cloudExpert?.amount_earned}k+ earned</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <div>
                                                            <SvgIcon name={'top-talent-shield-icon'} />
                                                        </div>
                                                        <div>
                                                            <span className="font-figtree font-semibold text-sm text-[#3E4048]">TOP TALENT</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="font-figtree font-normal text-sm text-[#17181C] line-clamp-2 sm:line-clamp-4 md:line-clamp-2"><b></b> {cloudExpert?.profile?.about_me}</span>
                                                </div>
                                                <RollSkillTagList list={cloudExpert?.profile?.skill}
                                                    deleteIconShow={false}
                                                    containerClass='py-0.5 px-2 bg-[#E0E2FF]'
                                                    showImage={false}
                                                />
                                            </UserDetailsCard>
                                        )
                                    })}
                                </>
                                : <NoDataFoundMessage message='Freelancer Not found!' />
                    }
                </div>
            </SearchJobAndFreelancerLayout>
        </>
    )
}

export default FindFreelancer