import { ALL_NOTIFICATIONS, REMOVE_NOTIFICATION, UNREAD_NOTIFICATIONS, UPDATED_NOTIFICATION } from "../actionsType";

export const getNotifications = (params, type) => ({
    type: type === 'unread' ? UNREAD_NOTIFICATIONS : ALL_NOTIFICATIONS,
    method: 'get',
    URLEndPoint: "NOTIFICATIONS",
    params,
    axiosService: true,
    toaster: {
        loading: true
    }
})

export const updateNotification = (id) => ({
    type: UPDATED_NOTIFICATION,
    method: 'put',
    url: `/notifications/${id}`,
    axiosService: true,
})

export const removeNofication = (uuid, stateName) => ({
    type : REMOVE_NOTIFICATION,
    payload : {uuid, stateName}
})
