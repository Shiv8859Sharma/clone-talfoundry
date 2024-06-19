import { MapIcon } from "@/assets/svg"
import Image from "../../components/ImageElement"
import { SelectField, TextAreaField } from "@/components/formFields"
import { useDispatch, useSelector } from "react-redux"
import { GradientButton } from "../../components/buttons"
import { setFormFieldErrors } from '@/globalStates/actions/formAction';
import { validateForm } from "../../utills/formValidation"
import { popupOpen } from "@/globalStates/actions/PopupAction";

const SendInvationForm = () => {
    const detais = useSelector(state => state?.popup?.details)
    const formDetails = useSelector(state => state?.FormDetails)
    const dispatch = useDispatch();

    const handleSendInvation = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = Object.fromEntries(formData.entries());

        let sendInvationData = {
            ...data,
            inviteJobId: JSON.parse(data.job)?.id
        }

        let errors = validateForm({ ...data, job: JSON.parse(data.job)?.id }, 'SendInvationForm')
        console.log("::: errors", errors);
        if (!errors.length) {
            dispatch(popupOpen({ open: true, type: 'SUCCESS_POPUP', detais : {...sendInvationData, }}))
        } else {
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
    return (
        <form onSubmit={handleSendInvation} onInput={handleChange}>
            <div className="p-6 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-figtree font-bold text-2xl leading-[34px]">Invite to Job</span>
                    </div>
                </div>

                <div>
                    <div className="flex gap-8">
                        <div className="profile w-28 h-28">
                            <Image src='' type='profile' className='w-[4.5rem] h-[4.5rem]' />
                        </div>
                        <div className="info flex flex-col gap-4 w-full">
                            <div className="flex justify-between">
                                <div className="left flex flex-col gap-1">
                                    <div className="flex items-center gap-[10px]">
                                        <div>
                                            <span className="font-bold font-figtree text-xl">{detais?.cloudExpertname}</span>
                                        </div>
                                        <div>
                                            {/* <img src="assets/cloud/Public.svg" alt="Public" /> */}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-figtree font-semibold text-sm text-[#3E4048]">
                                            {detais?.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div>
                                            <MapIcon fill='#000000' />
                                        </div>
                                        <div>
                                            <span className="font-normal font-figtree text-sm text-[#3E4048]">{detais?.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <SelectField
                        label='Choose a Job'
                        options={detais?.options}
                        onChange={handleChange}
                        title={'title'}
                        value={'title'}
                        name='job'
                        defaultOption={true}
                        placeholder={'Select Job.'}
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <div>
                        <TextAreaField
                            label='Message'
                            placeholder="Type your message"
                            name="inviteText"
                            cols="30"
                            rows="5"
                        ></TextAreaField>
                    </div>
                </div>

                <div className="flex justify-end w-full">
                    <GradientButton
                        type="submit"
                    >
                        Send Invite
                    </GradientButton>
                </div>
            </div>
        </form>
    )
}

export default SendInvationForm