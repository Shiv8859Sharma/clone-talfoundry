// /transaction_history

import { TRANSACTIONS_HISTORY } from "../actionsType";

export const getTransactionsHistory = () => ({
    type: TRANSACTIONS_HISTORY,
    method: 'get',
    URLEndPoint: "TRANSACTIONS_HISTORY",
    axiosService: true,
    toaster: {
        loading: true
    }
})