import { PlusIcon } from "@heroicons/react/24/outline";
import SvgIcon from "@/assets/svg";
const CloudPlatformSection = () => {

    let cloud_Platform = [
        {
            label: 'Oracle',
            svgIcon: 'oracle'
        },
        {
            label: 'Amazon',
            svgIcon: 'black-circle-aws'
        },
        {
            label: 'Google',
            svgIcon: 'googleCloud'
        },
        {
            label: 'Salesforce',
            svgIcon: 'salesforce'
        },
        {
            label: 'Microsoft',
            svgIcon: 'microsoft'
        }
    ]
    return (
        <section>
            <div className="default_container max-w-xs sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto">
                <div className="cloud_Platform flex flex-col gap-6 py-10">
                    <div className="heading">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
                                <span className="font-figtree text-xl lg:text-2xl font-bold">Explore by</span><span className="font-figtree text-xl lg:text-2xl font-bold text-gradient">Cloud Platform</span>
                            </div>
                            <div className="flex justify-center items-center gap-1">
                                <div>
                                    <PlusIcon className="w-4 h-4 stroke-[#4361EE]" />
                                </div>
                                <div>
                                    <span className="font-figtree font-semibold text-sm text-[#4361EE] cursor-pointer">See more Cloud Platforms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-100 blog grid sm:grid-cols-2 md:grid-cols-3 md:justify-between xl:flex xl:max-w-[90%] items-center gap-5">
                            {cloud_Platform.map((platForm) => {
                                return (
                                    <div key={platForm?.label} className="flex flex-col gap-1.5 justify-center items-center border border-[#BBBDC8] bg-[#FFFFFF] rounded-xl py-[4rem] px-[7rem] max-w-[70%] mx-auto sm:max-w-[95%] lg:max-w-none xl:w-[18%]">
                                        <div>
                                            {platForm?.svgIcon &&
                                                <SvgIcon name={platForm?.svgIcon} outSide={'..'} folderName='commonAssets' className='w-20 h-12' />
                                            }
                                        </div>
                                        <div>
                                            <span className="font-figtree font-bold text-xl">{platForm?.label}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CloudPlatformSection;