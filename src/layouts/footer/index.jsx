import { useSelector } from "react-redux"
import logoSvg from '@/assets/commonAssets/logo.svg'
import Image from "@/components/ImageElement"
import { Link } from "react-router-dom"
import twitter from '@/assets/webp/twitter.webp'
import fb from '@/assets/webp/fb.webp'
import linkedin from '@/assets/webp/linkedin.webp'
import insta from '@/assets/webp/insta.webp'

let socialImages = [twitter, fb, linkedin, insta]
const Footer = () => {
    const { role } = useSelector((state) => state.auth)

    return (

        role ? ""
            : <section id="footer">
                <footer className="footer_section bg-[#F5F5F5]">
                    <div className="default_container h-full max-w-xs mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 3xl:max-w-[1440px]">
                        <div className="footer py-16 md:py-20 lg:py-24 flex flex-col gap-6 md:gap-14 lg:gap-16">
                            <div className="footer_top flex flex-col items-center gap-8 xl:flex-row xl:justify-between">
                                <div className="brand_logo cursor-pointer">
                                    <Link to="/" className="flex items-center gap-1">
                                        <Image src={logoSvg} alt="logo" style={{ width: '28px' }} />
                                        <span className="font-bold text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-tl from-[#4ED4F7] via-[#2C57F3] to-[#7143D7]">
                                            Talfoundry
                                        </span>
                                    </Link>
                                </div>

                                <ul className="flex flex-col items-center gap-6 lg:flex-row">
                                    <li className="text-[#17181C] text-base cursor-pointer transition-all duration-200 ease-linear hover:text-[#4361EE]">
                                        <Link to="/freelancer-search" className="text-[#17181C] hover:text-[#4361EE]">Find Experts</Link>
                                    </li>
                                    <li className="text-[#17181C] text-base cursor-pointer transition-all duration-200 ease-linear hover:text-[#4361EE]">
                                        <Link to="/job-search" className="text-[#17181C] hover:text-[#4361EE]">Find Work</Link>
                                    </li>
                                    <li className="text-[#17181C] text-base cursor-pointer transition-all duration-200 ease-linear hover:text-[#4361EE]">
                                        <Link to="/advisory-services/aws-advisory-services" className="text-[#17181C] hover:text-[#4361EE]">AWS Advisory</Link>
                                    </li>
                                    <li className="text-[#17181C] text-base cursor-pointer transition-all duration-200 ease-linear hover:text-[#4361EE]">
                                        <Link to="/advisory-services/salesforce-advisory-services" className="text-[#17181C] hover:text-[#4361EE]">Salesforce Advisory</Link>
                                    </li>
                                    <li className="text-[#17181C] text-base cursor-pointer transition-all duration-200 ease-linear hover:text-[#4361EE]">
                                        <Link to="/how-it-works" className="text-[#17181C] hover:text-[#4361EE]">How it Works</Link>
                                    </li>
                                    <li className="text-[#17181C] text-base cursor-pointer transition-all duration-200 ease-linear hover:text-[#4361EE]">
                                        <Link to="/help-center" className="text-[#17181C] hover:text-[#4361EE]">Help Center</Link>
                                    </li>
                                </ul>

                                <div className="social_links flex items-center gap-6">
                                    {
                                        socialImages.map((image, index) => (
                                            <a key={`${index}_socialImages`} className="transition-all duration-200 ease-linear hover:-translate-y-2 hover:text-[#4361EE]" href="">
                                                <Image src={image} alt="socialImages" />
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>

                            <hr />

                            <div className="copyright flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                                <span className="text-[#6D6F79] text-sm text-center">© Copyright 2023, All rights reserved</span>
                                <div className="copyright_links flex justify-between md:justify-center md:gap-4">
                                    <a className="text-[#6D6F79] text-sm" href="">Privacy Policy</a>
                                    <a className="text-[#6D6F79] text-sm" href="">Terms &amp; Condition</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </section>
    )
}

export default Footer