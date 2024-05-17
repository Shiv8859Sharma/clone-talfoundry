
import './home.css'
import ExpertsSection from "./expertsSection"
import HeroSection from "./heroSection"
import ArchitectsSection from './architectsSection'
import WorkSection from './workSection'
import PricingSection from "./pricingSection"
import ChooseSection from "./chooseSection"
import CatSection from './CatSection'
import ProjectDurationSection from './projectDurationSection'
import FaqSection from './faqSection'
import BookACallChatLayout from '@/layouts/bookAcallChatLayout'

const Home = () => {

    return (
        <main>
            <HeroSection />
            <ExpertsSection />
            <ArchitectsSection />
            <WorkSection />
            <PricingSection />
            <ChooseSection />
            <CatSection />
            <ProjectDurationSection />
            <FaqSection />
            <BookACallChatLayout />
        </main>
    )

}

export default Home

