import { Menu, Transition } from "@headlessui/react"
import { BellIcon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getNotifications, removeNofication, updateNotification } from "../../globalStates/actions/notificationAction"
import { isEmpty } from "lodash"

const NotificationDropDown = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const notifications = useSelector(state => state.notifications.unread_notification)

    useEffect(() => {
        dispatch(getNotifications({ only_unread: true }, 'unread'))
    }, [])

    const handleNavigationUrl = (e) => {
        e.preventDefault()
        const buttonElement = e.target.closest('button');
        let uuid = buttonElement.dataset.uuid
        let activity = buttonElement.dataset.activity
        let notifier_uuid = buttonElement.dataset.notifier_uuid
        console.log(e.target?.dataset);
        if (uuid && activity && notifier_uuid) {
            dispatch(updateNotification(uuid))
                .then(response => {
                    navigate(`/${activity}/${notifier_uuid}`,
                        { state: { from: "notifi" } })
                })
        } else if (!uuid && activity && !notifier_uuid) {
            navigate('/notifications')
        }
        setIsMenuOpen(false);
    }

    const handleRemove = (e) => {
        const buttonElement = e.target.closest('button');
        const uuid = buttonElement?.dataset?.uuid;
        if (uuid) {
            dispatch(removeNofication(uuid, 'unread_notification'))
        }
    }

    return (
        <Menu as="div" className="relative">
            <Menu.Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 p-2 rounded-full">
                <BellIcon className="w-6 h-6 text-white" />
            </Menu.Button>
            <Transition
                as={Fragment}
                show={isMenuOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-72 z-10 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {!isEmpty(notifications) ? notifications.map((notification, index) => {
                        return (
                            <div className="flex items-center gap-2 py-1 px-4" key={notification?.uuid}>
                                <Menu.Item
                                    id='notifications'
                                    as='div' className={'flex items-center justify-between gap-2  py-2 text-sm text-gray-700'}
                                    onClick={handleNavigationUrl}
                                >
                                    <div>
                                        <UserCircleIcon className="w-7 h-7" />
                                    </div>
                                    <button
                                        data-activity={notification.activity}
                                        data-notifier_uuid={notification.notifier_uuid}
                                        data-uuid={notification.uuid}
                                        className="font-figtree cursor-pointer font-normal text-xs leading-[20px] text-[#000000] hover:opacity-100 hover:text-[#000000]">
                                        {notification?.message}
                                    </button>
                                </Menu.Item>
                                <button className="flex items-center " data-uuid={notification.uuid} onClick={handleRemove}>
                                    <XMarkIcon className="w-6 h-6 opacity-75 hover:opacity-100" />
                                </button>
                            </div>
                        )
                    }) :
                        <div className="no-notifi-msg text-sm text-center py-2">No Notifications</div>
                    }

                    <div className="py-1">
                        <Menu.Item as='div' onClick={handleNavigationUrl} className={"block cursor-pointer px-4 py-2 text-sm text-indigo-700 font-semibold"}>
                            <button id='notifications' data-activity='notifications'>
                                See all notifications
                            </button>
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default NotificationDropDown;