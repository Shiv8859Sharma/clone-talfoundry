import dotCircleImage from '@/assets/webp/dot_circle.webp'
import Image from '../../components/ImageElement'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const PricingSection = () => {
    return (
        <section className="pricing_section">
            <div className="default_container h-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="pricing_content py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                    <div className="pricing_top flex flex-col gap-4 md:items-center">
                        <div className="pricing_heading flex flex-col gap-1 md:flex-row md:gap-2">
                            <span className="text-3xl md:text-4xl 3xl:text-6xl xl:text-5xl 3xl:leading-[74px] xl:leading-[58px] font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">Flexible Pricing</span>
                            <span className="text-3xl md:text-4xl 3xl:text-6xl xl:text-5xl 3xl:leading-[74px] xl:leading-[58px] text-[#17181C] font-semibold">scaling teams</span>
                        </div>
                        <div className="pricing_subTitle md:max-w-[60%] md:mx-auto">
                            <p className="text-[#3E4048] text-sm md:text-base text-center">
                                Our transparent pricing means you always know how much you’ll
                                pay and what you’re paying for.
                            </p>
                        </div>
                    </div>
                    <div className="pricing_btm grid gap-4 md:w-2/3 md:mx-auto md:gap-8 lg:w-auto lg:grid-cols-3 3xl:gap-20 xl:gap-8">
                        <div className="pricing_box flex flex-col gap-6 p-8 lg:py-12 lg:px-4 shadow-[0px_10px_32px_#040C2F0D] rounded-3xl">
                            <div className="box_top flex flex-col gap-3 md:gap-4">
                                <span className="text-2xl md:text-3xl text-[#17181C] font-semibold">Part-time 💫</span>
                                <span className="text-[#17181C] font-semibold text-3xl xl:text-4xl 3xl:text-5xl">From $40<span className="font-medium text-sm">/Per Hour</span></span>
                                <span className="text-[#4361EE] font-medium text-sm">20 HOURS WEEKLY</span>
                            </div>
                            <div className="box_btn rounded-full bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% p-0.5">
                                <button className="px-6 w-full py-3 font-semibold text-[#17181C] text-sm md:text-base bg-[#F1F3FE] rounded-full transition-all duration-200 ease-linear hover:bg-[#2D419F] hover:text-[#ECEFFD]">
                                    Purchase Now
                                </button>
                            </div>
                            <div className="box_btm flex flex-col gap-2">
                                <PricingListContent
                                    title='Increased Savings'
                                    description='You still pay a cheaper rate, without feeling like
                                    you’re overcommitting.'
                                />
                                <PricingListContent
                                    title='Stability without overcommitting'
                                    description='Benefit from a dedicated resource, available to you for
                                    the agreed hours.'
                                />
                                <PricingListContent
                                    title='Developers stability'
                                    description='A steady and stable workflow results in more effective
                                    work.'
                                />
                            </div>
                        </div>

                        <div className="pricing_box relative flex flex-col gap-6 p-8 lg:py-12 lg:px-4 shadow-[0px_10px_32px_#040C2F0D] rounded-3xl bg-[#ECEFFD]">
                            <div className="box_top flex flex-col gap-3 md:gap-4">
                                <span className="text-2xl md:text-3xl text-[#17181C] font-semibold">Full-time 🚀</span>
                                <span className="text-[#17181C] font-semibold text-3xl xl:text-4xl 3xl:text-5xl">From $40<span className="font-medium text-sm">/Per Hour</span></span>
                                <span className="text-[#4361EE] font-medium text-sm">40 HOURS WEEKLY</span>
                            </div>
                            <div className="box_btn rounded-full bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% p-0.5">
                                <button className="px-6 py-3 w-full font-semibold text-[#17181C] text-sm md:text-base bg-[#F1F3FE] rounded-full transition-all duration-200 ease-linear hover:bg-[#2D419F] hover:text-[#ECEFFD]">
                                    Purchase Now
                                </button>
                            </div>
                            <div className="box_btm flex flex-col gap-2">
                                <PricingListContent
                                    title='Increased Savings'
                                    description='A full-time developer working only with you, at our
                                    lowest hourly rate.'
                                />
                                <PricingListContent
                                    title='Maximised stability'
                                    description='Benefit from a dedicated resource, available only for your engagement.'
                                />
                                <PricingListContent
                                    title='Stability for your resource'
                                    description='A steady and stable workflow results in more effective
                                    work getting done.'
                                />
                            </div>
                            <div className="absolute top-0 right-0">
                                {/* <img src="./assets/homepage/dot_circle.webp" alt="dot_circle" /> */}
                                <Image src={dotCircleImage} alt={'dot_circle'} />
                            </div>
                        </div>

                        <div className="pricing_box">
                            <div className="last_box flex flex-col gap-6 py-12 px-10 lg:px-4 shadow-[0px_10px_32px_#040C2F0D] rounded-3xl">
                                <div className="box_top flex flex-col gap-3 md:gap-4">
                                    <span className="text-[28px] md:text-3xl text-[#17181C] font-semibold">Need something more flexible?</span>

                                    <span className="text-[#3E4048] text-sm">We have plans from 1/hour a day. Contact us for more
                                        details.</span>
                                </div>
                                <div className="box_btn rounded-full bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% p-0.5">
                                    <button className="px-6 py-3 w-full font-semibold text-[#17181C] text-sm md:text-base bg-[#F1F3FE] rounded-full transition-all duration-200 ease-linear hover:bg-[#2D419F] hover:text-[#ECEFFD]">
                                        Let’s Chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection

function PricingListContent(props) {
    let { title, description } = props
    return (
        <div className="btm_content grid grid-flow-col gap-2">
            <div className="btm_icon w-7">
                {/* <img src="./assets/homepage/icon.webp" alt="icon" /> */}
                {/* <Image src='' alt='icon' /> */}
                <CheckCircleIcon color='white' fill='#435ce5' />
            </div>
            <div className="btm_txt flex flex-col gap-1">
                <span className="text-base text-[#17181C] font-semibold">{title}</span>
                <span className="text-[#3E4048] text-sm">{description}</span>
            </div>
        </div>
    )
}