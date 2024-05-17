import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import SvgIcon from "../../../assets/svg";

let tabs = ['Client', "Cloud Expert"]

let helpSlidesCardDetails = {
    'Client': [
        {
            iconName: 'gradient-about',
            heading: 'About Talfoundry',
            description: 'How it Works, Cost, Security'
        },
        {
            iconName: 'gradient-user',
            heading: 'Your Account',
            description: 'Create an Account, Manage Account'
        },
        {
            iconName: 'gradient-bag',
            heading: 'Post a Job',
            description: 'How to Post a Job, Featured Jobs, Job Status, Edit/Repost Job, Stop Receiving Quotes, Unsupported Jobs'
        },
        {
            iconName: 'gradient-human-resources',
            heading: 'Hire Freelancer',
            description: 'About Hire Freelancers, Find Freelancers, Review Quotes, Communicating with Freelancers, Hiring a Freelancer'
        },
        {
            iconName: 'gradient-signature',
            heading: 'Managing your Job',
            description: 'Contract, End your Contract'
        },
        {
            iconName: 'gradient-feedback',
            heading: 'Feedback',
            description: 'About Feedback'
        }
    ],
    'Cloud Expert': [
        {
            iconName: 'gradient-about',
            heading: 'About Talfoundry',
            description: 'How it Works, Cost, Security'
        },

        {
            iconName: 'gradient-user',
            heading: 'Profile',
            description: 'Your Profile, Building your Profile, Profile Visibility'
        },
        {
            iconName: 'gradient-bag',
            heading: 'Getting Hired',
            description: 'Find Jobs, Communicating with Employers, Apply to jobs'
        },
        {
            iconName: 'gradient-user',
            heading: 'Your Account',
            description: 'Create an Account, Manage an Account'
        },
        {
            iconName: 'gradient-signature',
            heading: 'Managing your Job',
            description: 'Contract, End your Contract'
        },
        {
            iconName: 'gradient-feedback',
            heading: 'Feedback',
            description: 'About Feedback'
        }
    ]

}
const HelpCenter = () => {
    const [activeTab, setActiveTab] = useState('Client');

    const handleTabChange = (name) => {
        setActiveTab('')
        setTimeout(() => {
            setActiveTab(name)
        }, 100)
    }

    return (
        <main className="help_center_page">
            <section className="hero_section bg-[#ECEFFD]">
                <div className="default_container max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <Tab.Group>
                        <div className="hero_content pt-28 pb-16 flex flex-col items-center justify-center xl:pt-40 flex flex-col gap-16">
                            <div className="content_top flex flex-col gap-4">
                                <div className="heading flex flex-col items-center gap-10 3xl:max-w-5xl">
                                    <h1 className="flex justify-center flex-wrap gap-1 text-[34px] leading-[42px] sm:text-[36px] md:text-4xl lg:text-5xl lg:leading-[68px] xl:text-6xl xl:leading-[74px] text-[#17181C] font-semibold text-center md:inline-block">
                                        <span className="word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">Help
                                        </span>
                                        Center
                                    </h1>
                                </div>

                                <div className="subHeading">
                                    <p className="text-[#3E4048]">
                                        Got a question about Talfoundry? We are here to help!
                                    </p>
                                </div>
                            </div>
                            <Tab.List className="wrk_right p-4 rounded-full bg-[#FFFFFF] 3xl:w-[20%] sm:max-w-[85%] sm:mx-auto md:mx-0 flex items-center justify-between xl:w-[25%]">
                                {tabs.map((tab) => (
                                    <div
                                        key={`${tab}_tab`}
                                        className={`rounded-full p-0.5 transition-all duration-300 ease-in-out ${tab === activeTab ? "button-linear-active" : ''}`}>
                                        <Tab
                                            onClick={() => handleTabChange(tab)}
                                            className={'px-5 py-3 md:px-6 md:py-3 text-nowrap font-semibold text-[#17181C] text-sm md:text-base bg-[#FFFFFF] rounded-full focus:outline-none'}
                                        >
                                            {tab}
                                        </Tab>
                                    </div>
                                ))}
                            </Tab.List>
                        </div>
                    </Tab.Group>
                </div>
            </section>
            <section className="client_section bg-[#FDFBFE]">
                <div className="default_container max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="work_content flex flex-col gap-10 py-20 overflow-hidden relative">
                        <div className="content_top">
                            <div className="heading">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#17181C] font-semibold flex gap-2 lg:flex-row md:items-center">Select a
                                    <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">
                                        Category</span></span>
                            </div>
                        </div>

                        <div id="helpSlides" className={`content_btm flex w-full transition-all duration-300 ease-in-out ${activeTab === 'Client' ? 'translate-x-0' : '-translate-x-full'}`}>
                            {tabs.map((tab) => {
                                return (
                                    <div key={`tab_content_${tab}`} className={`${tab.toLowerCase()} flex flex-col items-center gap-6 w-full flex-shrink-0`}>
                                        <ul className="services_btm grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-16">
                                            {helpSlidesCardDetails[tab].map((details, index) => (
                                                <Fragment key={`card_${index}_slide_details`}>
                                                    <HelpSlideCard
                                                        iconName={details?.iconName}
                                                        heading={details?.heading}
                                                        description={details?.description}
                                                    />
                                                </Fragment>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HelpCenter

const HelpSlideCard = (props) => {
    let { iconName = '', heading = '', description = '' } = props
    return (
        <li className="btm_box rounded-[14px] transition-all duration-300 lg:hover:shadow-[0px_6px_50px_#137DFF1C] lg:hover:bg-[#FFFFFF]">
            <a className="flex flex-col gap-6 lg:px-6 lg:py-8 xl:px-8 xl:py-10" href="">
                <div className="box_icon">
                    {/* <img src="./assets/help_center/feedback.svg" alt="feedback"> */}
                    {iconName && <SvgIcon name={iconName} />}
                </div>
                <div className="box_text flex flex-col gap-2">
                    <div className="heading">
                        <span className="text-[#17181C] text-3xl leading-[40px] font-bold">{heading}</span>
                    </div>
                    <div className="subHeading">
                        <p className="text-[#3E4048]">{description}</p>
                    </div>
                </div>
            </a>
        </li>
    )
}