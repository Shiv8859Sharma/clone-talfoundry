import { GET_ALL_JOBS, GET_FILTER_COUNT_FOR_JOB, GET_PUBLIC_JOBS } from "../actionsType";

export const getPublicJobs = (params) => ({
    type: GET_PUBLIC_JOBS,
    method: 'get',
    params: { authorize: false, ...params },
    URLEndPoint: "FETCH_PUBLIC_JOBS",
    axiosService: true,
    toaster: {
        loading: true
    }
})

export const getAllJobs = (params) => ({
    type: GET_ALL_JOBS,
    method: 'get',
    params: { ...params },
    URLEndPoint: "FETCH_ALL_JOBS",
    axiosService: true,
    toaster: {
        loading: true
    }
})

export const getAvailableFilterCountForJob = () => ({
    type: GET_FILTER_COUNT_FOR_JOB,
    method: 'get',
    URLEndPoint: "FETCH_AVAILABLE_FILTERS_COUNT_FOR_JOBS",
    axiosService: true,
    toaster: {
        loading: true
    }  
})