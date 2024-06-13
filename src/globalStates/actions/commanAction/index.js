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
