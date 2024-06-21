import { useDispatch } from "react-redux"
import { FavoritedHeartIcon, MapIcon } from "@/assets/svg"
import HighLightBanner from "../highLightBanner"
import RatingStars from "../ratingStars"
import RollSkillTagList from "../skill&rollTagList"
import TimeAgo from "../timeAgo"
import { updateFavourite } from "@/globalStates/actions/commanAction"
import NavigatePage from "../navigatePage"

const JobDetailsCard = (props) => {
    let {
        title = '',
        payTYpe = '',
        experienceLevel = '',
        duration = '',
        timeRequirement = '',
        timeago = new Date(),
        description = '',
        jobType = 'Public',
        proposals = 0,
        location = 'Anywhere',
        amountSpent = 0,
        jobRating = 0,
        RollSkills = [],
        favorited = false,
        uuid = '',
        // id = '',
        updatedFavoritedStateName = ''
    } = props

    const dispatch = useDispatch()

    const handleFavorited = (event) => {
        event.stopPropagation();
        dispatch(updateFavourite(uuid, 'job', !favorited ? 'add' : 'romove', updatedFavoritedStateName))
    }

    return (

        <NavigatePage id='' url={`/job-details/${uuid}`} className="detail flex flex-col gap-4 p-8 bg-[#FFFFFF] rounded-2xl border-[#F1E7F8] border">
            <div className="heading flex gap-4 justify-between items-center">
                <div className="left flex flex-col gap-4">
                    <div>
                        <HighLightBanner name={jobType} />
                    </div>
                    <div>
                        <span className="font-figtree font-bold text-2xl leading-[34px]">
                            {title}
                        </span>
                    </div>
                </div>
                <div className="right flex gap-4 items-center">
                    <div className="flex items-center rounded-full" onClick={handleFavorited}>
                        <FavoritedHeartIcon fill={favorited} />
                    </div>
                </div>
            </div>
            <div className="paragraph flex flex-col gap-[10px]">
                <div>
                    <span className="font-figtree font-normal text-[12px] leading-[20px]">{payTYpe} price - {experienceLevel} - Duration: {duration}, Time
                        Req.: {timeRequirement} - Posted: <TimeAgo date={timeago} />
                    </span>
                </div>
                <div>
                    <span className="font-figtree font-normal text-sm leading-[21px] line-clamp-2 sm:line-clamp-4 md:line-clamp-2 ">
                        {description}
                    </span>
                </div>
            </div>

            <RollSkillTagList
                list={RollSkills}
                deleteIconShow={false}
                showImage={false}
                containerClass='py-0.5 px-2 bg-[#E0E2FF]'
            />

            <div className="flex gap-2 items-center">
                <div>
                    <span className="font-figtree font-normal text-xs leading-[20px]">
                        Proposals: {proposals}
                    </span>
                </div>
                <div>
                    <span className="font-figtree font-normal text-xs leading-[20px]">
                        ${amountSpent} spent
                    </span>
                </div>
                <div className="flex items-center">
                    <MapIcon fill={'#000000'} />
                    <span className="font-figtree font-normal text-xs leading-[20px]">
                        {location}
                    </span>
                </div>
                <div>
                    <RatingStars count={jobRating} />
                </div>
            </div>
        </NavigatePage>
    )
}

export default JobDetailsCard