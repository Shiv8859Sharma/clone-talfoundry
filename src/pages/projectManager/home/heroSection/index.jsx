import UserProfileCard from "@/components/userProfileCard"
import { GradientButton } from "@/components/buttons";
import NavigatePage from "@/components/navigatePage";
import { memo } from "react";
import Image from "@/components/ImageElement";
import heroImage from '@/assets/webp/PM_Dashboard_hero.webp'
const HeroSection = () => {
    return (
        <section >
            <div className="default_container max-w-xs sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto">
                <div className="hero flex flex-col md:flex-row gap-4 lg:gap-6 py-6">
                    <UserProfileCard />
                    <div
                        className="rounded-xl w-full md:w-3/4 xl:w-full flex items-center justify-between bg-[#F1F3FE]"
                    >
                        <div
                            className="lg:w-[60%] p-8 lg:px-[67px] lg:py-20 flex flex-col gap-3"
                        >
                            <div className="heading">
                                <span className="font-figtree text-2xl lg:text-3xl font-bold"
                                >You are one step away from finding amazing cloud
                                    experts</span>
                            </div>
                            <div className="content">
                                <span
                                    className="font-figtree text-[#17181C] text-sm md:text-base"
                                >
                                    Post a job and get access to Top 1% talent & Pre-Vetted
                                    Candidates!
                                </span>
                            </div>
                            <div className="flex">
                                <NavigatePage url="/post-a-job">
                                    <GradientButton>
                                        Post a job
                                    </GradientButton>
                                </NavigatePage>
                            </div>
                        </div>

                        <div className="bg_img hidden lg:block">
                            <Image src={heroImage} />
                            {/* <img src="./assets/homepage/Dashboard_hero_Image.webp" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(HeroSection);