import Image from '@/components/ImageElement';
import HighLightBanner from '@/components/highLightBanner';
import OutlineButton from '@/components/buttons/outlineButton';
import SvgIcon from "@/assets/svg";
import { MapIcon } from '@/assets/svg';
import RollSkillTagList from '@/components/skill&rollTagList';
import { EyeIcon } from '@heroicons/react/24/outline';

const ProfileDetails = () => {

    return (
        <div className="flex gap-8 w-full p-8 bg-[#FFFFFF] border border-[#d5bee6] rounded-2xl">
            <div className="profile hidden md:block ">
                <Image src={''} type='profile' alt='user-profile' className="w-28 h-28" />
            </div>

            <div className="flex flex-col gap-4 w-full">
                <div className='flex flex-col md:flex-row w-full justify-between gap-4'>
                    <div className="left flex gap-3">
                        <div className="profile block md:hidden">
                            <Image src={''} type='profile' alt='user-profile' className="w-24 h-24" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2.5">
                                <span className="font-bold font-figtree text-xl">Shiv Nath Sharma</span>
                                <HighLightBanner name='Private' />
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="font-semibold font-figtree text-sm text-[#3E4048]">Salesforce&nbsp;Cloud Developer</span>
                                <SvgIcon name='pencil-edit-icon' />
                            </div>

                            <div className="flex items-center gap-1">
                                <div>
                                    <MapIcon />
                                </div>
                                <div>
                                    <span className="font-normal font-figtree text-sm text-[#3E4048]">
                                        United States – 2:00 pm local time
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right flex items-start justify-between gap-[17px]">
                        <div >
                            <OutlineButton type='button'>
                                See Public View
                            </OutlineButton>
                        </div>
                        <div className="">
                            <SvgIcon name={'circular-gradient-link'} />
                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-wrap gap-8">
                    <div className="flex flex-wrap gap-2">
                        <div>
                            <span className="font-figtree font-semibold text-sm text-[#3E4048]">Skills</span>
                        </div>
                        <RollSkillTagList
                            deleteIconShow={false}
                            showImage={false}
                            containerClass='py-0.5 px-2 bg-[#E0E2FF]'
                            list={['AWS Mainframe Modernization', 'AWS Lamba', 'AWS CodeStar']}
                        />
                        <div>
                            <SvgIcon name='pencil-edit-icon' />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <div>
                            <span className="font-figtree font-semibold text-sm text-[#3E4048]">Platforms</span>
                        </div>
                        <RollSkillTagList
                            deleteIconShow={false}
                            showImage={false}
                            containerClass='py-0.5 px-2 bg-[#E0E2FF]'
                            list={['AWS', 'Google', 'Salesforce']}
                        />
                        <span>
                            <SvgIcon name='pencil-edit-icon' />
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-[33px] flex-wrap">
                    <div className="flex items-center gap-2">
                        <SvgIcon name={'top-talent-shield-icon'} />
                        <span className="text-[#3E4048] font-figtree font-semibold text-sm">
                            TOP TALENT
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <SvgIcon name='black-stroke-briefcase' />
                        <span className="text-[#3E4048] font-figtree font-normal text-sm">
                            <span className="font-semibold">47</span>
                            Total Jobs
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <EyeIcon className='w-5 h-5' />
                            <span className="text-[#3E4048] font-figtree font-normal text-sm">
                                Visibility
                                <span className="font-semibold">Public</span></span>
                        </div>
                        <SvgIcon name='pencil-edit-icon' />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <SvgIcon name='send-alt-filled-45-deg' />
                            <span className="text-[#3E4048] font-figtree font-normal text-sm">
                                Availability
                                <span className="font-semibold">
                                    &lt;40 hours
                                </span>
                            </span>
                        </div>
                        <SvgIcon name='pencil-edit-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails;