import Image from "../../components/ImageElement"
import flagImage1 from '@/assets/webp/flag_1.webp'
import flagImage2 from '@/assets/webp/flag_2.webp'
import flagImage3 from '@/assets/webp/flag_3.webp'
import flagImage4 from '@/assets/webp/flag_4.webp'
import flagImage5 from '@/assets/webp/flag_5.webp'
import flagImage6 from '@/assets/webp/flag_6.webp'
import expUserImage1 from '@/assets/webp/img_1.webp'
import expUserImage2 from '@/assets/webp/img_2.webp'
import expUserImage3 from '@/assets/webp/img_3.webp'
import expUserImage4 from '@/assets/webp/img_4.webp'
import expUserImage5 from '@/assets/webp/img_5.webp'
import expUserImage6 from '@/assets/webp/img_6.webp'
import expUserImage7 from '@/assets/webp/img_7.webp'
import expUserImage8 from '@/assets/webp/img_8.webp'


const ArchitectsSection = () => {
    return (
        <section className="architects_section">
            <div className="default_container h-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="architects_content py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                    <div className="architects_top flex flex-col gap-2">
                        <div className="flex gap-2 flex-wrap">
                            <span className="text-3xl lg:text-4xl 3xl:text-5xl text-[#17181C] font-semibold">Talented</span>
                            <span className="text-3xl lg:text-4xl 3xl:text-5xl font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">Cloud Architects</span>
                        </div>

                        <span className="text-3xl lg:text-4xl 3xl:text-5xl text-[#17181C] font-semibold">Available now</span>
                    </div>
                    <div className="architects_btm whitespace-nowrap overflow-x-scroll overflow-y-hidden xl:overflow-hidden grid grid-rows-1 grid-flow-col gap-4 md:gap-8 grid-rows-2 xl:grid-cols-4 3xl:gap-x-12 3xl:gap-y-14 xl:gap-x-6 xl:gap-y-12">
                        <BtmBox
                            btmMainBoxClass={'from-[#F8C0EA] from-0% to-[#A18CD1]'}
                            flag={flagImage1}
                            userImage={expUserImage1}
                        />
                        <BtmBox
                            btmMainBoxClass={'from-[#96E6A1] from-0% to-[#D4FC79]'}
                            flag={flagImage2}
                            userImage={expUserImage2}
                        />
                        <BtmBox
                            btmMainBoxClass={'from-[#84FAB0] from-0% to-[#8FD3F4]'}
                            flag={flagImage3}
                            userImage={expUserImage3}
                        />
                        <BtmBox
                            btmMainBoxClass={'from-[#FEE140] from-0% to-[#FA709A]'}
                            flag={flagImage4}
                            userImage={expUserImage4}
                        />
                        <BtmBox
                            btmMainBoxClass={'from-[#FED6E3] from-0% to-[#A8EDEA]'}
                            flag={flagImage5}
                            userImage={expUserImage5}
                        />
                        <BtmBox
                            btmMainBoxClass={'from-[#8EC5FC] from-0% to-[#E0C3FC]'}
                            flag={flagImage1}
                            userImage={expUserImage6}
                        />
                        <BtmBox
                            btmMainBoxClass={'from-[#66A6FF] from-0% to-[#89F7FE]'}
                            flag={flagImage1}
                            userImage={expUserImage7}
                        />
                        <BtmBox
                            btmMainBoxClass={'from-[#88D3CE] from-0% to-[#6E45E2]'}
                            flag={flagImage6}
                            userImage={expUserImage8}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArchitectsSection


function BtmBox(props) {
    let { btmMainBoxClass, flag, userImage } = props
    return (
        <div className={`btm_box w-[162px] md:w-[232px] lg:w-[260px] xl:w-auto inline-block flex flex-col items-center justify-between bg-gradient-to-tl ${btmMainBoxClass} to-100% rounded-[24px] overflow-hidden`}>
            <div className="box_top pt-4 md:pt-6 lg:pt-8 flex flex-col items-center">
                <div className="box_flag">
                    <Image src={flag} alt='flag image ' />
                </div>
                <div className="box_content flex flex-col gap-1">
                    <span className="text-[#17181C] font-semibold text-sm md:text-lg text-center">Adrian Bridgwater</span>
                    <span className="text-[#3E4048] text-xs md:text-sm text-center">Salesforce&nbsp;Cloud Developer</span>
                </div>
            </div>

            <div className="box_img w-full">
                <Image src={userImage} type='profile' className='w-full' alt='user image ' />
            </div>
        </div>
    )
}
