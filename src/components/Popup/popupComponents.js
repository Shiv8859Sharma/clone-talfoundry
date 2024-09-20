import { lazy } from "react";

const LoginPage = lazy(() => import('@/pages/login'))
const SignUpPage = lazy(() => import('@/pages/signUp'))
const ForgetPassword = lazy(() => import('@/pages/forgetPassword'))
const SeeAllSkills = lazy(() => import('@/pages/seeAllSkills'))
const HireFreelancerForm = lazy(() => import('@/pages/hireFreelancerForm'))
const SendInviteForm = lazy(() => import('@/pages/sendInviteForm'))

export {
    LoginPage,
    SignUpPage,
    ForgetPassword,
    SeeAllSkills,
    HireFreelancerForm,
    SendInviteForm
} 