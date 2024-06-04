import { Tab } from "@headlessui/react"
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

let tabs = ['Client', "Cloud Expert"]
const HowItWorks = () => {
    const [activeTab, setActiveTab] = useState('Client');

    const handleTabChange = (name) => {
        setActiveTab('')
        setTimeout(() => {
            setActiveTab(name)
        }, 100)
    }
    return (
        <main className="how_its_work_page">
            <section className="hero_section bg-[#ECEFFD]">
                <div className="default_container max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <Tab.Group>
                        <div className="hero_content pt-28 pb-16 flex flex-col items-center justify-center xl:pt-40 flex flex-col gap-16">
                            <div className="content_top">
                                <div className="heading flex flex-col items-center gap-10 3xl:max-w-5xl">
                                    <h1 className="flex justify-center flex-wrap gap-1 text-[34px] leading-[42px] sm:text-[36px] md:text-4xl lg:text-5xl lg:leading-[68px] xl:text-6xl xl:leading-[74px] text-[#17181C] font-semibold text-center md:inline-block">
                                        <span className="word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">How
                                        </span>
                                        {' '}it Works
                                    </h1>
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
            <section className="client_section">
                <div className="default_container max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="work_content py-20 overflow-hidden relative">
                        <div id="workSlides" className={`expert_btm flex w-full ${activeTab === 'Client' ? 'max-h-[1780px] sm:max-h-[1640px] md:max-h-[1220px] lg:max-h-[1100px]' : 'max-h-[3200px] sm:max-h-[2640px] md:max-h-[1820px] lg:max-h-[1700px]'} transition-all duration-300 ease-in-out ${activeTab === 'Client' ? 'translate-x-0' : '-translate-x-full'}`}>
                            <div className="client flex flex-col items-center gap-6 w-full flex-shrink-0">
                                <ul className="flex flex-col w-[90%] lg:w-[80%] xl:w-[60%]">
                                    <li className="relative pl-8 md:pl-16 pb-16 border-l border-[#4361EE] flex flex-col gap-6">
                                        <div className="heading flex flex-col gap-4">
                                            <div className="title">
                                                <span className="text-[#17181C] text-3xl font-bold">Post a Job</span>
                                            </div>
                                            <div className="subtitle">
                                                <p className="text-[#3E4048]">
                                                    Tell us about what you are looking for. We will
                                                    connect you with top quality Cloud Experts instantly.
                                                    Quickly find, engage, and work with Cloud experts
                                                    on-demand for your mission-critical projects.
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="flex flex-col gap-4">
                                            <li className="btm_content grid grid-flow-col md:flex gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Tell us about what you are looking for</span>
                                                    <span className="text-[#3E4048] text-sm">Specify the tasks, confirm the deadline and set a
                                                        budget. It’s free!</span>
                                                </div>
                                            </li>
                                            <li className="btm_content grid grid-flow-col md:flex gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Receive bids within minutes</span>
                                                    <span className="text-[#3E4048] text-sm">Freelancers from around the world notice your
                                                        project and send their proposals right away</span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="circle absolute -left-[3.9%] md:-left-[2%] 3xl:-left-[1.5%] w-6 h-6 border-[4px] border-[#4361EE] rounded-full bg-white"></div>
                                    </li>
                                    <li className="relative pl-8 md:pl-16 pb-16 border-l border-[#BBBDC8] flex flex-col gap-6">
                                        <div className="heading flex flex-col gap-4">
                                            <div className="title">
                                                <span className="text-[#17181C] text-3xl font-bold">Find The Perfect Match</span>
                                            </div>
                                            <div className="subtitle">
                                                <p className="text-[#3E4048]">
                                                    Instantly find Cloud Experts with Exceptional Talents,
                                                    receive and compare the quotes.
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="flex flex-col gap-4">
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Get in-depth insights into Cloud Expert
                                                        profiles</span>
                                                    <span className="text-[#3E4048] text-sm">Before you finalize any Cloud Expert, you get the
                                                        advantage of browsing through the shortlisted
                                                        profiles and get an in-depth insight into their
                                                        portfolios, success stories, client ratings
                                                        etc.</span>
                                                </div>
                                            </li>
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Assess the bids</span>
                                                    <span className="text-[#3E4048] text-sm">Analyze the proposals according to the merits of
                                                        each Cloud Expert's qualifications, experience, line
                                                        of thinking, overall cost and the timeframe.</span>
                                                </div>
                                            </li>
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Get Talking with your Pick</span>
                                                    <span className="text-[#3E4048] text-sm">Identify and ascertain the most suitable person for
                                                        the contract by having a chat. Our chat platform
                                                        makes your job of interviewing the suitable
                                                        candidates much easier.</span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="circle absolute -left-[3.9%] md:-left-[2%] 3xl:-left-[1.5%] w-6 h-6 border-[4px] border-[#BBBDC8] rounded-full bg-white"></div>
                                    </li>
                                    <li className="relative pl-8 md:pl-16 pb-16 border-l border-[#BBBDC8] flex flex-col gap-6">
                                        <div className="heading flex flex-col gap-4">
                                            <div className="title">
                                                <span className="text-[#17181C] text-3xl font-bold">Get Work Done</span>
                                            </div>
                                            <div className="subtitle">
                                                <p className="text-[#3E4048]">
                                                    Collaborate and Communicate with your Cloud Experts
                                                    directly and get your work done faster.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="circle absolute -left-[3.9%] md:-left-[2%] 3xl:-left-[1.5%] w-6 h-6 border-[4px] border-[#BBBDC8] rounded-full bg-white"></div>
                                    </li>
                                    <li className="relative pl-8 md:pl-16 border-l border-[#BBBDC8] flex flex-col gap-6">
                                        <div className="heading flex flex-col gap-4">
                                            <div className="title">
                                                <span className="text-[#17181C] text-3xl font-bold">Pay Securely</span>
                                            </div>
                                            <div className="subtitle flex flex-col gap-4">
                                                <p className="text-[#3E4048]">
                                                    Pay your Cloud Expert either according to the hourly
                                                    contract or according to the concept of a fixed price
                                                    for the entire project. You can reimburse periodical
                                                    payments in case of fixed price work as soon as a
                                                    preset milestone is achieved.
                                                </p>
                                                <p className="text-[#3E4048]">
                                                    Use our licensed escrow service to release the payment
                                                    accrued after completion of each milestone. Invoicing
                                                    and transaction histories helps you keep track of the
                                                    payments and minimizes the risk of any fraudulent
                                                    payments.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="circle absolute -left-[3.9%] md:-left-[2%] 3xl:-left-[1.5%] w-6 h-6 border-[4px] border-[#BBBDC8] rounded-full bg-white"></div>
                                    </li>
                                </ul>
                            </div>

                            <div className="cloudExpert flex justify-center w-full flex-shrink-0">
                                <ul className="flex flex-col w-[90%] lg:w-[80%] xl:w-[60%]">
                                    <li className="relative pl-8 md:pl-16 pb-16 border-l border-[#4361EE] flex flex-col gap-6">
                                        <div className="heading flex flex-col gap-4">
                                            <div className="title">
                                                <span className="text-[#17181C] text-3xl font-bold">Create Your Profile</span>
                                            </div>
                                            <div className="subtitle">
                                                <p className="text-[#3E4048]">
                                                    Describe your skills and upload portfolio items and
                                                    fill out your Talfoundry profile with previous job
                                                    experience
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="flex flex-col gap-4">
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Freedom of Choice</span>
                                                    <span className="text-[#3E4048] text-sm">At TalFoundry you enjoy the freedom of running your
                                                        own business as you experience absolute liberty to
                                                        choose your own clients and projects. We will
                                                        feature all the ideal jobs as soon as you complete
                                                        your profile. You will also be able to look out for
                                                        projects and respond to client invitations.</span>
                                                </div>
                                            </li>
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">An Awesome range of jobs with lucrative payment
                                                        options</span>
                                                    <span className="text-[#3E4048] text-sm">Find a wide variety of jobs posted by our esteemed
                                                        clients covering a huge number of categories of
                                                        expertise, where clients are very keen to match
                                                        their payment worthy of your work.</span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="circle absolute -left-[3.9%] md:-left-[2%] 3xl:-left-[1.5%] w-6 h-6 border-[4px] border-[#4361EE] rounded-full bg-white"></div>
                                    </li>
                                    <li className="relative pl-8 md:pl-16 pb-16 border-l border-[#BBBDC8] flex flex-col gap-6">
                                        <div className="heading flex flex-col gap-4">
                                            <div className="title">
                                                <span className="text-[#17181C] text-3xl font-bold">Find projects to work on</span>
                                            </div>
                                            <div className="subtitle">
                                                <p className="text-[#3E4048]">
                                                    Search through our list of available job offers for
                                                    projects that fit your skills and compensation
                                                    requirements. Browse through the available projects,
                                                    that fit your skills and compensation requirements and
                                                    send your proposals.
                                                </p>
                                            </div>
                                        </div>

                                        <ul className="flex flex-col gap-4">
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Efficient, well-organized hiring policy</span>
                                                    <span className="text-[#3E4048] text-sm">We use advanced algorithms to identify the best
                                                        projects that matches your skill set. If the project
                                                        interests you, all you have to do is place your
                                                        bid.</span>
                                                </div>
                                            </li>
                                            <li className="btm_content flex gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Ride high with our programs committed to promote
                                                        your talent</span>
                                                    <span className="text-[#3E4048] text-sm">Make yourself stand out by working on our highly
                                                        prestigious projects.</span>
                                                </div>
                                            </li>
                                            <li className="btm_content flex gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Make yourself inevitable to our top clients</span>
                                                    <span className="text-[#3E4048] text-sm">Cement your relationship with our finest clients by
                                                        working on different projects of them
                                                        repeatedly.</span>
                                                </div>
                                            </li>
                                        </ul>

                                        <div className="circle absolute -left-[3.9%] md:-left-[2%] 3xl:-left-[1.5%] w-6 h-6 border-[4px] border-[#BBBDC8] rounded-full bg-white"></div>
                                    </li>
                                    <li className="relative pl-8 md:pl-16 pb-16 border-l border-[#BBBDC8] flex flex-col gap-6">
                                        <div className="heading flex flex-col gap-4">
                                            <div className="title">
                                                <span className="text-[#17181C] text-3xl font-bold">Start Working</span>
                                            </div>
                                            <div className="subtitle flex flex-col gap-4">
                                                <p className="text-[#3E4048]">
                                                    When the client determines if you are right for the
                                                    job, you can get hired and start working.
                                                </p>
                                                <p className="text-[#3E4048]">
                                                    TalFoundry’s digital nature gives you the freedom to
                                                    regulate time, place and the way you plan for a work.
                                                    For every project, you can access an online workspace.
                                                    The workplace will be shared between you and your
                                                    client. Other features include:
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="flex flex-col gap-4">
                                            <li className="btm_content flex gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Secure exchange of digital data</span>
                                                    <span className="text-[#3E4048] text-sm">You can send and receive files without any security
                                                        hassles</span>
                                                </div>
                                            </li>
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Real-Time feedback sharing option</span>
                                                    <span className="text-[#3E4048] text-sm">Getting real-time feedback from your clients
                                                        enhances your productivity and helps you deliver
                                                        better. To get real-time feedback, communicate with
                                                        your clients through text, chat or video</span>
                                                </div>
                                            </li>
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Nothing Succeeds Like Success</span>
                                                    <span className="text-[#3E4048] text-sm">Work on the go via TalFoundry’s unique mobile app:
                                                        Access the state-of-the-art-characteristics of our
                                                        mobile app any time, anywhere by just downloading it
                                                        to your mobile phones.</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="circle absolute -left-[3.9%] md:-left-[2%] 3xl:-left-[1.5%] w-6 h-6 border-[4px] border-[#BBBDC8] rounded-full bg-white"></div>
                                    </li>
                                    <li className="relative pl-8 md:pl-16 border-l border-[#BBBDC8] flex flex-col gap-6">
                                        <div className="heading flex flex-col gap-4">
                                            <div className="title">
                                                <span className="text-[#17181C] text-3xl font-bold">Get Paid</span>
                                            </div>
                                            <div className="subtitle flex flex-col gap-4">
                                                <p className="text-[#3E4048]">
                                                    Our payment protection policy covers all projects. It
                                                    ensures you get paid for all your completed projects
                                                    without any hassles through the freelancing website.
                                                    Our streamlined processes enable easy invoicing and
                                                    prompt payments
                                                </p>
                                                <p className="text-[#3E4048]">
                                                    Our streamlined processes enable easy invoicing and
                                                    prompt payments
                                                </p>
                                            </div>
                                        </div>
                                        <ul className="flex flex-col gap-4">
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Hourly and fixed-price projects</span>
                                                    <span className="text-[#3E4048] text-sm">Present your timesheets through TalFoundry in case
                                                        of hourly projects. Fixed-price jobs will be
                                                        remunerated according to your set milestones and
                                                        payment will be released through our escrow
                                                        account.</span>
                                                </div>
                                            </li>
                                            <li className="btm_content flex gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Multiple payment options</span>
                                                    <span className="text-[#3E4048] text-sm">Suit yourself with the best payment methods on
                                                        offer among PayPal, Wire transfer, direct deposit
                                                        and more.</span>
                                                </div>
                                            </li>
                                            <li className="btm_content grid grid-flow-col gap-2">
                                                <div className="btm_icon">
                                                    <CheckCircleIcon className='size-6 fill-[#435ff5] stroke-[#fff]' />
                                                </div>
                                                <div className="btm_txt flex flex-col gap-1">
                                                    <span className="text-base text-[#17181C] font-semibold">Service fees for Cloud Experts</span>
                                                    <span className="text-[#3E4048] text-sm">The take-home earnings for all Cloud Experts at
                                                        TalFoundry is fixed. We charge a flat 5% for all
                                                        bills of Cloud Experts with the clients</span>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="circle absolute -left-[3.9%] md:-left-[2%] 3xl:-left-[1.5%] w-6 h-6 border-[4px] border-[#BBBDC8] rounded-full bg-white"></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#ECEFFD]">
                <div className="default_container max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="ready py-28 flex flex-col items-center gap-10">
                        <div className="heading text-center">
                            <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#17181C] font-semibold">Ready to find a
                                <span id="clientTxt" className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%"> {activeTab === 'Client' ? 'Cloud Expert?' : 'get hired?'}</span>
                            </span>
                        </div>
                        <div className="btn flex justify-center">
                            <button id="jobBtn" className="px-6 py-3 rounded-full border font-semibold text-[#ECF9FD] text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr">
                                {activeTab === 'Client' ? "Post a Job" : "Apply as a Cloud Expert"}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HowItWorks