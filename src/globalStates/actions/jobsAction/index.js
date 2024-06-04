import { GET_PUBLIC_JOBS } from "../actionsType";

export const getPublicJobs = (params) => ({
    type: GET_PUBLIC_JOBS,
    method: 'get',
    params: { authorize: false, ...params },
    URLEndPoint: "FIND_JOBS",
    axiosService: true,
    toaster: {
        loading: true
    }
})