import { GET_PUBLIC_FREELANCER_USER_LIST } from "../actionsType";

export const getPublicFreelancerUserList = (params) => ({
    type: GET_PUBLIC_FREELANCER_USER_LIST,
    method: 'get',
    params,
    url: `/find_freelancers?authorize=false`,
    axiosService: true,
    toaster: {
        loading: true
    }
})