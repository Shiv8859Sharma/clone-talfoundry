import { useDispatch, useSelector } from "react-redux"
import LandingPageHeader from "./LandingPageHeader"
import ProjectManagerHeader from "./PmHeader"
import AdminHeader from "./AdminHeader"
import FreelancerHeader from "./CeHeader"
import { useEffect } from "react"
import { getCurrentUserDatails } from "@/globalStates/actions/userAction"

const Header = () => {
    const { role } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
        if(role){
            dispatch(getCurrentUserDatails())
        }
    }, [role])
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