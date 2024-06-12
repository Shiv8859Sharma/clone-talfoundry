import SvgIcon from "@/assets/svg"
import { memo } from "react"

const SocialButton = (props) => {
    let { type } = props
    return (
        <div className="providers flex flex-col gap-6">
            <span className="text-[#3E4048]">Or {type === 'login' ? 'log in' : 'sign up'}  with</span>
            <div className="provider_btns flex justify-between items-center">
                <button className="px-5 sm:px-8 md:px-10 py-3 border border-[#BBBDC8] rounded-full flex items-center gap-2">
                    <SvgIcon name='google' folderName='commonAssets' outSide='..' />
                    <span className="text-[#17181C] font-bold">Google</span>
                </button>
                <button className="px-5 sm:px-8 md:px-10 py-3 border border-[#BBBDC8] rounded-full flex items-center gap-2">
                    <SvgIcon name='facebook' folderName='commonAssets' outSide='..' />
                    <span className="text-[#17181C] font-bold">Facebook</span>
                </button>
            </div>
        </div>
    )
}

export default memo(SocialButton);