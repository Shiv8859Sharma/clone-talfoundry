import '../service.css'
import AdvisoryHeroSection from "../advisoryHeroSection"
import centerAwsAdvisoryImage from '@/assets/svg/center-aws-advisory.svg'
import aws1 from '@/assets/svg/AWS-Migration.svg'
import aws2 from '@/assets/svg/AWS-Storage.svg'
import aws3 from '@/assets/svg/AWS_3.svg'
import aws4 from '@/assets/svg/AWS_4.svg'
import aws5 from '@/assets/svg/AWS_5.svg'
import aws6 from '@/assets/svg/AWS_6.svg'
import aws7 from '@/assets/svg/AWS_7.svg'
import aws8 from '@/assets/svg/AWS_8.svg'
import aws9 from '@/assets/svg/AWS_9.svg'
import aws10 from '@/assets/svg/AWS_10.svg'
import globeWithCursorIcon from '@/assets/svg/globe-with-cursor.svg'
import ideaBrainIcon from '@/assets/svg/idea-brain.svg'
import presentationIcon from '@/assets/svg/presentation.svg'
import cloudWithLockIcon from '@/assets/svg/cloud-with-lock-icon.svg'
import rocketIcon from '@/assets/svg/rocket.svg'
import customerServiceIcon from '@/assets/svg/customer-service.svg'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import BookACallChatLayout from '@/layouts/bookAcallChatLayout'
import SvgIcon from "@/assets/svg"
import React, { useId } from 'react'

