import { useDispatch, useSelector } from "react-redux"
import { lazy, useEffect } from "react"

import LandingPageHeader from "./LandingPageHeader"
const ProjectManagerHeader = lazy(() => import('./PmHeader'))
const AdminHeader = lazy(() => import('./AdminHeader'))
const FreelancerHeader = lazy(() => import('./CeHeader'))
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
                : role === 'Admin' ?
                    <AdminHeader />
                    : <LandingPageHeader />
    )
}

export default Header