import { useState } from 'react';
import { Tab } from '@headlessui/react';
import Image from '@/components/ImageElement';
import awsImage from '@/assets/webp/aws_black_circle.webp'
import microsoftImage from '@/assets/commonAssets/microsoft.svg'
import salesforceImage from '@/assets/commonAssets/salesforce.svg'
import oracleImage from '@/assets/commonAssets/oracle.svg'
import googleCloudImage from '@/assets/commonAssets/googleCloud.svg'

let tabs = ['Explore by Role', "Explore by Skill"]

let roles = [
    {
        image: awsImage,
        title: 'AWS Security Engineer'
    },
    {
        image: awsImage,
        title: 'AWS Data Scientist'
    },
    {
        image: awsImage,
        title: 'AWS Data Scientist'
    },
    {
        image: salesforceImage,
        title: 'Salesforce App Builder'
    },
    {
        image: salesforceImage,
        title: 'Salesforce Data Analyst'
    },
    {
        image: salesforceImage,
        title: 'Salesforce Administrator'
    },
    {
        image: oracleImage,
        title: 'Oracle Associate'
    },
    {
        image: oracleImage,
        title: 'Oracle Professionale'
    },
    {
        image: oracleImage,
        title: 'Oracle DB Security'
    },
    {
        image: googleCloudImage,
        title: 'Google Cloud Engineer'
    },
    {
        image: googleCloudImage,
        title: 'Google Cloud Engineer'
    },
    {
        image: googleCloudImage,
        title: 'Google Consultant'
    }
]
let skills = [
    {
        image: awsImage,
        title: 'AWS Amplify'
    },
    {
        image: awsImage,
        title: 'AWS Artifact'
    },
    {
        image: awsImage,
        title: 'AWS Cloud9'
    },
    {
        image: salesforceImage,
        title: 'Salesforce CPQ'
    },
    {
        image: salesforceImage,
        title: 'Salesforce Communities'
    },
    {
        image: salesforceImage,
        title: 'Salesforce Platform'
    },
    {
        image: oracleImage,
        title: 'Oracle'
    },
    {
        image: oracleImage,
        title: 'Oracle Configurator'
    },
    {
        image: oracleImage,
        title: 'Oracle Engineering'
    },
    {
        image: googleCloudImage,
        title: 'Google Cloud Blog'
    },
    {
        image: googleCloudImage,
        title: 'Google Cloud Certifications'
    },
    {
        image: googleCloudImage,
        title: 'Google Cloud Training'
    }
]
function ExpertsSection() {

    const [activeTab, setActiveTab] = useState('Explore by Role');

    const handleTabChange = (name) => {
        setActiveTab('')
        setTimeout(() => {
            setActiveTab(name)
        }, 100)
    }

    return (
        <section className="experts_section">
            <div className="default_container h-full max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="expert_content overflow-hidden relative py-16 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                    <Tab.Group>
                        <div className="expert_top flex flex-col justify-between gap-4 md:items-center lg:gap-6">
                            <div className="exp_left flex flex-col gap-2 lg:flex-row">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl text-[#17181C] font-semibold">
                                    Explore our
                                </span>
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl font-semibold word text-transparent bg-clip-text bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4%">
                                    Cloud Experts
                                </span>
                            </div>
                            <Tab.List className="exp_right sm:max-w-[85%] sm:mx-auto md:mx-0 p-4 rounded-full bg-[#F8F3FC] 3xl:w-[26%] flex items-center justify-between xl:w-[35%]">
                                {tabs.map((tab) => (
                                    <div
                                        key={`${tab}_tab`}
                                        className={`rounded-full p-0.5 transition-all duration-300 ease-in-out ${tab === activeTab ? "button-linear-active" : ''}`}>
                                        <Tab
                                            onClick={() => handleTabChange(tab)}
                                            className={'px-5 py-3 md:px-6 md:py-3 font-semibold text-[#17181C] text-sm md:text-base bg-[#F8F3FC] rounded-full focus:outline-none'}
                                        >
                                            {tab}
                                        </Tab>
                                    </div>
                                ))}
                            </Tab.List>
                        </div>
                        <div className={`expert_btm flex items-center w-full transition-all duration-300 ease-in-out ${activeTab === 'Explore by Role' ? 'translate-x-0' : '-translate-x-full'}`}>
                            {tabs.map((tab) => (
                                <div key={`container_${tab}_expert`} className="flex flex-col gap-4 lg:flex-row w-full flex-shrink-0 items-center">
                                    <div className="expt_left h-full p-6 bg-[#F1E7F8] rounded-3xl flex flex-col gap-4 md:h-auto md:p-10 lg:flex-row lg:items-center lg:w-2/5">
                                        <div className="left_l grid grid-cols-3 items-center gap-4 md:flex md:justify-center lg:flex-col">
                                            <div className="left_box py-4 md:w-[110px] md:h-[110px] rounded-xl bg-white flex flex-col justify-center items-center">
                                                {/* <img src={oracleImg} style={{ width: '37px' }} alt="oracle" /> */}
                                                <Image src={oracleImage} style={{ width: '37px' }} alt="oracle" />
                                                <span className="text-sm text-[#17181C] font-semibold md:text-base">
                                                    Oracle
                                                </span>
                                            </div>
                                            <div className="left_box py-4 md:w-[110px] md:h-[110px] rounded-xl bg-white flex flex-col justify-center items-center">
                                                <Image src={awsImage} style={{ width: '37px' }} alt="amazon" />
                                                <span className="text-sm md:text-base text-[#17181C] font-semibold">
                                                    Amazon
                                                </span>
                                            </div>
                                            <div className="left_box py-4 md:w-[110px] md:h-[110px] rounded-xl bg-white flex flex-col justify-center items-center">
                                                <Image src={googleCloudImage} style={{ width: '37px' }} alt="google" />
                                                <span className="text-sm md:text-base text-[#17181C] font-semibold">
                                                    Google
                                                </span>
                                            </div>
                                        </div>
                                        <div className="left_r grid grid-cols-3 items-center gap-4 md:flex md:justify-center lg:flex-col">
                                            <div className="left_box py-4 md:w-[110px] md:h-[110px] rounded-xl bg-white flex flex-col justify-center items-center">
                                                <Image src={salesforceImage} style={{ width: '37px' }} alt="salesforce" />
                                                <span className="text-sm md:text-basetext-[#17181C] font-semibold">
                                                    Salesforce
                                                </span>
                                            </div>
                                            <div className="left_box py-4 md:w-[110px] md:h-[110px] rounded-xl bg-white flex flex-col justify-center items-center">
                                                <Image src={microsoftImage} style={{ width: '37px' }} alt="microsoft" />
                                                <span className="text-sm md:text-basetext-[#17181C] font-semibold">
                                                    Microsoft
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="expt_right h-full py-6 px-3 bg-[#F1E7F8] rounded-3xl flex flex-col items-center justify-center gap-8 3xl:px-8">
                                        <ul className="flex flex-wrap items-center gap-4 md:justify-center md:gap-6">
                                            {[...(tab === 'Explore by Role' ? roles : skills)].map((item, index) => {
                                                return (
                                                    <li key={`tab-title_${item.title}_${index}`} className="px-4 py-2 bg-white rounded-full flex items-center gap-2">
                                                        <Image src={item?.image} style={{ width: '37px' }} alt="amazon" />
                                                        <span className="text-[#17181C] font-semibold text-xs md:text-sm">
                                                            {item?.title}
                                                        </span>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        <div className="see_more">
                                            <button className="text-[#4361EE] font-semibold text-sm md:text-base">
                                                + See more {tab === 'Explore by Role' ? 'Roles' : "Skills"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab.Group>
                </div>
            </div>
        </section>
    );
}

export default ExpertsSection