import { useDispatch, useSelector } from "react-redux";
import { RadioFields, SelectField } from "../../components/formFields";
import { GradientButton, OutlineButton } from "../../components/buttons";
import { validateForm } from "../../utills/formValidation";
import { setFormFieldErrors } from "../../globalStates/actions/formAction";
import { useNavigate } from "react-router-dom";
import { popupClose } from '@/globalStates/actions/PopupAction'

const HireFreelancerForm = () => {
    const detais = useSelector(state => state?.popup?.details)
    const formDetails = useSelector(state => state?.FormDetails)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleHireFreelancer = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = Object.fromEntries(formData.entries());

        let hireData = {
            ...data,
            hireJobId: JSON.parse(data.job)?.uuid
        }
        let { hireJobId, rateType } = hireData
        let errors = validateForm({ ...data, job: JSON.parse(data.job)?.uuid }, 'HireFreelancerForm')
        if (!errors.length) {
            navigate({ pathname: `/hire-a-freelancer/${detais?.uuid}/${hireJobId}`, state: { rateType: rateType } })
            dispatch(popupClose())
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
        <form onSubmit={handleHireFreelancer} onInput={handleChange}>
            <div className="p-6 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-figtree font-bold text-2xl leading-[34px]">Hire Chandrika Nath
                        </span>
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
                    <RadioFields
                        name='rateType'
                        label='Job Type'
                        options={[
                            { value: 'hourly', label: 'Hourly' },
                            { value: 'fixed price', label: 'Fixed Price' }

                        ]}
                    />


                </div>
                <div className="flex justify-end w-full gap-4">
                    <OutlineButton
                        type='reset'

                    >
                        Cancle
                    </OutlineButton>
                    <GradientButton
                        type='submit'
                    >
                        Next
                    </GradientButton>
                </div>
            </div>
        </form>
    )
}

export default HireFreelancerForm