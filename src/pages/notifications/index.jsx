import PageHeading from "@/layouts/pageHeading"
import CustomLoader from "@/layouts/skeletonLoaders"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getNotifications, removeNofication, updateNotification } from "../../globalStates/actions/notificationAction";
import { resetReduxState } from "../../globalStates/actions/commanAction";
import NoDataFoundMessage from "@/constants/NoDataFoundMessage"
import { isArray, isEmpty } from "lodash";
import { CurrencyDollarIcon, DocumentMinusIcon, UserCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import formatDate from "../../utills/formatDate";
import NavigatePage from "../../components/navigatePage";

const Notifications = () => {
    const notifications = useSelector((state) => state?.notifications?.all_notification)
    const isLoading = useSelector((state => state.loader?.isLoading))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNotifications())
        return (() => {
            dispatch(resetReduxState('all_notifications'))
        })
    }, [])
    return (
        <main className="">
            <PageHeading title={'Notifications'} />
            <section className="py-6">
                <div className="default_container max-w-xs sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto">
                    <div className="content lg:p-10 w-full rounded-lg border border-slate-300 bg-[#FFFFFF] lg:max-w-[70%] mx-auto">
                        {isLoading ?
                            <CustomLoader count={6} name='NotificationLoader' />
                            : !isEmpty(notifications) && isArray(notifications) ?
                                notifications?.map((notification) => {
                                    return (
                                        <div key={`notificetion_${notification?.uuid}`} className="flex justify-between lg:items-center p-6 border-b border-[#F1E7F8] shadow-[inset_0px_-1px_0px_0px_#F1E7F8]">
                                            <NavigatePage type='actionWithNavigation' dispatchFun={updateNotification(notification?.uuid)} className="flex" id='' url={{ pathname: `/${notification?.activity}/${notification?.notifier_uuid}`, state: { from: "notifi" } }}>
                                                <div className="logo flex justify-center lg:items-center">
                                                    {
                                                        notification?.message_type.toLowerCase().includes('job') ?
                                                            <DocumentMinusIcon className="w-8 h-8  border border-black border-2 rounded-full p-1" />
                                                            : notification?.message_type.toLowerCase().includes('payment') ?
                                                                <CurrencyDollarIcon className="w-8 h-8" />
                                                                : <UserCircleIcon className="w-8 h-8" />

                                                    }
                                                </div>
                                                <div className="detail flex flex-col gap-2 px-6">
                                                    <div>
                                                        <span className="font-figtree font-normal text-xs lg:text-sm leading-[21px]">{notification?.message}</span>
                                                    </div>
                                                    <div>
                                                        <span className="font-figtree font-normal text-xs lg:text-sm leading-[21px]">
                                                            {formatDate(notification?.created_at, 'mm dd', 'short')}                                                        </span>
                                                    </div>
                                                </div>
                                            </NavigatePage>
                                            <div>
                                                <NavigatePage type='dispachAction' dispatchFun={removeNofication(notification?.uuid, 'all_notification')}>
                                                    <XMarkIcon className={`hover:border hover:text-zinc-900 text-zinc-600 hover:border-zinc-400 hover:rounded-full p-1 h-8 w-8 cursor-pointer`}
                                                    />
                                                </NavigatePage>
                                            </div>
                                        </div>
                                    )
                                })
                                : <NoDataFoundMessage message='Notifications Not found!' />

                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Notifications