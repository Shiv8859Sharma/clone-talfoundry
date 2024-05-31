
import premiumIcon from "@/assets/webp/premium.webp"
import searchGradientIcon from "@/assets/webp/search-gradient.webp"
import ShieldIcon from "@/assets/webp/shield.webp"
import Image from "@/components/ImageElement"
import SvgIcon from "@/assets/svg"

const ChooseSection = () => {
    return (
        <section className="choose_section bg-[#FBF7FD]">
            <div className="default_container h-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="choose_content py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                    <div className="choose_top flex flex-col gap-1 md:flex-row">
                        <span className="text-3xl lg:text-4xl 3xl:text-5xl text-[#17181C] font-semibold">Why choose</span>
                        <span className="text-3xl lg:text-4xl 3xl:text-5xl font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">Talfoundry?</span>
                    </div>
                    <div className="choose_btm">
                        <div className="choose_left md:max-w-full xl:max-w-2xl 3xl:max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 3xl:grid-cols-3 gap-10 3xl:gap-4">
                            <ChooseCard
                                image={premiumIcon}
                                title={'Top quality talent on demand'}
                                description={'Get access to quality Cloud Experts with a wide range of specialized cloud skills on demand. We only let in the top 1% of applicants, so you get access to the best of the best.'}
                            />
                            <ChooseCard
                                image={searchGradientIcon}
                                title={'Comprehensive vetting process'}
                                description={'Spend less time screening and more time executing. Every candidate is pre-vetted and tailor-matched to you.'}
                            />
                            <ChooseCard
                                image={ShieldIcon}
                                title={'Safe & secure'}
                                description={'We value your safety and trust. We monitor every transaction and procedure in place to protect you from phishing, fraud, and identity theft.'}
                            />
                            <ChooseCard
                                icon={'receipt'}
                                title={'Hassle - Free Billing'}
                                description={'Everything in one place. Manage all hours, billing, and future requests from your Talfoundry account.'}
                            />
                            <ChooseCard
                                icon={'maximize'}
                                title={'Flexibility & Scale'}
                                description={'Tap into top-tier talent and scale your short or long-term projects.'}
                            />
                            <ChooseCard
                                icon={'24-hour-clock'}
                                title={'Stellar 24/7 Support'}
                                description={'Our support team is there to help you every step of the way via phone, email, and live chat.'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseSection

function ChooseCard(props) {
    let { icon = '', title, description, image = '' } = props
    return (
        <div className="choose_left_content flex flex-col gap-4 md:gap-6">
            <div className="choose_icon w-7 h-7 md:w-10 md:h-10 lg:w-12 lg:h-12">
                {/* <img src="./assets/homepage/premium.webp" alt="premium" /> */}
                {
                    icon ? <SvgIcon name={icon} />
                        : <Image src={image} alt={'icon'} />
                }

            </div>
            <div className="choose_txt lg:w-[90%] flex flex-col gap-2">
                <span className="text-[#17181C] font-semibold text-lg md:text-2xl xl:text-3xl">{title}</span>
                <span className="text-[#3E4048] text-sm md:text-base">{description}</span>
            </div>
        </div>
    )
}