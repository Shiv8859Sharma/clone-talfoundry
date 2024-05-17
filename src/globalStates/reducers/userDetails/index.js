export function UserDetails(state = {}, action) {
    switch (action.type) {
        case 'USER_DETAILS_SUCCESS':
            return action.payload 

        default:
            return state;
    }
}