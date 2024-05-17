import { isArray, isEmpty } from "lodash";
import { GET_PUBLIC_JOBS } from "../../actions/actionsType";

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