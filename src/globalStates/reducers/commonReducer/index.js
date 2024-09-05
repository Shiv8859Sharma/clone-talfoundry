import { FETCH_TECH_SKILL } from "../../actions/actionsType";

let initialState = {
    techSkills: []
}
const CommanState = (state = initialState, { type, payload }) => {
    switch (type) {
        case `${FETCH_TECH_SKILL}_SUCCESS`:
            return {
                ...state,
                techSkills: payload?.skills
            }
        case `RESET_CommanState_STATE`:
        case `RESET_ALL_STATE`:
            return initialState
        default:
            return state;
    }
}

export default CommanState

export const tabsState = (state = {}, { type, payload }) => {

    switch (type) {
        case `SET_CURRENT_TAB`:
            let { name, details } = payload
            return {
                ...state,
                [name]: details
            }
        case `RESET_CURRENT_TAB`:
        case `RESET_ALL_STATE`:
            return {}
        default:
            return state;
    }
}
