import Image from '@/components/ImageElement';
import { MapIcon } from '@/assets/svg';


const UserProfileCard = (props) => {
    let { image = '', children, name = '', location = '', title = '', buttons = '' } = props
    return (
        <div className="flex gap-4 lg:justify-between p-4 md:p-6 lg:p-8 bg-[#FFFFFF] rounded-2xl border-slate-200 border shadow-[0_0_35px_0_#AEAEAE1A]">
            <div className="profile w-28 h-28 hidden lg:block">
                <Image src={image || ''} type='profile' className="rounded-full mx-auto w-20 h-20" />
            </div>
            <div className="info flex flex-col gap-4 lg:w-[90%]">
                <div className="flex flex-col gap-4 lg:justify-between xl:flex-row">
                    <div className="left flex flex-col gap-1">
                        <div className="flex items-center gap-[10px]">
                            <div>
                                <span className="font-bold font-figtree text-xl">
                                    {name}
                                </span>
                            </div>
                            <div>
                                {/* <img src="assets/cloud/Public.svg" alt=""> */}
                            </div>
                        </div>
                        <div>
                            <span className="font-figtree font-semibold text-sm text-[#3E4048]">
                                {title}
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div>
                                <MapIcon fill='#000000' />
                            </div>
                            <div>
                                <span className="font-normal font-figtree text-sm text-[#3E4048]">{location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="right flex items-center gap-2 md:gap-4 lg:items-start lg:gap-[17px]">
                        {buttons}
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default UserProfileCard