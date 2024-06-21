import SvgIcon from "@/assets/svg";


const HighLightBanner = (props) => {

    let { name } = props

    let flagObj = {
        Public: 'global',
        Recruiter: 'user',
        Featured: 'star',
        Urgent: 'urgent',
        Private: 'private'
    }

    return (
        <div className="flex items-center gap-2.5">
            <div className="flag relative">
                <div className="flex items-center gap-1 bg-[#4361EE] pl-2 py-1 pr-5">
                    <div className="icon">
                        <SvgIcon name={flagObj?.[name]} folderName='highLightBanner' />
                    </div>
                    <span className="text-[#FFFFFF] text-xs font-medium">{name}</span>
                </div>
                <div className="corner absolute top-[6%] -right-[14%] rotate-45 w-5 h-5 bg-[#FFFFFF]"></div>
            </div>
        </div>

    )
}

export default HighLightBanner