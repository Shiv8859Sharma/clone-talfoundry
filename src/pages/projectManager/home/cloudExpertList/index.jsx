import { GradientButton } from '@/components/buttons';
import Image from '@/components/ImageElement';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFreelancerUserList } from '@/globalStates/actions/freelancerUserAction';
import { resetReduxState } from '@/globalStates/actions/commanAction';
import CustomLoader from "@/layouts/skeletonLoaders"
import { isArray, isEmpty } from 'lodash';
import NoDataFoundMessage from "@/constants/NoDataFoundMessage"
import NavigatePage from '../../../../components/navigatePage';

const ClientList = () => {

    const dispatch = useDispatch()
    const cloudExpertList = useSelector((state) => state.freelancerUserList)
    const isLoading = useSelector((state => state.loader?.isLoading))

    useEffect(() => {
        dispatch(getFreelancerUserList({ per_page: 5 }))
        return () => {
            dispatch(resetReduxState('freelancerUserList'))
        }
    }, [])

    const handleHireClick = (event) => {
        event.stopPropagation();
    }
    return (
        <section>
            <div className="default_container max-w-xs sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto py-6">
                <div className="heading py-5">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                            <span className="font-figtree text-2xl font-bold">TalFoundry</span>
                            <span className="font-figtree text-2xl font-bold text-gradient">Pick’s</span>
                        </div>
                    </div>
                </div>
                {
                    isLoading ?
                        <div className="cloudExpert grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                            <CustomLoader count={6} name='FindExpertLoader' />
                        </div>
                        : !isEmpty(cloudExpertList) && isArray(cloudExpertList) ?
                            <div className="cloudExpert grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                                {cloudExpertList.slice(0, 6).map((cloudExpert) => {
                                    return (
                                        <NavigatePage id='user-profile' url={`user-profile/${cloudExpert?.uuid}`} key={`dashboard_${cloudExpert?.uuid}_page`} className="profile border border-[#BBBDC8] bg-[#FFFFFF] rounded-2xl py-4 px-6 lg:py-8 lg:px-11 xl:px-2 2xl:px-5 grid auto-rows-auto gap-2 text-center shadow-[0_0_35px_0_#AEAEAE1A]">
                                            <div>
                                                <Image src={cloudExpert?.user_picture || ''} type='profile' className="rounded-full mx-auto w-16 h-16" />
                                            </div>
                                            <div className="name">
                                                <span className="text-base font-figtree font-bold">{cloudExpert?.full_name}</span>
                                            </div>
                                            <div className="role">
                                                <span className="text-sm font-semibold font-figtree">{cloudExpert?.profile?.skill?.[0]}</span>
                                            </div>
                                            <div className="price">
                                                <span className="font-semibold font-figtree text-sm">${cloudExpert?.profile?.hourly_rate} / hr</span>
                                            </div>
                                            <div>
                                                <div className="hire pt-6" tabIndex={5}>
                                                    <GradientButton onClick={handleHireClick}>
                                                        Hire Me
                                                    </GradientButton>
                                                </div>
                                                <div className="py-3 invite">
                                                    <span className="font-figtree text-sm text-[#4361EE] font-semibold cursor-pointer">
                                                        Invite to Job
                                                    </span>
                                                </div>
                                            </div>
                                        </NavigatePage>
                                    )
                                })}

                            </div>
                            : <NoDataFoundMessage message='Not found!' />
                }
            </div>
        </section>
    )
}

export default ClientList