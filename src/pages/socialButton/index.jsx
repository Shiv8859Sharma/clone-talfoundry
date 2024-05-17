

import googleSvg from '@/assets/commonAssets/google.svg'
import facebookSvg from '@/assets/commonAssets/facebook.svg'

const SocialButton = (props) => {
    let { type } = props
    return (
        <div className="providers flex flex-col gap-6">
            <span className="text-[#3E4048]">Or {type === 'login' ? 'log in' : 'sign up'}  with</span>
            <div className="provider_btns flex justify-between items-center">
                <button className="px-5 sm:px-8 md:px-10 py-3 border border-[#BBBDC8] rounded-full flex items-center gap-2">
                    <img src={googleSvg} alt="google" />
                    <span className="text-[#17181C] font-bold">Google</span>
                </button>
                <button className="px-5 sm:px-8 md:px-10 py-3 border border-[#BBBDC8] rounded-full flex items-center gap-2">
                    <img src={facebookSvg} alt="facebook" />
                    <span className="text-[#17181C] font-bold">Facebook</span>
                </button>
            </div>
        </div>
    )
}

export default SocialButton