import { AUTH_TOKEN } from '../actionsType'

export const setAuthToken = (payload) => ({
    type: `${AUTH_TOKEN}_SUCCESS`,
    payload: payload
})

export const removeAuthToken = (payload) => ({
    type: `REMOVE_${AUTH_TOKEN}`,
    payload: payload
})

export const loginUser = (payload) => ({
    type: 'LOGIN',
    method: 'post',
    payload,
    URLEndPoint: 'LOGIN',
    axiosService: true,
    toaster: {
        loading: true
    }
})