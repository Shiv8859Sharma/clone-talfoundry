import { memo } from "react"
import UserProfileCard from "@/components/userProfileCard"

const HeroSection = () => {
    return (
        <section >
            <div class="default_container max-w-xs sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto">
                <div class="hero flex flex-col md:flex-row gap-4 lg:gap-6 py-6">
                    <UserProfileCard />
                    <div
                        class="rounded-xl w-full md:w-1/2 xl:w-full flex items-center justify-between bg-[#F1F3FE]"
                    >
                        <div
                            class="lg:w-[60%] p-8 lg:px-[67px] lg:py-20 flex flex-col gap-3"
                        >
                            <div class="heading">
                                <span class="font-figtree text-2xl lg:text-3xl font-bold"
                                >You are one step away from finding amazing cloud
                                    experts</span>
                            </div>
                            <div class="content">
                                <span
                                    class="font-figtree text-[#17181C] text-sm md:text-base"
                                >
                                    Post a job and get access to Top 1% talent & Pre-Vetted
                                    Candidates!
                                </span>
                            </div>
                            <div class="flex">
                                <a
                                    href="./postJob.html"
                                    class="px-8 py-3.5 rounded-full font-semibold text-[#ECF9FD] text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr"
                                >
                                    Post a job
                                </a>
                            </div>
                        </div>

                        <div class="bg_img hidden lg:block">
                            {/* <img src="./assets/homepage/Dashboard_hero_Image.webp" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(HeroSection);