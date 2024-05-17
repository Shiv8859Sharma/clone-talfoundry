import { useSelector } from "react-redux"
import LandingPageHeader from "./LandingPageHeader"
import ProjectManagerHeader from "./PmHeader"
import AdminHeader from "./AdminHeader"
import FreelancerHeader from "./CeHeader"

const Header = () => {
    const { role } = useSelector((state) => state.auth)

    return (
        role === 'Project Manager' ?
            <ProjectManagerHeader />
            : role === 'Freelancer' ?
                <FreelancerHeader />
                : role === 'admin' ?
                    <AdminHeader />
                    : <LandingPageHeader />
    )
}

export default Header