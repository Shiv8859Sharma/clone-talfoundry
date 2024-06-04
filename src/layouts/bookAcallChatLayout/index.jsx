import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { InputField } from '@/components/formFields'
import engineer from '@/assets/webp/engineer.webp'
import Image from "@/components/ImageElement";

const BookACallChatLayout = (props) => {
    let { listIconFillColor = '#435ce5', headingGradient = true, formBgColor = 'bg-[#ECEFFD]', floatingImageGradientColor = 'bg-[#7209B766]',
    btnStyle='bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr'
    } = props
    return (
        <section className="cloud_section bg-[#FDFBFE]">
            <div className="default_container h-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="cloud_content py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                    <div className="cloud_top flex flex-col gap-1">
                        <div className="h_1 flex flex-wrap items-center gap-1 lg:gap-2">
                            {
                                headingGradient ? <>
                                    <span className="text-3xl text-[#17181C] font-semibold lg:text-4xl 3xl: xl:text-4xl 3xl:text-5xl">Find your next</span>
                                    <span className="text-3xl font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% xl:text-4xl 3xl: lg:text-4xl 3xl:text-5xl">Cloud Architect</span>
                                </>
                                    : <span className="text-3xl text-[#17181C] font-semibold lg:text-4xl 3xl: xl:text-4xl 3xl:text-5xl">Find your next Cloud Architect</span>
                            }

                        </div>
                        <div className="h_2">
                            <span className="text-3xl leading-[40px] text-[#17181C] font-semibold xl:text-4xl 3xl: lg:text-4xl 3xl:text-5xl">within days, not months</span>
                        </div>
                    </div>

                    <div className="cloud_btm w-full relative flex flex-col gap-8 justify-between lg:flex-row">
                        <div className="btm_left flex flex-col gap-6 3xl:w-3/5">
                            <span className="font-semibold text-base md:text-lg text-[#17181C]">
                                We can help you deliver your product faster with an
                                experienced remote Cloud Architect. All from $33.90/hour. Only
                                pay if you’re happy with your first week.
                            </span>

                            <div className="like_content flex flex-col gap-3">
                                <span className="font-bold text-[#3E4048] text-sm md:text-base">In a short 25-minute call, we would like to:</span>
                                <div className="like_list flex flex-col gap-2">
                                    <div className="list_item flex gap-3">
                                        <div className="list_icon">
                                            <CheckCircleIcon color='white' fill={listIconFillColor} className="h-7 w-7" />
                                        </div>
                                        <span className="text-[#3E4048] text-sm md:text-base">Understand your development needs</span>
                                    </div>

                                    <div className="list_item grid grid-flow-col gap-3 3xl:flex">
                                        <div className="list_icon">
                                            <CheckCircleIcon color='white' fill={listIconFillColor} className="h-7 w-7" />
                                        </div>
                                        <span className="text-[#3E4048] text-sm md:text-base lg:max-w-[80%] 3xl:max-w-[70%]">Explain our process to match you with qualified, vetted
                                            Cloud Architects from our network</span>
                                    </div>

                                    <div className="list_item grid grid-flow-col gap-3 md:flex">
                                        <div className="list_icon">
                                            <CheckCircleIcon color='white' fill={listIconFillColor} className="h-7 w-7" />
                                        </div>
                                        <span className="text-[#3E4048] text-sm md:text-base lg:max-w-[80%] 3xl:max-w-[70%]">Share next steps to finding the right match, often
                                            within less than a week</span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center justify-center absolute w-64 h-64 bg-[] w-64 h-64 md:bottom-[25%] md:-left-[15%] lg:-bottom-[10%] lg:left-[0%] xl:top-[60%] xl:left-0">
                                <div className="img_tick absolute z-30 top-[40%] right-[34%] -rotate-[10deg]">
                                    <span>✅</span>
                                </div>
                                <div className={`floating_item_4 w-full h-full ${floatingImageGradientColor} blur-[150px]`}></div>
                                <div className="item_content flex flex-col items-center absolute -rotate-[10deg]">
                                    <div className="item_img w-[90px] h-[90px] rotate-[10deg]">
                                        {/* <img src="./assets/homepage/Pic.webp" alt="pic" /> */}
                                        <Image src={engineer} alt='pic' />
                                    </div>
                                    <div className="item_txt bg-[#FFFFFF80] rounded-full flex flex-col items-center w-32 py-1 absolute top-[72%] backdrop-blur-lg">
                                        <span className="text-sm font-semibold text-[#17181C]">Stacy Keibler</span>
                                        <span className="text-xs text-[#6D6F79]">Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btm_right flex flex-col gap-5 md:w-3/5 md:mx-auto lg:w-full 3xl:w-3/5">
                            <div className={`chatForm w-full px-5 py-10 rounded-xl  flex flex-col gap-8 ${formBgColor}`}>
                                <div className="form_heading flex flex-col gap-2 lg:gap-4 items-center">
                                    <span className="text-[#4361EE] font-semibold text-xs md:text-sm">NOT SURE WHERE TO START?</span>
                                    <span className="text-[#17181C] text-2xl md:text-3xl font-bold">Let’s have a chat</span>
                                </div>

                                <form className="flex flex-col gap-6" id="chatForm" name="chatForm">
                                    <div className="yourName flex flex-col gap-2">
                                        <InputField
                                            label='Your Name'
                                            name='name'
                                            type='text'
                                            labelClass={'text-[#17181C] text-sm font-semibold'}
                                            inputContainerClass={'bg-white text-[#17181C] border border-[#BBBDC899] px-5 py-2 rounded-full text-sm'}
                                        />
                                    </div>
                                    <div className="companyEmail flex flex-col gap-2">
                                        <InputField
                                            label='Your Company Email'
                                            name='company_email'
                                            type='email'
                                            labelClass={'text-[#17181C] text-sm font-semibold'}
                                            inputContainerClass={'bg-white text-[#17181C] border border-[#BBBDC899] px-5 py-2 rounded-full text-sm'}
                                        />
                                    </div>
                                    <div className="subBtn flex items-center justify-center">
                                        <button type="button" className={`px-6 py-3 rounded-full border font-semibold text-[#ECF9FD] text-sm lg:text-base ${btnStyle}`}>
                                            Book a call
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="btm_line flex justify-center gap-2">
                                <span className="text-sm lg:text-base">⭐</span>
                                <span className="text-sm lg:text-base">First developer starts within days. No aggressive sales
                                    pitch.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookACallChatLayout;