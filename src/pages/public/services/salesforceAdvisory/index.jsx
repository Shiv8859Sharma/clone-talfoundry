import AdvisoryHeroSection from "../advisoryHeroSection"
import centersalesforceAdvisoryImage from '@/assets/image/center-salesforce-advisory.jpg'
import { ArrowRightCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import BookACallChatLayout from '@/layouts/bookAcallChatLayout'
import dotCircleImage from '@/assets/webp/dot_circle.webp'
import SvgIcon from "@/assets/svg"

let salesforceAdvisoryCircleData = [
    {
        icon: 'slack',
        className: 'top-[6%] left-[44%]',
        text: 'Slack'
    },
    {
        icon: 'mulesoft',
        className: 'top-[16%] right-[18%]',
        text: 'Mulesoft'
    },
    {
        icon: 'products-sustainability-day',
        className: 'top-[32%] right-[5%]',
        text: 'Net Zero'
    },
    {
        icon: 'sales-day',
        className: 'bottom-[32%] right-[5%]',
        text: 'Sales'
    },
    {
        icon: 'management',
        className: 'bottom-[16%] right-[18%]',
        text: 'Management'
    },
    {
        icon: 'service-day',
        className: 'bottom-[6%] left-[42%]',
        text: 'Service'
    },
    {
        icon: 'platform-day',
        className: 'bottom-[16%] left-[18%]',
        text: 'Platform'
    },
    {
        icon: 'sales-day',
        className: 'bottom-[32%] left-[5%]',
        text: 'Salesforce'
    },
    {
        icon: 'data-cloud',
        className: 'top-[32%] left-[5%]',
        text: 'Data Cloud'
    },
    {
        icon: 'analytics',
        className: 'top-[14%] left-[20%]',
        text: 'Analytics'
    },
]

const SalesforceAdvisory = () => {
    return (
        <main>
            <AdvisoryHeroSection
                heading='Leveraging the power of the Salesforce to Platform transform your business.'
                sectionClass='bg-[#E7F3FF]'
                headingClass='text-[34px] leading-[42px] sm:text-[36px] md:text-4xl lg:text-5xl lg:leading-[68px] xl:text-6xl xl:leading-[74px] text-[#032D60] font-semibold md:inline-block'
                buttonClass='text-[#ECF9FD] bg-[#0176D3]'
                centerImage={centersalesforceAdvisoryImage}
                AdvisoryCircleList={salesforceAdvisoryCircleData}
                type='salesforce'
            />
            <section className="easy_section">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="easy_content py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col gap-6 md:gap-8">
                        <div className="easy_top">
                            <div className="heading">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#032D60] font-semibold">Getting started is Easy
                                </span>
                            </div>
                        </div>

                        <ul className="easy_btm grid lg:grid-cols-3 lg:gap-6 xl:gap-16">
                            <EasySectionCasd
                                count='1'
                                countBoxColor='bg-[#0B5BAE]'
                                title='First, we evaluate'
                                description='We evaluate your AWS needs and propose engineers to join your team'
                            />
                            <EasySectionCasd
                                count='2'
                                countBoxColor='bg-[#08A599]'
                                title='Second, we onboard'
                                description='We onboard your chosen Talfoundry AWS engineers to your team.'
                            />
                            <EasySectionCasd
                                count='3'
                                countBoxColor='bg-[#B80556]'
                                title='Third, we oversee'
                                description='We oversee your Talfoundry engineers and support you every step of the way'
                            />
                        </ul>
                    </div>
                </div>
            </section>
            <section className="services_section bg-[#F5FAFF]">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="services_content py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col gap-8">
                        <div className="content_top flex flex-col gap-6">
                            <div className="heading">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#032D60] font-semibold">Salesforce Advisory Services
                                </span>
                            </div>

                            <div className="subHeading flex flex-col lg:flex-row gap-10">
                                <div className="subLeft">
                                    <p className="text-[#3E4048]">
                                        Talfoundry is one of the leading Salesforce consulting
                                        companies with experience and expertise to drive
                                        Salesforce-powered digital transformation for your
                                        enterprise. Our consultants can help clients leverage the
                                        Salesforce platform effectively to innovate and create value
                                        from customer operations. We use Salesforce products to
                                        transform businesses for the future by
                                    </p>
                                </div>
                                <div className="subRight">
                                    <p className="text-[#3E4048]">
                                        connecting disparate systems and taking manual work out of
                                        internal processes. Our next-generation strategies improve
                                        customer experience and employee productivity. We offer a
                                        variety of services and packages from general consulting, to
                                        system implementation, custom development and ongoing
                                        support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <ul className="content-btm grid md:grid-cols-2 lg:grid-cols-3 gap-10 3xl:gap-20">
                            <ServiceSectionCard
                                icon='speedMetarWithMan'
                                title='Salesforce Implementation'
                                description='Experienced and certified salesforce consultants delivering solutions driving customer and business values.'
                            />
                            <ServiceSectionCard
                                icon='laptopDevelopment'
                                title='Force.com Development'
                                description='Build apps for all your business divisions with the mobile first salesforce platform.'
                            />
                            <ServiceSectionCard
                                icon='settingSolution'
                                title='Salesforce Automation'
                                description='Enhance business process & improve productivity by complete automation using salesforce platform tools.'
                            />
                            <ServiceSectionCard
                                icon='exchange'
                                title='Lightning Experience'
                                description='Enabling and migrating users to the new Salesforce lightning experience.'
                            />
                            <ServiceSectionCard
                                icon='lightening'
                                title='Data Migration'
                                description='Data migration from your legacy on-premise application or cloud based SaaS to Salesforce platform.'
                            />
                            <ServiceSectionCard
                                icon='data-analytics-circle'
                                title='Advanced Analytics'
                                description='Enhance business process & improve productivity by complete automation using salesforce platform tools.'
                            />
                        </ul>
                    </div>
                </div>
            </section>

            <section className="competencies section">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="competencies_content py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col gap-10 3xl:gap-20">
                        <div className="content_top flex flex-col gap-6">
                            <div className="heading">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#032D60] font-semibold">Our Salesforce Competencies
                                </span>
                            </div>
                        </div>

                        <ul className="content_btm grid md:grid-cols-2 lg:grid-cols-3">
                            <CompetenciesSectionCard
                                iconName='cloud-with-underscore'
                                iconClassName='fill-[#9F63C6]'
                                title='Sales & Service Cloud'
                                description='Consulting & Implementation Administration Customization-Point & click and advanced coding Integration with other business applications'
                                containerClass='md:border-r border-b'
                            />
                            <CompetenciesSectionCard
                                iconName='cloud-with-mobile-icon'
                                title='App Cloud'
                                description='Designing custom app for Classic, Lightning and Salesforce, Integrating custom app with other Salesforce apps or external applications.'
                                containerClass='md:border-r border-b'
                            />
                            <CompetenciesSectionCard
                                iconName='cloud-with-team'
                                title='Community Cloud'
                                description='Configure, develop, implement and manage your customer, employee & partner communities using community builder.'
                                containerClass='border-b md:border-r lg:border-r-0'
                            />
                            <CompetenciesSectionCard
                                iconName='mobile-with-developer-icon'
                                title='Buildings apps for AppExchange'
                                description='Consulting, design and building apps on Force com while strictly adhering to Salesforce security review guidelines'
                                containerClass='border-b lg:border-b-0 lg:border-r'
                            />
                            <CompetenciesSectionCard
                                iconName='data-analytics'
                                title='Einstein Analytics'
                                description='Integrating with external data sources Building Datasets Creating customized dashboards'
                                containerClass='border-b md:border-b-0 md:border-r'
                            />
                            <CompetenciesSectionCard
                                iconName='elearning'
                                title='Pardot'
                                description='Consulting and configuration User training and administration Integration services'
                                containerClass=''
                            />
                        </ul>
                    </div>
                </div>
            </section>

            <section className="consulting_section bg-[#F5FAFF]">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="consulting_content py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col gap-20">
                        <div className="content_top flex flex-col lg:flex-row gap-10">
                            <div className="heading">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#032D60] font-semibold">Why Talfoundry for Salesforce Consulting Services
                                </span>
                            </div>
                            <div className="subHeading flex flex-col gap-4">
                                <p className="text-[#181818]">
                                    Talfoundry is a Salesforce consulting partner equipped with
                                    certified &amp; experienced resources to understand your unique
                                    business requirements and advice on best fit Salesforce
                                    solutions. We are committed to help you realize the true
                                    possibilities offered by Salesforce products and its platform
                                    to improve your business operations.
                                </p>
                                <p className="text-[#181818]">
                                    Talfoundry assists organizations to get all the benefits from
                                    Salesforce standard functionalities and also develop custom
                                    Salesforce applications using Force com to satisfy unique
                                    business requirements wherever the standard functionalities
                                    are inadequate.
                                </p>
                            </div>
                        </div>

                        <ul className="content_btm grid md:grid-cols-2 lg:grid-cols-3">
                            <ConsultingSectionCard
                                iconName='idea-white-circle'
                                description='Ability to identify your business pain points and develop solutions to drive customer value.'
                            />
                            <ConsultingSectionCard
                                iconName='system-code-circle'
                                description='Onsite offshore model offering you the arbitrage advantage, thereby delivering cost-effective solutions'
                            />
                            <ConsultingSectionCard
                                iconName='kite-scale'
                                description='Scale upscale down resources to fit your project requirements without any interference to production'
                            />
                            <ConsultingSectionCard
                                iconName='feedback'
                                description='Agite, iterative, feedback based development to ensure continuous improvement'
                            />
                            <ConsultingSectionCard
                                iconName='certificate-white-circle'
                                description='Experience of working with leading and referenceable Salesforce ISVs.'
                            />
                            <ConsultingSectionCard
                                iconName='salesforce--white-circle'
                                description='Salesforce certified consultants and developers'
                            />
                        </ul>
                    </div>
                </div>
            </section>

            <section className="pricing_section">
                <div className="default_container h-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="pricing_content py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                        <div className="pricing_top flex flex-col gap-4 md:items-center">
                            <div className="pricing_heading flex justify-center md:gap-2">
                                <span className="text-3xl md:text-4xl 3xl:text-6xl xl:text-5xl 3xl:leading-[74px] xl:leading-[58px] text-[#17181C] font-semibold">Flexible Pricing scaling teams</span>
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

                                <button className="px-6 w-full py-3 font-semibold text-[#0176D3] text-sm md:text-base rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#0176D3] lg:hover:text-[#ECEFFD] border-2 border-[#0176D3]">
                                    Purchase Now
                                </button>

                                <div className="box_btm flex flex-col gap-2">
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            <CheckCircleIcon className='size-6 fill-[#539FE5] stroke-[#fff]' />
                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#17181C] font-semibold">Increased Savings</span>
                                            <span className="text-[#3E4048] text-sm">You still pay a cheaper rate, without feeling like
                                                you’re overcommitting.</span>
                                        </div>
                                    </div>
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            <CheckCircleIcon className='size-6 fill-[#539FE5] stroke-[#fff]' />
                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#17181C] font-semibold">Stability without overcommitting</span>
                                            <span className="text-[#3E4048] text-sm">Benefit from a dedicated resource, available to you for
                                                the agreed hours.</span>
                                        </div>
                                    </div>
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            <CheckCircleIcon className='size-6 fill-[#539FE5] stroke-[#fff]' />
                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#17181C] font-semibold">Developers stability</span>
                                            <span className="text-[#3E4048] text-sm">A steady and stable workflow results in more effective
                                                work.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pricing_box relative flex flex-col gap-6 p-8 lg:py-12 lg:px-4 shadow-[0px_10px_32px_#040C2F0D] rounded-3xl bg-[#D9EDFC]">
                                <div className="box_top flex flex-col gap-3 md:gap-4">
                                    <span className="text-2xl md:text-3xl text-[#032D60] font-semibold">Full-time 🚀</span>
                                    <span className="text-[#032D60] font-semibold text-3xl xl:text-4xl 3xl:text-5xl">From $40<span className="font-medium text-sm">/Per Hour</span></span>
                                    <span className="text-[#032D60] font-medium text-sm">40 HOURS WEEKLY</span>
                                </div>
                                <button className="px-6 w-full py-3 font-semibold text-[#0176D3] text-sm md:text-base rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#0176D3] lg:hover:text-[#ECEFFD] border-2 border-[#0176D3]">
                                    Purchase Now
                                </button>
                                <div className="box_btm flex flex-col gap-2">
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            <CheckCircleIcon className='size-6 fill-[#539FE5] stroke-[#fff]' />
                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#032D60] font-semibold">Increased Savings</span>
                                            <span className="text-[#181818] text-sm">A full-time developer working only with you, at our
                                                lowest hourly rate.</span>
                                        </div>
                                    </div>
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            <CheckCircleIcon className='size-6 fill-[#539FE5] stroke-[#fff]' />
                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#032D60] font-semibold">Maximised stability</span>
                                            <span className="text-[#181818] text-sm">Benefit from a dedicated resource, available only for
                                                your engagement.</span>
                                        </div>
                                    </div>
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            <CheckCircleIcon className='size-6 fill-[#539FE5] stroke-[#fff]' />
                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#032D60] font-semibold">Stability for your resource</span>
                                            <span className="text-[#181818] text-sm">A steady and stable workflow results in more effective
                                                work getting done.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0">
                                    <img src={dotCircleImage} alt="dot_circle" />
                                </div>
                            </div>

                            <div className="pricing_box">
                                <div className="last_box flex flex-col gap-6 py-12 px-10 lg:px-4 shadow-[0px_10px_32px_#040C2F0D] rounded-3xl">
                                    <div className="box_top flex flex-col gap-3 md:gap-4">
                                        <span className="text-[28px] md:text-3xl text-[#17181C] font-semibold">Need something more flexible?</span>

                                        <span className="text-[#3E4048] text-sm">We have plans from 1/hour a day. Contact us for more
                                            details.</span>
                                    </div>
                                    <button className="px-6 w-full py-3 font-semibold text-[#0176D3] text-sm md:text-base rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#0176D3] lg:hover:text-[#ECEFFD] border-2 border-[#0176D3]">
                                        Let's chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BookACallChatLayout
                headingGradient={false}
                formBgColor='bg-[#D9EDFC]'
                listIconFillColor='#539FE5'
                floatingImageGradientColor='bg-[#0073BB66]'
                btnStyle='bg-[#0176D3] text-[#ECF9FD] '
            />
        </main>
    )
}

export default SalesforceAdvisory

const EasySectionCasd = (props) => {
    let { count = '', countBoxColor = '', title = '', description = '' } = props
    return (
        <li className="btm_box flex flex-col gap-6 xl:px-8 py-10">
            <div className={`box_icon w-[60px] h-[60px] rounded-full flex justify-center items-center ${countBoxColor}`}>
                <span className="text-[#ECEFFD] text-2xl font-bold">{count}</span>
            </div>
            <div className="box_text lex flex-col gap-2">
                <div className="heading">
                    <span className="text-[#032D60] text-3xl leading-[40px] font-bold">{title}</span>
                </div>
                <div className="subHeading">
                    <p className="text-[#181818]">
                        {description}
                    </p>
                </div>
            </div>
        </li>
    )
}

const ServiceSectionCard = (props) => {
    let { image = '', description = '', title = '', icon = '' } = props
    return (
        <li className="px-8 py-10 bg-[#FFFFFF] shadow-[0px_10px_32px_0_#040C2F0D] rounded-[14px] flex flex-col justify-between">
            <div className="card_top flex flex-col gap-6">
                <div className="btm_icon">
                    {icon ? <SvgIcon name={icon} />
                        : <img src={image} alt="businessman" />
                    }
                </div>
                <div className="txt">
                    <div className="title">
                        <span className="text-[#032D60] font-bold text-3xl">{title}</span>
                    </div>
                    <div className="subTitle">
                        <p className="text-[#181818]">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className="link">
                <a className="flex items-center gap-3" href="">
                    <span className="text-[#0176D3] font-semibold">Learn More</span>
                    <ArrowRightCircleIcon fill='#0176D3' color="white" className="w-7 h-7" />
                </a>
            </div>
        </li>
    )
}

const CompetenciesSectionCard = (props) => {
    // 
    let { iconName = '', title = '', description = '', containerClass = '', iconClassName = '' } = props
    return (
        <li className={`px-8 py-10 flex flex-col gap-6 border-[#BBBDC8] ${containerClass}`}>
            <div className="btm_icon">
                {iconName && <SvgIcon name={iconName} className={`stroke-[#9F63C6] ${iconClassName}`} />}
            </div>
            <div className="txt flex flex-col gap-3">
                <div className="title">
                    <span className="text-[#17181C] font-bold text-3xl">{title}</span>
                </div>
                <div className="subTitle">
                    <p className="text-[#3E4048]">
                        {description}
                    </p>
                </div>
            </div>
        </li>
    )
}

const ConsultingSectionCard = (props) => {
    let { iconName = '', description = '', iconClassName = '' } = props

    return (
        <li className="px-8 py-10 flex flex-col gap-6">
            <div className="btm_icon">
                {/* <img src={image} alt="idea" /> */}
                {iconName && <SvgIcon name={iconName} className={iconClassName} />}

            </div>
            <div className="txt flex flex-col gap-3">
                <div className="subTitle">
                    <p className="text-[#3E4048]">
                        {description}
                    </p>
                </div>
            </div>
        </li>
    )
}