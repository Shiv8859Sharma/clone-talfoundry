import axios from "axios";
import { REACT_APP_BASE_URL } from "@/constants/common";
import { loaderStart, loaderStop } from "@/globalStates/actions/loaderAction";
import apiEndPoint from "../../constants/apiEndPoints";

const randomId = () => {
    const hex = (value) => Math.floor(value).toString(16)
    return hex(Date.now() / 1000) + ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16))
}

const isBoolean = (value) => typeof value === 'boolean'
const isString = (value) => typeof value === 'string'

const TOASTER_OBJECT = {
    loading: null,
    success: true,
    error: true
}

const getAxiosProps = (apiDetails) => {
    let {
        method,
        baseURL = REACT_APP_BASE_URL,
        url,
        payload,
        header = {}
    } = apiDetails
    return ({
        method,
        baseURL,
        url,
        data: payload,
        headers: {
            "Authorization": localStorage.getItem("accessToken"),
            "content-type": "application/json",
            'Accept': "application/json",
            ...header
        }
    })

}

const clearLocalStorage = () => localStorage.clear();

const AxiosService = ({ getState }) => next => async action => {
    const { type = 'GET', payload, header, method, baseURL, url, URLEndPoint, axiosService, toaster = {} } = action
    const { loading = TOASTER_OBJECT.loading, success = TOASTER_OBJECT.success, error = TOASTER_OBJECT.error } = toaster
    if (axiosService) {
        const loaderID = randomId();
        if (loading) {
            next(loaderStart({ id: loaderID, type }));
        }

        await next({
            type: `${type}_FETCHING`
        })
        try {
            const response = await axios(getAxiosProps({
                method,
                baseURL,
                url: URLEndPoint ? apiEndPoint[URLEndPoint] : url,
                header,
                payload
            }))
            if (success) {

            } else {

            }
            await next({
                type: `${type}_SUCCESS`,
                payload: response?.data?.data || response.data

            })

            return response
        } catch (axiosError) {
            let errorResponse = ''
            if (error) {
                const getErrors = ['Invalid user', "Signature has expired", "Invalid segment encoding", 'Not an authorized user']
                // 'Network Error',
                console.log(axiosError.message , ":::: axiosError.message");
                if (axiosError.message === 'Network Error') {
                    window.location.replace('/network-error')
                }
                if (getErrors.includes(axiosError?.response?.data?.message) || getErrors.includes(axiosError?.response?.data?.errors) || getErrors.includes(axiosError.message)) {
                    clearLocalStorage();
                    window.location.replace('/')
                } else {
                    await next({
                        type: `${type}_ERROR`,
                        payload: { response: axiosError?.response, message: axiosError?.message }

                    })
                    errorResponse = { response: axiosError?.response, message: axiosError?.message }
                    if ([400, 401, 500].includes(axiosError?.status || axiosError?.response.status)) {
                        // console.log(axiosError.status, axiosError.response);
                        errorResponse = { response: axiosError?.response, message: axiosError?.message }
                    }

                    await next({
                        type: `API_RESPONSE_ERROR`,
                        payload: { response: axiosError?.response, message: axiosError?.message }
                    })
                    errorResponse = { response: axiosError?.response, message: axiosError?.message }

                }
            } else {
                await next({
                    type: `${type}_ERROR`,
                    payload: { response: axiosError?.response, message: axiosError?.message }
                })
                errorResponse = { response: axiosError?.response, message: axiosError?.message }
            }
            return errorResponse
        } finally {
            if (loading) {
                next(loaderStop({ id: loaderID }))
            }
        }
    } else {
        await next(action)
    }
    return getState()
}

export default AxiosService
