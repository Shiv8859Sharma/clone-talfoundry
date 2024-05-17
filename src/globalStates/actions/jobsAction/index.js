import { GET_PUBLIC_JOBS } from "../actionsType";

export const getPublicJobs = (params) => ({
    type: GET_PUBLIC_JOBS,
    method: 'get',
    params,
    url: `/find_jobs?authorize==false`,
    axiosService: true,
    toaster: {
        loading: true
    }
})