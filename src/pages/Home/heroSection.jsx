import nikitaSvg from '@/assets/homeAssets/nikita.svg'
import patelSvg from '@/assets/homeAssets/patel.svg'
import awsSvg from '@/assets/commonAssets/aws.svg'
import microsoftSvg from '@/assets/commonAssets/microsoft.svg'
import salesForceSvg from '@/assets/commonAssets/salesforce.svg'
import oracleSvg from '@/assets/commonAssets/oracle.svg'

import flyingSvg from '@/assets/webp/flying.webp'
import user1 from '@/assets/webp/user_1.webp'
import user2 from '@/assets/webp/user_2.webp'
import user3 from '@/assets/webp/user_3.webp'
import stars from '@/assets/webp/stars.webp'
import hero1 from '@/assets/webp/hero_1.webp'
import hero2 from '@/assets/webp/hero_2.webp'
import hero3 from '@/assets/webp/hero_3.webp'
import { useEffect, useState } from 'react'
import TextTypewriter from '@/components/textTypeWrite'
import SvgIcon from "@/assets/svg"

let bounceImage = [hero1, hero2, hero3]
let typingText = ['Engineers', 'Developers', 'Designers', 'Architects', 'Talents',]
const HeroSection = () => {
    const [activeImage, setActiveImage] = useState(0)
    useEffect(() => {
        let interval = setInterval(() => {
            setActiveImage((pre) => pre === 2 ? 0 : ++pre)
        }, 4000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <section className="hero_section bg-[#F1F3FE] overflow-hidden">
            <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="hero_content pt-16 pb-32 flex flex-col items-center gap-16 lg:gap-20 xl:gap-24 3xl:gap-24">
                    <div className="hero_top flex flex-col items-center gap-6 xl:gap-8">
                        <div className="hero_heading flex flex-col items-center gap-4 lg:max-w-[90%] lg:mx-auto xl:max-w-[70%]">
                            <h1 className="flex flex-col items-center justify-center gap-1 h-48 text-[38px] leading-[48px] md:h-20 lg:h-48 xl:h-auto md:text-4xl lg:text-5xl lg:leading-[68px] xl:text-6xl xl:leading-[74px] text-[#17181C] font-semibold text-center md:inline-block">
                                Connect with the Next Generation 
                                <span
                                    id="word"
                                    className="word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%"
                                >
                                    {' '}<TextTypewriter text={typingText} delay={80} infinite />
                                </span>
                            </h1>
                            <span className="max-w-[80%] text-[#3E4048] text-center">We are your one-stop site to find amazing Cloud
                                Experts!</span>
                        </div>

                        <div className="hero_btn flex flex-col items-center gap-4 md:flex-row">
                            <button className="px-6 py-3 rounded-full border font-semibold text-[#ECF9FD] text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr">
                                Hire Cloud Experts
                            </button>
                            <div className="work_btn rounded-full bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% p-0.5">
                                <button className="px-6 py-3 font-semibold text-[#17181C] text-base bg-[#F1F3FE] rounded-full transition-all duration-200 ease-linear hover:bg-[#2D419F] hover:text-[#ECEFFD]">
                                    Work as an Expert
                                </button>
                            </div>
                        </div>
                        <div className="hero_rating flex items-center">
                            <div className="rating_left flex items-center gap-3 pr-1 md:pr-2 border-r border-[rgba(62, 64, 72, 1)]">
                                <div className="flex -space-x-4 rtl:space-x-reverse">
                                    <img className="w-[45px] h-[45px] dark:border-gray-800" src={user1} alt="" />
                                    <img className="w-[45px] h-[45px] dark:border-gray-800" src={user2} alt="" />
                                    <img className="w-[45px] h-[45px] dark:border-gray-800" src={user3} alt="" />
                                </div>
                                <div className="left_txt flex flex-col gap-1">
                                    <span className="font-figtree font-semibold text-sm text-[#17181C] md:text-lg">2,293+</span>
                                    <span className="font-figtree text-xs text-[#17181C] opacity-75 md:text-base">Cloud Experts</span>
                                </div>
                            </div>

                            <div className="rating_right flex flex-col gap-1 pl-1 md:pl-2">
                                <span className="font-figtree font-semibold text-sm text-[#17181C] md:text-lg">4.8</span>
                                <div className="star_txt flex items-center gap-2">
                                    <img src={stars} alt="Stars" />
                                    <span className="font-figtree text-xs text-[#17181C] opacity-75 md:text-base">Avg. Rating</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero_btm w-full flex items-center justify-center">
                        <div className="heroBlock relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-2 border-[#4361EE] rounded-full bg-[#ECEFFD] flex items-center justify-center">
                            <div className="heroInnerBlock w-[260px] h-[260px] md:w-[360px] md:h-[360px] border-2 border-[#4361EE] rounded-full bg-[#D0D8FB] flex items-center justify-center">
                                <div className={`heroCoreCircle relative w-[198px] h-[198px] md:w-[298px] md:h-[298px] rounded-full overflow-hidden bg-hero${activeImage + 1}_bg`}>
                                    {bounceImage.map((image, index) => {
                                        return (
                                            <div key={`cardBounce_${index}_image`} className={`heroImg_1 absolute translate-y-full ${index === activeImage ? 'animate-[cardBounce_4s_ease-in-out_infinite]' : ''}`}>
                                                <img src={image} alt="hero_1" />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* <!-- heroA_Item --> */}
                            <div className="heroA_item absolute top-[35%] -left-[20%] md:top-[40%] md:-left-[15%] z-10 pl-2 pr-4 py-1.5 flex items-center gap-2 bg-[#FFFFFF80] rounded-full animate-[heroAPulse_4s_ease-in-out_infinite]">
                                <div className="item_img w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% flex items-center justify-center">
                                    <span>🏆</span>
                                </div>
                                <div className="item_txt flex flex-col">
                                    <span className="text-sm md:text-sm text-[#17181C] font-semibold">Rank</span>
                                    <span className="text-[#6D6F79] text-xs">Top 1% Talent</span>
                                </div>
                            </div>
                            <div className="heroA_item absolute bottom-[5%] left-[15%] md:bottom-[20%] md:left-[15%] z-10 pl-2 pr-4 py-1.5 flex items-center gap-2 bg-[#FFFFFF80] rounded-full animate-[heroBPulse_4s_ease-in-out_infinite]">
                                <div className="item_img w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% flex items-center justify-center ">
                                    <span>💫</span>
                                </div>
                                <div className="item_txt flex flex-col">
                                    <span className="text-sm md:text-sm text-[#17181C] font-semibold">Skills</span>
                                    <span className="text-[#6D6F79] text-xs">AWS Cloud9, AWS Amplify +5</span>
                                </div>
                            </div>
                            <div className="heroA_item absolute top-[50%] -right-[15%] z-10 pl-2 pr-4 py-1.5 flex items-center gap-2 bg-[#FFFFFF80] rounded-full animate-[heroCPulse_4s_ease-in-out_infinite]">
                                <div className="item_img w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% flex items-center justify-center ">
                                    <span>✅</span>
                                </div>
                                <div className="item_txt flex flex-col">
                                    <span className="text-sm md:text-sm text-[#17181C] font-semibold">Experience</span>
                                    <span className="text-[#6D6F79] text-xs">Expert</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- floting items section --> */}

                <div className="flex items-center justify-center absolute top-[32%] -left-[40%] sm:top-[32%] sm:-left-[38%] lg:top-[38%] lg:-left-[15%] xl:top-[65%] xl:left-[10%] w-64 h-64 w-64 h-64">
                    <div className="floating_item_4 w-full h-full bg-[#7209B766] rotate-[10deg] blur-[150px]"></div>
                    <div className="item_content hidden lg:flex flex-col items-center absolute -rotate-[10deg]">
                        <div className="item_img w-[90px] h-[90px] -rotate-[9deg]">
                            <img src={nikitaSvg} alt="" />
                        </div>
                        <div className="item_txt bg-[#FFFFFF80] rounded-full flex flex-col items-center md:w-32 px-2 py-1 absolute top-[72%] backdrop-blur-lg">
                            <span className="text-[9px] md:text-sm font-semibold text-[#17181C]">Nitika Sharma</span>
                            <span className="text-[8px] md:text-xs text-[#6D6F79]">Software Developer</span>
                        </div>
                    </div>
                </div >

                <div className="flex items-center justify-center absolute top-[12%] right-[10%] sm:top-[16%] lg:top-[38%] lg:-right-[18%] xl:right-[10%] xl:top-[65%] w-64 h-64">
                    <div className="floating_item_3 w-full h-full bg-[#4CC9F066] rotate-[10deg] blur-[150px]"></div>
                    <div className="item_content hidden lg:flex flex-col items-center absolute rotate-[10deg]">
                        <div className="item_img w-[90px] h-[90px] rotate-[16deg]">
                            <img src={patelSvg} alt="" />
                        </div>
                        <div className="item_txt bg-[#FFFFFF80] rounded-full flex flex-col items-center px-4 md:w-28 py-1 absolute top-[72%] lg:w-32 backdrop-blur-lg">
                            <span className="text-[9px] md:text-sm font-semibold text-[#17181C]">Peter Pandit</span>
                            <span className="text-[8px] md:text-xs text-[#6D6F79]">Engineer</span>
                        </div>
                    </div>
                </div>

                {/* <!-- dots section --> */}

                <div className="dot_1 absolute top-[40%] w-[14px] h-[14px] rounded-full bg-[#7209B7] shadow-[0px_10px_20px_rgba(114,9,183,0.4)] lg:top-[25%] lg:left-[12%] xl:top-[28%] xl:left-[25%] 3xl:top-[35%] 3xl:left-[30%]"></div>

                <div className="dot_2 absolute top-[36%] right-[5%] w-[18px] h-[18px] rounded-full bg-[#4361EE] shadow-[0px_10px_20px_rgba(67,97,238,0.4)] xl:top-[30%] xl:right-[5%] lg:top-[30%] lg:right-[0%] 3xl:top-[30%] 3xl:right-[2%]"></div>
                {/* <!-- floating circles section --> */}
                <div className="heart hidden xl:flex w-14 h-14 absolute items-center justify-center lg:top-[40%] lg:right-[15%] xl:top-[45%] xl:right-[15%] 3xl:top-[50%] 3xl:right-[20%] bg-[#ECF9FD] rounded-full shadow-[0px_10px_20px_#7209B733]">
                    <img width="26px" src={awsSvg} alt="heart" />
                </div>

                <div className="web-development hidden xl:flex w-14 h-14 absolute items-center justify-center lg:top-[40%] lg:-right-[15%] xl:top-[45%] xl:left-[20%] 3xl:top-[50%] 3xl:left-[25%] bg-[#ECF9FD] rounded-full shadow-[0px_10px_20px_#7209B733]">
                    <img width="26px" src={salesForceSvg} alt="web-development" />
                </div>

                <div className="cloud hidden xl:flex w-14 h-14 absolute items-center justify-center top-[20%] right-[10%] bg-[#ECF9FD] rounded-full shadow-[0px_10px_20px_#7209B733]">
                    <img width="26px" src={microsoftSvg} alt="cloud" />
                </div>

                <div className="flash hidden xl:flex w-14 h-14 absolute items-center justify-center top-[25%] left-[15%] bg-[#ECF9FD] rounded-full shadow-[0px_10px_20px_#7209B733]">
                    <img width="26px" src={oracleSvg} alt="flash" />
                </div>
                {/* <!-- flying bg section --> */}
                <div className="hidden lg:block flying absolute bottom-[5%] lg:-left-[24%] xl:-left-[4%]">
                    <img src={flyingSvg} alt="flying" />
                </div>
                <div className="flying hidden lg:block w-40 absolute -bottom-[2%] lg:-right-[20%] xl:-right-[6%]">
                    <img src={flyingSvg} alt="flying" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection