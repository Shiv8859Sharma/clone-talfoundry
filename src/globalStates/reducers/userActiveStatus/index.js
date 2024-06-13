import { USER_ACTIVITY_SUMMARY } from "../../actions/actionsType";

const UserActivitySummary = (state = {}, { type, payload }) => {
    switch (type) {
        case `${USER_ACTIVITY_SUMMARY}_SUCCESS`:
            return {
                ...state,
                ...payload
            }
        case `RESET_UserActivitySummary_STATE`:
        case `RESET_ALL_STATE`:
            return {}
        default:
            return state;
    }
}

export default UserActivitySummary