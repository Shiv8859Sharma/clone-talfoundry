import Image from "@/components/ImageElement"
import infinityIcon from '@/assets/webp/infinity.webp'
import timerIcon from '@/assets/webp/timer.webp'
import longTermIcon from '@/assets/webp/long-term.webp'

const ProjectDurationSection = () => {
    return (
        <section className="project_duration_section bg-[#FBF7FD]">
            <div className="default_container h-full max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="project_content py-16 md:w-1/2 lg:w-auto md:mx-auto md:py-20 lg:py-24 flex flex-col gap-6 sm:gap-8 md:gap-y-14 lg:grid lg:grid-cols-3">
                    <ProjectCard
                        icon={timerIcon}
                        title={'Short-Term'}
                        description={'Find highly specialized Cloud Experts for your short or long term projects. We ask all the right questions to match you with the right talent.'}
                    />
                    <ProjectCard
                        icon={longTermIcon}
                        title={'Full-Term'}
                        description={'Scale your team with a skilled resource. Choose from over 1000 cloud experts. We offer flexible engagements from hourly to full-time.'}
                    />
                    <ProjectCard
                        icon={infinityIcon}
                        title={'Recurring Project'}
                        description={'Build a pool of diverse top developers, engineers, programmers, coders, architects, & consultants for your mission-critical projects.'}
                    />
                </div>
            </div>
        </section>
    )
}

export default ProjectDurationSection


function ProjectCard(props) {
    let { icon, title, description } = props
    return (
        <div className="project_box flex flex-col gap-4 md:gap-8">
            <div className="box_icon w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 p-3 rounded-lg bg-[#4361EE]">
                <Image src={icon} alt='' />
            </div>
            <div className="box_txt flex flex-col gap-3">
                <span className="text-[#17181C] font-semibold text-lg lg:text-3xl">{title}</span>
                <span className="text-[#3E4048] text-sm md:text-base xl:max-w-[90%] 3xl:max-w-[80%]">{description}</span>
            </div>
        </div>
    )
}