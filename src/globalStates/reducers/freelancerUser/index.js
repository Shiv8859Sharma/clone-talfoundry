import { isArray, isEmpty } from "lodash";
import { GET_PUBLIC_FREELANCER_USER_LIST, GET_SEARCH_FREELANCERS_USER_LIST } from "../../actions/actionsType";

export function publicFreelancerUserList(state = [], action) {
    switch (action.type) {
        case `${GET_PUBLIC_FREELANCER_USER_LIST}_SUCCESS`:
            return formatpublicFreelancerUserList(action.payload)
        case `RESET_publicFreelancerUserList_STATE`:
        case `RESET_ALL_STATE`:
            return []
        default:
            return state;
    }
}

const formatpublicFreelancerUserList = (data) => {
    return !isEmpty(data) && isArray(data) ? data.map((item) => (
        {
            fullName: item?.full_name,
            location: item?.profile?.current_location_country,
            profilePicture: item?.user_picture,
            jobTitle: item?.profile?.current_job_title,
            skills: item?.profile?.skill,
            hourlyRate: item?.profile?.hourly_rate,
            maximumRating: item?.maximum_rating
        }
    )) : []
}


export function freelancerUserList(state = [], action) {
    switch (action.type) {
        case `${GET_SEARCH_FREELANCERS_USER_LIST}_SUCCESS`:
            return action.payload
        case `RESET_freelancerUserList_STATE`:
        case `RESET_ALL_STATE`:
            return []
        default:
            return state;
    }
}