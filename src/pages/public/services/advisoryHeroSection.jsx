import Image from "../../../components/ImageElement"
import SvgIcon from "@/assets/svg"

const AdvisoryHeroSection = (props) => {
    let { type = '', heading = '', sectionClass = '', headingClass = '', buttonClass = '', centerImage = '', AdvisoryCircleList = [] } = props
    
    return (
        <section className={`hero-section overflow-hidden relative ${sectionClass}`}>
            <div className="default_container relative max-w-xs mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                <div className="aws_content relative py-32 md:py-40 flex flex-col lg:flex-row items-center gap-10 md:gap-8 lg:gap-20 xl:gap-24 3xl:gap-24">
                    <div className="content_left flex flex-col items-center gap-6 xl:gap-8">
                        <div className="aws_heading flex flex-col gap-6 xl:gap-10 xl:max-w-4xl 3xl:max-w-5xl">
                            <h1 className={`${headingClass}`}>
                                {heading}
                            </h1>

                            <div className="btn">
                                <button className={`px-6 py-3 rounded-full font-semibold text-base transition-all ${buttonClass}`}>
                                    Let’s talk
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="content_right w-full flex flex-col items-center">
                        <div className={`w-full h-[450px] lg:w-[380px] lg:h-[350px] xl:w-[580px] xl:h-[550px] ${type === 'aws' ? 'bg-[url(@/assets/svg/grid_aws.svg)]' :''}  bg-cover bg-no-repeat flex justify-center items-center`}>
                            <div className="grid_circle lg:w-[325px] lg:h-[325px] xl:w-[425px] xl:h-[425px] flex justify-center items-center relative">
                                <div className="hero_inner_circle w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[425px] md:h-[425px] lg:w-[330px] lg:h-[330px] xl:w-[425px] xl:h-[425px] bg-white rounded-full flex justify-center items-center relative">
                                    <div className="inner_circle max-w-[50%] xl:max-w-full">
                                        <Image className="w-full h-full" src={centerImage} type='profile' alt="" />
                                    </div>
                                    <ul className="">
                                        {
                                            AdvisoryCircleList.map((advisory, index) => (
                                                <li key={`${index}_${advisory?.text}`} className={`flex flex-col items-center absolute ${advisory?.className}`}>
                                                    <div className="icon w-8 h-8 rounded-full overflow-hidden">
                                                        {
                                                            advisory?.icon ? <SvgIcon name={advisory?.icon} folderName={advisory?.folderName} className='rounded-full' height='100%' width='100%' /> : <img src={advisory?.image} alt="AWS_1" />
                                                        }
                                                       
                                                    </div>
                                                    <div className="txt">
                                                        <span className="text-[#3E4048] text-xs font-semibold">{advisory?.text}</span>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdvisoryHeroSection