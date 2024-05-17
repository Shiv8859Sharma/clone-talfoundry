import { Tab } from "@headlessui/react"
import { Fragment, useState } from "react";
import Image from "@/components/ImageElement";
import bagIcon from '@/assets/webp/bag.webp'
import teamIcon from '@/assets/webp/team.webp'
import cardIcon from '@/assets/webp/card.webp'
import cvIcon from '@/assets/webp/cv.webp'
import moneyIcon from '@/assets/webp/money-stack.webp'



let tabs = ['Client', "Cloud Expert"]

let clientCardsDetails = [
    {
        icon: bagIcon,
        title: 'Post a Job',
        description: 'Tell us about what you are looking for. We will connect you with top quality Cloud Experts instantly.'
    },
    {
        icon: teamIcon,
        title: 'Collaborate',
        description: 'Collaborate and Communicate with your Cloud Experts directly and get your work done faster.'
    },
    {
        icon: cardIcon,
        title: 'Make Payment',
        description: 'Pay your Cloud Experts securely as milestones are met for a job well done.'
    }
]

let cloudExpertCardsDetails = [
    {
        icon: cvIcon,
        title: 'Describe you',
        description: 'Describe your skills, upload portfolio items and fill out your Talfoundry profile with previous job experience.'
    },
    {
        icon: bagIcon,
        title: 'Get Hired',
        description: 'When the client determines if you are right for the job, you can get hired and start working.'
    },
    {
        icon: moneyIcon,
        title: 'Get Paid',
        description: 'It ensures you get paid for all your completed projects without hassles through the freelancing website.'
    }
]


const workSection = () => {
    const [activeTab, setActiveTab] = useState('Client');

    const handleTabChange = (name) => {
        setActiveTab('')
        setTimeout(() => {
            setActiveTab(name)
        }, 100)
    }
    return (
        <section className="work_section bg-[#FBF7FD]">
            <div className="default_container h-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="work_content overflow-hidden relative py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                    <Tab.Group>
                        <div className="work_top flex flex-col justify-between gap-4 md:items-center lg:gap-6">
                            <div className="wrk_left flex gap-2">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl text-[#17181C] font-semibold">How</span>
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">it Works</span>
                            </div>
                            <Tab.List className="wrk_right p-4 rounded-full bg-[#F8F3FC] 3xl:w-[20%] sm:max-w-[85%] sm:mx-auto md:mx-0 flex items-center justify-between xl:w-[25%]">
                                {tabs.map((tab) => (
                                    <div
                                        key={`${tab}_tab`}
                                        className={`rounded-full p-0.5 transition-all duration-300 ease-in-out ${tab === activeTab ? "button-linear-active" : ''}`}>
                                        <Tab
                                            onClick={() => handleTabChange(tab)}
                                            className={'px-5 py-3 md:px-6 md:py-3 text-nowrap font-semibold text-[#17181C] text-sm md:text-base bg-[#F8F3FC] rounded-full focus:outline-none'}
                                        >
                                            {tab}
                                        </Tab>
                                    </div>
                                ))}
                            </Tab.List>
                        </div>
                        <div className={`work_btm w-full flex transition-all duration-300 ease-in-out ${activeTab === 'Client' ? 'translate-x-0' : '-translate-x-full'}`}>
                            {tabs.map((tab) => {
                                return (
                                    <div key={`container_${tab}_work_btm`} className={`${tab} w-full flex flex-col gap-10 lg:gap-14 flex-shrink-0`}>
                                        <div className="client_content grid gap-6 md:w-1/2 md:mx-auto lg:w-auto lg:grid-cols-3 lg:gap-12">
                                            {
                                                [...(activeTab === 'Client' ? clientCardsDetails : cloudExpertCardsDetails)].map((card) => {
                                                    return (
                                                        <Fragment key={card.title}>
                                                            <WorkBox
                                                                icon={card.icon}
                                                                title={card.title}
                                                                description={card.description}
                                                            />
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="client_btm_btn flex items-center justify-center">
                                            <button className="px-6 py-3 rounded-full border font-semibold text-[#ECF9FD] text-sm md:text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr">
                                                {activeTab === 'Client' ? 'Hire Cloud Experts' : 'I want to work'}
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Tab.Group>
                </div>
            </div>
        </section>
    )
}

export default workSection


function WorkBox(props) {
    let { icon, title, description } = props
    return (
        <div className="work_box flex flex-col gap-4 md:gap-6 bg-[#F1E7F8] rounded-[12px] py-8 px-6">
            <div className="box_icon w-16 flex p-4 rounded-lg bg-[#4361EE]">
                {/* <img src="./assets/homepage/bag.webp" alt="bag" /> */}
                <Image src={icon} />
            </div>
            <div className="box_content flex flex-col gap-2">
                <span className="text-[#17181C] font-semibold text-lg md:text-2xl lg:text-3xl">{title}</span>
                <span className="text-[#3E4048] text-sm md:text-base">{description}</span>
            </div>
        </div>
    )
}