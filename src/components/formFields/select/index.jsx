import { Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { fielError } from "@/utills/fieldError"
import { useSelector } from "react-redux"

function isObject(objValue) {
    return objValue && typeof objValue === 'object' && objValue.constructor === Object;
}

const SelectField = (props) => {
    let { label = '', name = '', containerClass = '', labelClass = '', inputClass = '', options = [], defaultOption = false, defaultOptionLabel = '', defaultValue = '', errorElement = 'span', errorMessageClassName = '', title = 'name', value = 'value', inputContainerClass='' } = props

    const formDetails = useSelector(state => state?.FormDetails)
    let message = fielError(name, formDetails?.errors)

    return (
        <div className="w-full flex flex-col gap-2.5">
            <div className="input-container">
                <div className={`${name} relative flex flex-col gap-2.5 ${containerClass}`}>
                    <label className={`text-[#17181C] font-bold ${labelClass}`} htmlFor={`${name}Id`}>{label}</label>
                    <div aria-hidden="true" className={`border px-4 border-[#BBBDC8] rounded-full flex items-center ${inputContainerClass}`} >
                    <select name={name} className={`appearance-none w-full bg-transparent py-3 outline-none ${inputClass}`} id={`${name}Id`} defaultValue={defaultValue}>

                        {defaultOption && <option value=''>{defaultOptionLabel}</option>}
                        {
                            options.length ? options.map((option, index) => {
                                return (
                                    isObject(option) ?
                                        <option key={index} value={option?.[value]} selected={option?.[value] === defaultValue}>{option?.[title]}</option>
                                        : <option key={index} value={option}>{option}</option>
                                )
                            })
                                : <p>Options is not available!</p>
                        }

                    </select>
                    {/* <div className="arrow absolute top-[1.5rem] right-[4%]  w-[1.5rem]"> */}
                        <ChevronDownIcon
                            className={`h-5 w-5 transition duration-150 ease-in-out`}
                            aria-hidden="true"
                        />
                    {/* </div> */}
                    </div>
                </div>
            </div>
            <Transition show={message !== ''} as={errorElement} className={`error-container text-red-700 font-medium text-sm ${errorMessageClassName}`} >
                {message}
            </Transition>
        </div>
    )
}

export default SelectField