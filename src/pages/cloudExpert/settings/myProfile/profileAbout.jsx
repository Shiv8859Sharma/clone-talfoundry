import SvgIcon from "@/assets/svg";

const ProfileAbout = () => {
    return (
        <div className="flex flex-col gap-6 w-full p-8 bg-[#FFFFFF] border border-[#d5bee6] rounded-2xl">
            <div className="flex justify-between">
                <div>
                    <span className="font-figtree font-bold text-2xl leading-[34px]">
                        About
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <span className="font-figtree font-bold text-2xl leading-[34px]">
                        $12.00/hr
                    </span>
                    <SvgIcon name='pencil-edit-icon' />
                </div>
            </div>

            <div className="flex gap-4 items-start">
                <span className="font-figtree font-normal text-[16px] leading-[24px] text-[#3E4048] text-justify">
                    As I walked into the server room of my previous
                    company on my first day, I was struck by the hum
                    of the machines and the sheer volume of equipment
                    that powered our operations. It was in that moment
                    that I realized the potential impact of cloud
                    technology on businesses like ours, and I became
                    determined to be at the forefront of this
                    transformati...
                    <span className="font-bold text-[#4361EE]">see more
                    </span>
                </span>
                <div>
                <SvgIcon name='pencil-edit-icon' />
                </div>
            </div>
        </div>
    )
}

export default ProfileAbout