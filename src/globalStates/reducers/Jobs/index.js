import { isArray, isEmpty } from "lodash";
import { GET_ALL_JOBS, GET_FILTER_COUNT_FOR_JOB, GET_PUBLIC_JOBS } from "../../actions/actionsType";

export function publicJobs(state = [], action) {
    switch (action.type) {
        case `${GET_PUBLIC_JOBS}_SUCCESS`:
            return formatpublicJobs(action.payload)
        default:
            return state;
    }
}

function formatpublicJobs(data) {
    return data
}


export function getAllJobs(state = [], action) {
    switch (action.type) {
        case `${GET_ALL_JOBS}_SUCCESS`:
            return action.payload
        case `ADD_REMOVE_FAVOURITE_ALL_JOBS_SUCCESS`:
            console.log("action :::", action.payload);
            let { id, type, endPoint } = action?.payload
            let favoritedType = 'ADD_FAVOURITE'
            return !isEmpty(state) ? state?.map(item => item?.uuid === id ? { ...item, favorited_job: endPoint === favoritedType } : item) : []
        case `RESET_getAllJobs_STATE`:
        case `RESET_ALL_STATE`:
            return []
        default:
            return state;
    }
}


export function filterCountForJobs(state = {}, action) {
    switch (action.type) {
        case `${GET_FILTER_COUNT_FOR_JOB}_SUCCESS`:
            return action.payload?.filters_data
        case `RESET_filterCountForJobs_STATE`:
        case `RESET_ALL_STATE`:
            return {}
        default:
            return state;
    }
}