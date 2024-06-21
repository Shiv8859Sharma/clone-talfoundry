import SearchJobAndFreelancerLayout from "@/components/searchJob&FreelancerLayout";
import { resetReduxState } from '@/globalStates/actions/commanAction';
import CustomLoader from "@/layouts/skeletonLoaders"
import { useDispatch, useSelector } from "react-redux";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage"
import { Fragment, memo, useEffect, useState } from "react";
import { isArray, isEmpty } from "lodash";
import { useLocation } from "react-router-dom";
// import { popupOpen } from "@/globalStates/actions/PopupAction";
import JobDetailsCard from "@/components/jobDetailsCard";
import { getAllJobs, getAvailableFilterCountForJob } from "@/globalStates/actions/jobsAction";


const FindWork = () => {
    const dispatch = useDispatch()
    const jobData = useSelector((state) => state.getAllJobs)
    const filterCountes = useSelector((state) => state.filterCountForJobs)
    const isLoading = useSelector((state => state.loader?.isLoading))
    const [currentPage, setCurrentPage] = useState(1);
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('Search')
    let timerId = 0
    useEffect(() => {
        getJobDetailsList({ per_page: 10, search: location?.state?.search || '' })
        dispatch(getAvailableFilterCountForJob())

        return () => {
            dispatch(resetReduxState('getAllJobs'))
            dispatch(resetReduxState('filterCountForJobs'))
        }

    }, [])

    const getJobDetailsList = (params, page, tab) => {
        let sendParams = {
            page: page || currentPage,
            per_page: 10,
            job_tab: tab || activeTab,
            ...params
        }
        console.log("sendParams :::", sendParams);
        dispatch(getAllJobs(sendParams))
    }

    const handlePageChange = (page) => {

        clearTimeout(timerId);

        timerId = setTimeout(() => {
            setCurrentPage(page);
            getJobDetailsList({}, page)
        }, 500)
    };

    const handleActiveTab = (event) => {
        let tab = event.target.innerHTML
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            setActiveTab(tab)
            setCurrentPage(1)
            getJobDetailsList({}, 1, tab)
        }, 500)

    }

    let paginationData = isArray(jobData) && !isEmpty(jobData) ? {
        totalCount: jobData[0].total_count || 0,
        current_page: jobData[0].current_page || 1
    } : {}

    return (
        <>
            <SearchJobAndFreelancerLayout
                type='Freelancer'
                handleActiveTab={handleActiveTab}
                handlePageChange={handlePageChange}
                currentPage={paginationData?.current_page}
                updateList={getJobDetailsList}
                totalItems={paginationData?.totalCount}
                searchPlaceholder='Search job by skill & role'
                filterCountes={filterCountes}
            >
                <div className="flex flex-col gap-6 mt-2">
                    {isLoading ? <CustomLoader count={6} name='JobDetailsCardLoader' />
                        : !isEmpty(jobData) && isArray(jobData) ?
                            <>
                                {jobData.map((job) => {
                                    return (
                                        <Fragment key={`job_details_card_${job?.uuid}`}>
                                            <JobDetailsCard
                                                title={job?.job_title}
                                                payTYpe={['Pay a fixed price'].includes(job?.job_pay_type) ? 'Fixed' : 'Hourly'}
                                                experienceLevel={job?.job_experience_level}
                                                duration={job?.job_duration}
                                                timeRequirement={job?.job_time_requirement}
                                                timeago={job?.updated_at}
                                                description={job?.job_description}
                                                jobType={job?.job_visibility}
                                                proposals={job?.proposal_count}
                                                location={job?.get_job_qualification?.country}
                                                amountSpent={job?.amount_spent}
                                                jobRating={job?.maximum_rating}
                                                RollSkills={[...new Set([...job?.job_category, ...job?.job_additional_expertise_required])]}
                                                favorited={job?.favorited_job}
                                                uuid={job?.uuid}
                                                id={job?.id}
                                                updatedFavoritedStateName='ALL_JOBS'
                                            />
                                        </Fragment>
                                    )
                                })
                                }
                            </>
                            : <NoDataFoundMessage message='Jobs Not found!' />
                    }
                </div>
            </SearchJobAndFreelancerLayout>
        </>
    )
}

export default memo(FindWork)
