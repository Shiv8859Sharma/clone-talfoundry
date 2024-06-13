import { GET_PUBLIC_FREELANCER_USER_LIST, GET_SEARCH_FREELANCERS_USER_LIST } from "../actionsType";

export const getPublicFreelancerUserList = (params = {}) => ({
    type: GET_PUBLIC_FREELANCER_USER_LIST,
    method: 'get',
    params: { authorize: false, ...params },
    URLEndPoint: "FIND_FREELANCERS",
    axiosService: true,
    toaster: {
        loading: true
    }
})

export const getFreelancerUserList = (params = {}) => ({
    type: GET_SEARCH_FREELANCERS_USER_LIST,
    method: 'get',
    params: params,
    URLEndPoint: "SEARCH_FREELANCERS",
    axiosService: true,
    toaster: {
        loading: true
    }
})
