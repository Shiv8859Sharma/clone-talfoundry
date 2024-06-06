import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Transition } from '@headlessui/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

import SocialButton from '@/pages/socialButton';
import LoginSignUpLeftLayout from '@/layouts/loginSignUpLeftLayout';
import { getFormValues } from '@/utills/formValidation';
import { setFormFieldErrors } from '@/globalStates/actions/formAction';
import { setAuthToken, loginUser } from '@/globalStates/actions/authAction';
import { popupClose, popupOpen } from '@/globalStates/actions/PopupAction';
import { InputField, CheckboxField } from '@/components/formFields';
import { SpinLoader } from '../../components/loader';
import { GradientButton } from '../../components/buttons';

function LoginPage() {
    const formDetails = useSelector(state => state?.FormDetails)
    const isLoading = useSelector(state => state?.loader?.isLoading)

    const dispatch = useDispatch();
    let navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [captcha, setCaptcha] = useState({
        verified: false,
        error: false
    })

    const login = (details) => {
        dispatch(setAuthToken(details))
        navigate('/')
        setTimeout(() => {
            dispatch(popupClose())
        }, 100)
    }

    const handleSwichPopup = (e) => {
        let { name } = e.target
        let classNames = {
            signUp: 'w-[95%] md:w-[90%] xl:w-[80%] 3xl:w-[70%]',
            FORGET_PASSWORD: 'w-[95%] md:w-[50%] xl:w-[40%] 3xl:w-[20%]'
        }
        dispatch(popupOpen({
            type: name,
            open: true,
            className: classNames[name]
        }))
    }

    const toggleIcon = () => {
        setShowPassword((pre) => !pre)
    }

    const handleLogin = (e) => {
        let { isValid, data, errors } = getFormValues(e, 'login')

        if (isValid && captcha.verified) {
            let userDetails = new FormData();
            Object.keys(data).forEach(key => {
                userDetails.append(key, data[key]);
            });
            dispatch(loginUser(userDetails)).then((response) => {
                if (response.status === 200) {
                    let details = {
                        token: response.data.token,
                        role: response.data?.user?.role
                    }
                    login(details)
                } else {
                    e.target.scrollIntoView({ top: 0, behavior: 'smooth' });
                    setError(response.response.data.message)

                }
            })
        } else {
            setCaptcha((pre) => ({
                ...pre,
                error: !pre.verified
            }))
            dispatch(setFormFieldErrors(errors))
        }
    }

    const handleChange = (e) => {
        let { name } = e.target
        if (formDetails.errors.length) {
            let errorFieldName = formDetails.errors.map(item => item.field)
            if (errorFieldName.includes(name)) {
                let remaingErrors = formDetails.errors.filter(errorField => errorField.field !== name)
                dispatch(setFormFieldErrors(remaingErrors))
            }
        }
    }

    const hadnleCaptcha = (value) => {
        setCaptcha({
            verified: !!value,
            error: !value
        })
    }


    return (
        <div className="content_box relative m-auto  h-[80vh]  border border-[#BBBDC8] rounded-[14px] bg-white overflow-y-auto overflow-x-hidden flex flex-col lg:flex-row">
            <LoginSignUpLeftLayout />
            <div className="content_right lg:w-1/2 sm:px-6 lg:px-0 xl:px-10 py-10 md:py-16  flex flex-col gap-3">
                <div className="form_heading px-4 sm:px-6 md:px-8 flex flex-col gap-4">
                    <div className="title">
                        <span className="text-[#17181C] text-3xl md:text-4xl xl:text-5xl font-bold" >Log in</span>
                    </div>
                    <div className="subtitle flex gap-2">
                        <p className="text-[#3E4048]">New to TalFoundry?</p>
                        <Link onClick={handleSwichPopup} name='signUp' className="text-[#4361EE] hover:underline">Sign up</Link>
                    </div>
                </div>

                <form className="px-4 sm:px-6 md:px-8 flex flex-col gap-5" name="login_form" id="login_id" onSubmit={handleLogin}>

                    {error && <div className='bg-red-100 py-3 px-2 w-full rounded-md border-2 border-rose-600 text-red-700'>
                        <span>{error}</span>
                    </div>}
                    <div className="credentials flex flex-col gap-4 md:gap-6" onChange={handleChange}>
                        <InputField
                            label='Email'
                            name='email'
                            type='email'
                            placeholder="Enter email"
                        />
                        <InputField
                            label='Password'
                            rightIcon={showPassword ? <EyeSlashIcon onClick={toggleIcon} /> : <EyeIcon onClick={toggleIcon} />}
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                        />

                        <div className="extra_btn flex justify-between flex-auto">
                            <CheckboxField
                                name='rememberMe'
                                labelClass='text-[#17181C] font-bold'
                            >
                                Remember Me
                            </CheckboxField>

                            <div className="forgot_pwd">
                                {/* <span className="text-[#4361EE] hover:underline" onClick>Forget password?</span> */}
                                <Link onClick={handleSwichPopup} name='FORGET_PASSWORD' className="text-[#4361EE] hover:underline">Forget password?</Link>
                            </div>
                        </div>

                        <div className="recaptcha-container flex flex-col items-center py-2">
                            <div>
                                <ReCAPTCHA
                                    sitekey="6LfwYeQZAAAAAKZQ2zp7wA8o24Wu_3-oa2zQf0PM"
                                    onChange={hadnleCaptcha}
                                    onExpired={hadnleCaptcha}
                                    type="image"
                                    hl="en"
                                    tabindex={1}
                                    className="recaptcha-inner-container"
                                />
                                <Transition show={captcha.error} as={'span'} className={`error-container text-red-700 font-medium text-sm text-left`} >
                                    Please verify the captcha
                                </Transition>
                            </div>
                        </div>

                        <div className="submit_btn">
                            <GradientButton type='submit' disabled={isLoading} className='w-full flex items-center text-center justify-center gap-4 font-semibold'>
                                <SpinLoader isLoading={isLoading} />
                                Log in
                            </GradientButton>
                        </div>
                    </div>
                    <SocialButton type='login' />
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
