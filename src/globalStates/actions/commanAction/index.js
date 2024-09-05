import { FETCH_TECH_SKILL } from "../actionsType"

export const resetReduxState = (name = 'ALL') => ({
    type: `RESET_${name}_STATE`,
})

export const getTechSkillsData = (params = {}) => ({
    type: FETCH_TECH_SKILL,
    method: 'get',
    params: params,
    URLEndPoint: "FETCH_TECH_SKILLS",
    axiosService: true,
})


export function updateFavourite(id, type, endPointType, reducerName) {
    let params = type === 'job' ? { job_id: id } : { freelancer_id: id }
    let endPoint = endPointType === 'add' ? "ADD_FAVOURITE" : 'REMOVE_FAVOURITE'
    return ({
        type: `ADD_REMOVE_FAVOURITE_${reducerName.toUpperCase()}`,
        method: endPointType === 'add' ? 'post' : 'get',
        URLEndPoint: endPoint,
        params,
        axiosService: true,
        toaster: {
            // loading: true
        },
        withResponseReturnData: { id, type, endPoint }
    })
}

export const setCurrentTab = (payload) => ({
    type: 'SET_CURRENT_TAB',
    payload
})

