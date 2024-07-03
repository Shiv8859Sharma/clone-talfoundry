import LoginSignUpLeftLayout from "@/layouts/loginSignUpLeftLayout"
import { popupOpen } from "@/globalStates/actions/PopupAction"
import { useDispatch, useSelector } from "react-redux"
import { Tab } from "@headlessui/react";
import SocialButton from '@/pages/socialButton';
import { useState } from "react";
import SignUpForm from "./signUpForm";
import { getFormValues } from "@/utills/formValidation";
import countryList from "@/utills/countryStateCity";
import { setFormFieldErrors } from '@/globalStates/actions/formAction';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

let tabs = ['Hire for Project', "Work as Cloud Expert"]

const SignUpPage = () => {
    const dispatch = useDispatch();
    const formDetails = useSelector(state => state?.FormDetails)
    const [activeTab, setActiveTab] = useState('Hire for Project')
    const [userRole, setUserRole] = useState()
    const [submitForm, setSubmitForm] = useState(false)

    const handleGoToLoginPage = () => {
        dispatch(popupOpen({
            type: 'login',
            open: true,
            className: 'w-[95%] md:w-[90%] xl:w-[80%] 3xl:w-[70%]'
        }))
    }

    const handleTabChange = (name) => {
        let role = name === 'Hire for Project' ? 'Project Manager' : 'Freelancer'
        setActiveTab('')
        setUserRole(role)
        setTimeout(() => {
            setActiveTab(name)
        }, 100)
    }

    const setError = (errors) => {
        dispatch(setFormFieldErrors(errors))
        if (!errors.length) {
            setSubmitForm(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let { isValid, data, errors } = getFormValues(e, 'sign_up')
        setSubmitForm(true)
        if (isValid) {
            if ((data.password !== data.confirm_password)) {
                setError([{
                    field: 'confirm_password',
                    message: `Password doesn't match`
                }])
            } else {
                let location = countryList.find(country => country.name === data.location)
                console.log("data: ", data);
                let userDetails = new FormData()
                userDetails.append("first_name", data.first_name)
                userDetails.append("last_name", data.last_name)
                userDetails.append("email", data.email)
                userDetails.append("password", data.password)
                userDetails.append("country", location.name)
                userDetails.append("role", userRole)
                userDetails.append("country_id", location.id)
            }

        } else {
            setError(errors)
        }

    }

    const handleChange = (e) => {
        let { name } = e.target
        if (formDetails.errors.length) {
            let errorFieldName = formDetails.errors.map(item => item.field)
            if (errorFieldName.includes(name)) {
                let remaingErrors = formDetails.errors.filter(errorField => errorField.field !== name)
                setError(remaingErrors)
            }

        }
    }
    return (
        <div className="content_box relative m-auto  h-[80vh]  border border-[#BBBDC8] rounded-[14px] bg-white overflow-hidden  flex flex-col lg:flex-row">
            <LoginSignUpLeftLayout />
            <div className="content_right lg:w-1/2 sm:px-6 lg:px-0 xl:px-10 py-10 md:py-16 flex flex-col gap-4 overflow-x-hidden overflow-y-auto">
                <div className="form_heading px-4 sm:px-6 md:px-8 flex flex-col gap-4">
                    <div className="title">
                        <span className="text-[#17181C] text-3xl md:text-4xl xl:text-5xl font-bold">Sign up</span>
                    </div>
                    <div className="subtitle flex gap-2">
                        <p className="text-[#3E4048]">Already have an account?</p>
                        <button className="text-[#4361EE] hover:underline" onClick={handleGoToLoginPage}>Log in</button>
                    </div>
                </div>
                <form className="flex flex-col gap-10" name="project_form" id="project_id" autoComplete="off" onSubmit={submitForm ? '' : handleSubmit}>
                    <Tab.Group>
                        <Tab.List className="btm_btn px-4 sm:px-6 md:px-8 rounded-full bg-[#FFFFFF] flex items-center justify-between md:justify-center md:gap-8">
                            {tabs.map((category) => (
                                <div
                                    key={`${category}_tab`}
                                    className={`rounded-full p-0.5 transition-all duration-300 ease-in-out ${category === activeTab ? "button-linear-active" : ''}`}>
                                    <Tab
                                        type="reset"
                                        onClick={() => handleTabChange(category)}
                                        className={'text-black rounded-full py-3 px-4 font-medium leading-5 bg-white focus:outline-none'}
                                    >
                                        {category}
                                    </Tab>
                                </div>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {tabs.map((tab) => (
                                <Tab.Panel
                                    key={tab}
                                    className={(selected) => classNames(
                                        'rounded-xl bg-white p-3',
                                        'transition transition-all duration-300 ease-linear',
                                        (activeTab === tab) && selected ? 'translate-x-0' : tab === 'Hire for Project' ? '-translate-x-full' : 'translate-x-full'
                                    )}
                                >
                                    <div className="flex flex-col gap-10">
                                        <div onChange={handleChange}>
                                            <SignUpForm />
                                        </div>
                                        <SocialButton type='signUp' />
                                    </div>
                                </Tab.Panel>

                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage
