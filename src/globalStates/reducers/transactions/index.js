import { TRANSACTIONS_HISTORY, TRANSACTION_DETAILS } from "../../actions/actionsType";

let initialstate = { transactions: [], transactionDetails: {} }

export function transactions(state = initialstate, action) {
    switch (action.type) {
        case `${TRANSACTIONS_HISTORY}_SUCCESS`:
            return {
                ...state,
                transactions: action.payload
            }
        case `${TRANSACTION_DETAILS}_SUCCESS`:
            return {
                ...state,
                transactionDetails: action.payload
            }
        case `RESET_transaction_details_STATE`:
            return {
                ...state,
                transactionDetails: {}
            }
        case `RESET_transactions_STATE`:
        case `RESET_ALL_STATE`:
            return initialstate
        default:
            return state;
    }
}