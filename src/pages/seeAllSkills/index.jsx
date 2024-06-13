import { useState } from 'react';
import { isArray, isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { InputField } from '@/components/formFields';
import { GradientButton } from '@/components/buttons';
import RollSkillTagList from "@/components/skill&rollTagList"
import NoDataFoundMessage from "@/constants/NoDataFoundMessage"

const SeeAllSkills = () => {
    const skillList = useSelector(state => state?.CommanState?.techSkills)
    const [filterSkill, setFilterSkill] = useState(skillList)
    const popUpdatails =  useSelector(state => state?.popup?.details)

    const handleSkillSearch = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget)
        let value = Object.fromEntries(formData)
        let filterData = value.skill ? [...skillList].filter(item => item.name?.toLowerCase().includes(value.skill?.toLowerCase())) : skillList
        setFilterSkill(isEmpty(filterData) ? 'no skill found' : filterData)
    }

    const handleTabClick = (event) => {
        popUpdatails?.onTabClick(event.currentTarget.dataset.tagdata, event)
    }

    let skillsData = filterSkill || skillList
    return (
        <div className="relative m-auto h-auto  bg-white overflow-y-auto overflow-x-hidden">
            <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="font-figtree font-bold text-2xl leading-[34px]">{popUpdatails?.heading}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2.5 px-2'>
                    <form onSubmit={handleSkillSearch}>
                        <div className="flex gap-2 items-center">
                            <InputField
                                name='skill'
                                type='text'
                                placeholder={popUpdatails?.inputPlaceholder}
                                inputContainerClass='rounded-md'
                            />
                            <div>
                                <GradientButton type='submit' className='py-2 rounded-md' >
                                    Search
                                </GradientButton>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col gap-2.5 px-2 h-[25rem] overflow-y-auto'>
                    {isArray(skillsData) ?
                        <RollSkillTagList list={skillsData.map(item => item.name)}
                            deleteIconShow={false}
                            imageClassName='w-6 h-6'
                            containerClass='shadow-[0_0_35px_0_#AEAEAE1A] bg-[#FFFFFF] rounded-3xl px-2.5 py-2'
                            LabelClassName='cursor-pointer'
                            onClick={handleTabClick}
                        />
                        : <NoDataFoundMessage message={skillsData} />
                    }

                </div>

            </div>
        </div>
    )
}

export default SeeAllSkills