let awsAdvisoryCircleData = [
    {
        image: aws1,
        className: 'top-[6%] left-[44%]',
        text: 'Migration'
    },
    {
        image: aws2,
        className: 'top-[16%] right-[18%]',
        text: 'Storage'
    },
    {
        image: aws3,
        className: 'top-[32%] right-[5%]',
        text: 'Serverless'
    },
    {
        image: aws4,
        className: 'bottom-[32%] right-[5%]',
        text: 'Containers'
    },
    {
        image: aws5,
        className: 'bottom-[16%] right-[18%]',
        text: 'Management'
    },
    {
        image: aws6,
        className: 'bottom-[6%] left-[42%]',
        text: 'Networking'
    },
    {
        image: aws7,
        className: 'bottom-[16%] left-[18%]',
        text: 'Security'
    },
    {
        image: aws8,
        className: 'bottom-[32%] left-[5%]',
        text: 'Analytics'
    },
    {
        image: aws9,
        className: 'top-[32%] left-[5%]',
        text: 'Database'
    },
    {
        image: aws10,
        className: 'top-[14%] left-[20%]',
        text: 'Compute'
    },
]
function AwsAdvisory(){
    console.log("this is  AwsAdvisory");
    return (
        <main>
            <AdvisoryHeroSection
                heading='Begin your Digital Transformation Moving to the AWS Cloud!'
                sectionClass='bg-gradient-to-bl from-[#00C2B4] to-[#3955C8]'
                headingClass='text-[32px] leading-[42px] md:text-4xl lg:text-5xl lg:leading-[68px] 3xl:text-6xl 3xl:leading-[74px] text-[#F1F3FE] font-semibold md:inline-block'
                buttonClass='text-[#131418] bg-[#FFB442]'
                centerImage={centerAwsAdvisoryImage}
                AdvisoryCircleList={awsAdvisoryCircleData}
                type='aws'
            />
            <section className="services_section overflow-hidden bg-[#FBFBFB]">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="services_content py-16 md:py-20 lg:py-24 xl:py-28 flex items-center gap-16 flex flex-col items-center">
                        <div className="content_top">
                            <div className="heading max-w-3xl flex justify-center">
                                <span className="text-3xl leading-[40px] text-[#17181C] font-semibold text-center">Our AWS Advisory Services have experienced professionals
                                    migrate, deploy, monitor and optimize AWS Services for your
                                    organization</span>
                            </div>
                        </div>

                        <ul className="w-full flex justify-center gap-x-10 gap-y-6 flex-wrap lg:max-w-[75%] xl:max-w-[75%] 3xl:max-w-[62%]">
                            <ServicesSectionLi
                                liContainerClass='from-[#FA7398] to-[#FDD14C]'
                                image={<SvgIcon name='AWS-Migration' />}
                                text='Security'
                            />
                            <ServicesSectionLi
                                liContainerClass='from-[#A38DD1] to-[#F2BDE8]'
                                image={<SvgIcon name='AWS_9' />}
                                text='Database'
                            />
                            <ServicesSectionLi
                                liContainerClass='from-[#8FD3F3] to-[#85F6B7]'
                                image={<SvgIcon name='AWS-Storage' />}
                                text='Storage'
                            />
                            {/* <ServicesSectionLi
                                liContainerClass='from-[#A38DD1] to-[#F2BDE8]'
                                image={'AWS_8'}
                                text='Analytics'
                            />
                            <ServicesSectionLi
                                liContainerClass='from-[#FA7398] to-[#FDD14C]'
                                image={'AWS_10'}
                                text='Compute'
                            />
                            <ServicesSectionLi
                                liContainerClass='from-[#8FD3F3] to-[#85F6B7]'
                                image={'AWS_1'}
                                text='Migration'
                            />
                            <ServicesSectionLi
                                liContainerClass='from-[#AAECEA] to-[#F7D8E3]'
                                image={'AWS_3'}
                                text='Serverless'
                            />
                            <ServicesSectionLi
                                liContainerClass='from-[#FA7398] to-[#FDD14C]'
                                image={'AWS_4'}
                                text='Containers'
                            />
                            <ServicesSectionLi
                                liContainerClass='from-[#DEC3FC] to-[#97C5FC]'
                                image={'AWS_6'}
                                text='Networking'
                            />
                            <ServicesSectionLi
                                liContainerClass='from-[#AAECEA] to-[#F7D8E3]'
                                image={'AWS_5'}
                                text='Management'
                            /> */}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="web_app_section bg-[#F5F5F5]">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="web_app_content py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col xl:flex-row items-center gap-8 xl:gap-20">
                        <div className="web_left xl:w-[60%] pr-5 flex gap-2 flex-wrap">
                            <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#17181C] font-semibold">Build your Web Application with Powerful Amazon Web Services
                            </span>
                        </div>
                        <div className="web_right w-full flex flex-col gap-4">
                            <p>
                                Talfoundry is a registered AWS Consulting Partner offering AWS
                                consulting services with certified engineers and architects to
                                help you with your migration projects. We help Startups, SMB,
                                and Enterprises to modernize web applications adopting the AWS
                                cloud by re-engineering current infrastructures into highly
                                resilient and cloud-native environments. We embrace cutting-edge
                                AWS Cloud practices including AWS Well-Architected framework,
                                DevOps Agile initiatives, and PCI/HIPAA Guidelines.
                            </p>
                            <p>
                                Our certified developers build secure, scalable and high
                                performance applications. We deliver innovative solutions and
                                transform complex experiences into products that customers love.
                                We provide ongoing support to create, deliver strategies and
                                manage solutions to maximize your investment through AWS
                                services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="web_services_section bg-[#1E2832]">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="services_content py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col gap-20">
                        <div className="services_top flex flex-col items-center gap-4">
                            <div className="heading">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#FFFFFF] font-semibold flex flex-col lg:flex-row items-center">Amazon Web Services-Our Offerings
                                </span>
                            </div>
                            <div className="subHeading max-w-4xl">
                                <p className="text-[#FFFFFF] text-center">
                                    Empowering digital businesses with secure, robust and
                                    innovation-led cloud computing solutions through AWS
                                    development. Leverage end-to-end cloud platform development
                                    services for enhancing productivity
                                </p>
                            </div>
                        </div>
                        <ul className="services_btm grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-16">
                            <WebServicesSectionLi
                                icon={<SvgIcon name="consultation" className='stroke-[#fff] fill-[#fff]' />}
                                heading='AWS Consulting'
                                description='Comprehensive analysis of on-premise business processes to detect tech-related gaps and understanding risk of migrating existing digital process through amazon web services consulting.'
                            />
                            <WebServicesSectionLi
                                icon={<SvgIcon name="computer" className='stroke-[#fff] fill-[#fff]' />}
                                heading='AWS App Development'
                                description='Craft high-performing, enterprise-grade and secure applications using smart AWS app development tools or upscale legacy apps to address business concerns and maximize profitability.'
                            />
                            <WebServicesSectionLi
                                icon={<SvgIcon name="computer" className='stroke-[#fff] fill-[#fff]' />}
                                heading='AWS Consulting'
                                description='Migrate your on-premise business process to cloud with our cloud computing team using AWS tech stacks to build agile and secure digital solutions for a seamless transition.'
                            />


                            <WebServicesSectionLi
                                icon={<SvgIcon name="cloud-with-underscore" className='stroke-[#fff] fill-[#fff]' />}
                                heading='Cloud App Development'
                                description='Leverage optimised platform solutions built by experience-led cloud app developers for complex businesses to realise the benefits of moving on-premise businesses to cloud.'
                            />
                            <WebServicesSectionLi
                                icon={<SvgIcon name="infinite-arrow" className='stroke-[#fff] fill-[#fff]' />}
                                heading='DevOps'
                                description='Dive into your cloud migration process and harness the power of amazon cloud development with unmatched DevOps skills for continuous delivery and feedback integration.'
                            />
                            <WebServicesSectionLi
                                icon={<SvgIcon name="heart-Group" className='stroke-[#fff] fill-[#fff]' />}
                                heading='Monitoring, Mgt & Support'
                                description='Seamlessly monitor your cloud space; manage workflow, sharing and collaboration with cloud stored data and receive round-the-clock assistance with cloud framework.'
                            />
                        </ul>
                    </div>
                </div>
            </section>
            <section className="easy_section bg-[#F5F5F5]">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="easy_content py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col gap-8">
                        <div className="easy_top">
                            <div className="heading">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#17181C] font-semibold">Getting started is Easy
                                </span>
                            </div>
                        </div>

                        <ul className="easy_btm grid gap-4 md:grid-cols-3 xl:gap-16">
                            <EasySectionLi
                                number='1'
                                title='First, we evaluate'
                                description='We evaluate your AWS needs and propose engineers to join your team'
                            />
                            <EasySectionLi
                                number='2'
                                title='Second, we onboard'
                                description='We onboard your chosen Talfoundry AWS engineers to your team.'
                            />
                            <EasySectionLi
                                number='3'
                                title='Third, we oversee'
                                description='We oversee your Talfoundry engineers and support you every step of the way'
                            />
                        </ul>
                    </div>
                </div>
            </section>
            <section className="AWS_manage_section">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="aws_manage_content py-20 flex flex-col gap-16">
                        <div className="content_top">
                            <div className="heading max-w-2xl">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#17181C] font-semibold">How do we help you with our AWS Managed Services?
                                </span>
                            </div>
                        </div>

                        <ul className="content_btm max-w-2xl md:max-w-full xl:max-w-2xl 3xl:max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 3xl:grid-cols-3 gap-10">
                            <AwsManageSectionLi
                                image={globeWithCursorIcon}
                                description='We support multiple technology stacks for different applications and also Auto Scaling, Automation and Disaster Recovery. More availability zones and redundancy.'
                            />
                            <AwsManageSectionLi
                                image={ideaBrainIcon}
                                description='We provide you with in-depth knowledge about AWS services, helping you to design, implement, deploy and maintain any application on AWS.'
                            />
                            <AwsManageSectionLi
                                image={presentationIcon}
                                description='We implement AWS best practices for any kind of environment we create.'
                            />
                            <AwsManageSectionLi
                                image={cloudWithLockIcon}
                                description='We follow the best AWS practices for security, optimization and high- availability applications.'
                            />
                            <AwsManageSectionLi
                                image={rocketIcon}
                                description='We provide assistance to migrate and deploy any application on AWS.'
                            />
                            <AwsManageSectionLi
                                image={customerServiceIcon}
                                description='24/7 World Class Support'
                            />

                        </ul>
                    </div>
                </div>
            </section>

            <section className="migration_section bg-[#232F3E]">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="migration_content py-16 md:py-20 lg:py-24 xl:py-28 gap-16 flex flex-col items-center">
                        <div className="content_top flex flex-col items-center gap-4">
                            <div className="heading flex justify-center">
                                <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#FFFFFF] font-semibold text-center">Our AWS Cloud Migration Program
                                </span>
                            </div>

                            <div className="subHeading max-w-4xl">
                                <p className="text-[#FFFFFF] text-center">
                                    Program to Migrate to AWS and accelerate your Cloud
                                    transformation
                                </p>
                            </div>
                        </div>

                        <ul className="content_btm lg:max-w-2xl xl:max-w-full 3xl:max-w-7xl grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                            <MigrationSectionCard
                                title='Assessment & Architecture'
                                list={['Cloud Assessment', 'AWS Architecture Design', 'Migration Strategy']}
                            />
                            <MigrationSectionCard
                                title='Build Web Platform'
                                list={['Build AWS Infrastructure', 'Migrate Application Data', 'Transform your cloud-native application']}
                            />
                            <MigrationSectionCard
                                title='Innovation & Automation (DevOps)'
                                list={['Implement deployment processes, CI & CD', 'AWS Auto Scaling & Resiliency', 'AWS DevOps automated services', 'Docker & Microservices']}
                            />
                            <MigrationSectionCard
                                title='AWS Managed Services'
                                list={['Continuous Security Compliance', 'Maintain Deployments & Releases', 'AWS Cost Optimization', 'AWS Troubleshooting & Support']}
                            />
                        </ul>
                    </div>
                </div>
            </section>
            <section className="adoption_section bg-[#F5F5F5]">
                <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                    <div className="adoption_content py-16 md:py-20 lg:py-24 xl:py-28 flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-20">
                        <div className="adoption_left lg:w-[60%] pr-5 flex gap-2 flex-wrap">
                            <span className="text-3xl lg:text-4xl 3xl:text-5xl 3xl:leading-[58px] text-[#17181C] font-semibold">The Amazon Web Services Adoption Framework</span>
                        </div>

                        <div className="adoption_right w-full flex flex-col gap-4">
                            <p>
                                To guide your journey to the cloud, AWS Professional Services
                                developed the AWS Cloud Adoption Framework (AWS CAF). The AWS
                                CAF incorporates best practices and guidance learned through
                                hundreds of in-depth customer engagements into a comprehensive
                                framework for implementing cloud computing across your
                                organization.
                            </p>
                            <p>
                                The AWS CAF breaks down the process of planning your cloud
                                migration into six manageable areas of focus called
                                Perspectives. In general, the Business, People, and Governance
                                Perspectives focus on business capabilities, and the Platform,
                                Security, and Operations Perspectives focus on technical
                                capabilities. These Perspectives help you identify gaps in
                                skills, processes, and dependencies, then capture them into
                                templates. The templates are the basis for creating an action
                                plan to help guide change management efforts throughout your
                                journey to the cloud.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing_section bg-[#FBFBFB]">
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

                                <button className="px-6 w-full py-3 font-semibold text-[#17181C] text-sm md:text-base rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#FF9900] lg:hover:text-[#ECEFFD] border-2 border-[#FF9900]">
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

                            <div className="pricing_box relative flex flex-col gap-6 p-8 lg:py-12 lg:px-4 shadow-[0px_10px_32px_#040C2F0D] rounded-3xl bg-[#0073BB]">
                                <div className="box_top flex flex-col gap-3 md:gap-4">
                                    <span className="text-2xl md:text-3xl text-[#FFFFFF] font-semibold">Full-time 🚀</span>
                                    <span className="text-[#FFFFFF] font-semibold text-3xl xl:text-4xl 3xl:text-5xl">From $40<span className="font-medium text-sm">/Per Hour</span></span>
                                    <span className="text-[#FFFFFF] font-medium text-sm">40 HOURS WEEKLY</span>
                                </div>
                                <button className="px-6 w-full py-3 font-semibold text-[#FFFFFF] text-sm md:text-base rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#FFFFFF] lg:hover:text-[#17181C] border-2 border-[#FFFFFF]">
                                    Purchase Now
                                </button>
                                <div className="box_btm flex flex-col gap-2">
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            {/* <img src="./assets/aws_advisory/icon_white.svg" alt="icon"> */}
                                            <CheckCircleIcon className='size-6 fill-[#fff] stroke-[#1e73bb]' />

                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#FFFFFF] font-semibold">Increased Savings</span>
                                            <span className="text-[#F1F3FE] text-sm">A full-time developer working only with you, at our
                                                lowest hourly rate.</span>
                                        </div>
                                    </div>
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            <CheckCircleIcon className='size-6 fill-[#fff] stroke-[#1e73bb]' />
                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#FFFFFF] font-semibold">Maximised stability</span>
                                            <span className="text-[#F1F3FE] text-sm">Benefit from a dedicated resource, available only for
                                                your engagement.</span>
                                        </div>
                                    </div>
                                    <div className="btm_content grid grid-flow-col gap-2">
                                        <div className="btm_icon">
                                            <CheckCircleIcon className='size-6 fill-[#fff] stroke-[#1e73bb]' />
                                        </div>
                                        <div className="btm_txt flex flex-col gap-1">
                                            <span className="text-base text-[#FFFFFF] font-semibold">Stability for your resource</span>
                                            <span className="text-[#F1F3FE] text-sm">A steady and stable workflow results in more effective
                                                work getting done.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0">
                                    {/* <img src="./assets/homepage/dot_circle.webp" alt="dot_circle"> */}
                                </div>
                            </div>

                            <div className="pricing_box">
                                <div className="last_box flex flex-col gap-6 py-12 px-10 lg:px-4 shadow-[0px_10px_32px_#040C2F0D] rounded-3xl">
                                    <div className="box_top flex flex-col gap-3 md:gap-4">
                                        <span className="text-[28px] md:text-3xl text-[#17181C] font-semibold">Need something more flexible?</span>

                                        <span className="text-[#3E4048] text-sm">We have plans from 1/hour a day. Contact us for more
                                            details.</span>
                                    </div>
                                    <button className="px-6 w-full py-3 font-semibold text-[#17181C] text-sm md:text-base rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#FF9900] lg:hover:text-[#ECEFFD] border-2 border-[#FF9900]">
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
                formBgColor='bg-[#FFFFFF]'
                listIconFillColor='#539FE5'
                floatingImageGradientColor='bg-[#0073BB66]'
                btnStyle='bg-[#FF9900] text-[#232F3E] '
            />
        </main>
    )
}

export default AwsAdvisory;

const ServicesSectionLi = (props) => {
    let { liContainerClass = '', image = ' ', text = '' } = props
    let id = useId()
    return (
        <li key={`${image}_${text}_${id}`} className={`rounded-full bg-gradient-to-r ${liContainerClass} shadow-[0_0_35px_0_#AEAEAE03] p-[2px]`}>
            <div className="content flex items-center gap-2 p-3 bg-[#FBFBFB] rounded-full">
                <div className="icon rounded-full overflow-hidden">
                    {/* <img src={image} alt="AWS_image" /> */}
                    {image}
                </div>
                <span className="text-[#3E4048] text-xs font-semibold">{text}</span>
            </div>
        </li>
    )
}

const WebServicesSectionLi = (props) => {
    let { image = '', heading = '', description = '', icon = '' } = props
    return <li className="btm_box flex flex-col gap-6 lg:px-6 lg:py-8 xl:px-8 xl:py-10 rounded-[14px] transition-all duration-300 lg:hover:shadow-[0px_6px_50px_#137DFF1C] lg:hover:bg-[#FFFFFF33]">
        <div className="box_icon">
            {
                icon ? icon : <img src={image} alt="group" />
            }

        </div>
        <div className="box_text flex flex-col gap-2">
            <div className="heading">
                <span className="text-[#539FE5] text-3xl leading-[40px] font-bold">{heading}</span>
            </div>
            <div className="subHeading">
                <p className="text-[#FFFFFF]">
                    {description}
                </p>
            </div>
        </div>
    </li>
}

const EasySectionLi = (props) => {
    let { number = '', title = '', description = '' } = props
    return (
        <li className="btm_box border border-[#979797] bg-[#FFFFFF] flex flex-col gap-6 p-6 xl:px-8 xl:py-10">
            <div className="box_icon w-[60px] h-[60px] rounded-full flex justify-center items-center border-2 border-[#000000]">
                <span className="text-[#0972D3] text-2xl font-bold">{number}</span>
            </div>
            <div className="box_text flex flex-col gap-2">
                <div className="heading">
                    <span className="text-[#0972D3] text-xl lg:text-3xl leading-[40px] font-bold">{title}</span>
                </div>
                <div className="subHeading">
                    <p className="text-[#3E4048]">
                        {description}
                    </p>
                </div>
            </div>
        </li>
    )
}

const AwsManageSectionLi = (props) => {
    let { image = '', description = '' } = props
    return <li className="btm_box flex flex-col gap-4">
        <div className="box_icon">
            <img src={image} alt={`aws manage image`} />
        </div>
        <div className="btm_txt">
            <p className="text-[#3E4048] text-base">
                {description}
            </p>
        </div>
    </li>
}

const MigrationSectionCard = (props) => {
    let { title = '', list = [] } = props
    return (
        <li className="px-6 py-10 border border-[#FBFBFB] flex flex-col gap-4">
            <div className="title">
                <span className="text-[#539FE5] text-2xl font-bold">{title}</span>
            </div>
            <ul className="content flex flex-col gap-2.5">
                {
                    list.map((text, index) => {
                        return (
                            <li className="flex items-center gap-3" key={`${index}_migration_nest_list`}>
                                <div className="content_icon" >
                                    <CheckCircleIcon className='size-6 fill-[#539FE5] stroke-[#fff]' />

                                </div>
                                <div className="content_txt">
                                    <span className="text-[#FFFFFF]">{text}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
}