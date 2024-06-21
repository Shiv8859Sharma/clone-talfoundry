import { ALL_NOTIFICATIONS, REMOVE_NOTIFICATION, UNREAD_NOTIFICATIONS } from "../../actions/actionsType";
let initialstate = { unread_notification: [], all_notification: [] }

export function notifications(state = initialstate, action) {
    switch (action.type) {
        case `${UNREAD_NOTIFICATIONS}_SUCCESS`:
            return {
                ...state,
                unread_notification: action.payload
            }
        case `${ALL_NOTIFICATIONS}_SUCCESS`:
            return {
                ...state,
                all_notification: action.payload
            }
        case `${REMOVE_NOTIFICATION}`:
            let stateName = action.payload.stateName
            let uuid = action.payload.uuid
            return {
                ...state,
                [stateName]: state?.[stateName]?.filter(notifi => notifi?.uuid !== uuid)
            }
        case `RESET_all_notifications_STATE`:
            return {
                ...state,
                all_notification: []
            }
        case `RESET_ALL_STATE`:
            return initialstate
        default:
            return state;
    }
}