import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { getCurrentLocation } from "@/utills/currentLocation";
import { useEffect, useState } from 'react';
import countryList from '@/utills/countryStateCity';
import { InputField, AutocompleteField, CheckboxField } from '@/components/formFields';

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState()
    const [currentLocation, setCurrentLocation] = useState('')

    const toggleIcon = (type) => {
        setShowPassword((pre) => ({
            ...pre,
            [type]: !pre?.[type]
        }))
    }
    useEffect(() => {
        location()
    }, [])

    const location = async () => {
        let data = await getCurrentLocation()
        let country = await data.country
        setCurrentLocation(data.success ? country : '')
        return await data.success ? country : ''
    }

    return (
        <div className="credentials flex flex-col gap-4 md:gap-6">
            <div className="name w-full flex flex-col md:flex-row gap-4">
                <InputField
                    label='First Name'
                    name='first_name'
                    type='text'
                />
                <InputField
                    label='Last Name'
                    name='last_name'
                    type='text'
                />
            </div>

            <InputField
                label='Work Email Address'
                name='email'
                type='email'
            />

            <AutocompleteField
                label='Location'
                name='location'
                options={countryList.map(country => country.name)}
                title='name'
                value='name'
                defaultOption={true}
                defaultOptionLabel="Select location"
                defaultValue={currentLocation}
                showCheck={false}
            />

            <InputField
                label='Password'
                rightIcon={showPassword?.password ? <EyeIcon className="cursor-pointer" onClick={() => toggleIcon('password')} /> : <EyeSlashIcon className="cursor-pointer" onClick={() => toggleIcon('password')} />}
                name='password'
                type={showPassword?.password ? 'text' : 'password'}
            />
            <InputField
                label='Confirm Password'
                rightIcon={showPassword?.confirm_password ? <EyeIcon className="cursor-pointer" onClick={() => toggleIcon('confirm_password')} /> : <EyeSlashIcon id='confirm_password' className="cursor-pointer" onClick={() => toggleIcon('confirm_password')} />}
                name='confirm_password'
                type={showPassword?.confirm_password ? 'text' : 'password'}
            />

            <div className="extra_btn flex flex-col gap-6">
                <CheckboxField
                    name='projectTermCondn'
                >
                    <span>By signing up you agree to Talfoundry's </span>
                    <a className="underline" href="">Terms of Service</a> &amp;
                    <a className="underline" href="">Privacy Policy</a>.
                    Which outline your rights and obligations with
                    respect to your use of the service and processing of
                    your data
                </CheckboxField>

                <CheckboxField
                    name='projectAgree'
                >
                    You agree to receive subsequent email and
                    third-party communication, which you may opt out of,
                    or unsubscribe from, at any time.
                </CheckboxField>
            </div>

            <div className="submit_btn">
                <button type="submit" className="px-4 py-3 w-full rounded-full border font-semibold text-[#ECF9FD] text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr">
                    Sign up
                </button>
            </div>
        </div>
    )

}

export default SignUpForm