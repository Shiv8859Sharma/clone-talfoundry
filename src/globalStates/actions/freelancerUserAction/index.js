import { GET_PUBLIC_FREELANCER_USER_LIST } from "../actionsType";

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