import { USER_ACTIVITY_SUMMARY } from "../actionsType";

export const getUserActivitySummary = () => ({
    type: USER_ACTIVITY_SUMMARY,
    method: 'get',
    URLEndPoint: "USER_ACTIVITY_SUMMARY",
    axiosService: true,
    toaster: {
        loading: true
    }
})