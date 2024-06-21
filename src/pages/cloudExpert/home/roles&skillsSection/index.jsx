import { PlusIcon } from "@heroicons/react/24/outline"
import RollSkillTagList from "@/components/skill&rollTagList"
import NavigatePage from "@/components/navigatePage"
import { popupOpen } from "@/globalStates/actions/PopupAction"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { popupClose } from '@/globalStates/actions/PopupAction'

const RolesAndSkillsSection = (props) => {
    let { name = '', rolesAndSkillsList = [] } = props
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleTabClick = (data) => {
        navigate('/find-work', {
            state: {
                search: data
            }
        })
        dispatch(popupClose())
    }

    const openPopup = (id) => {
        return popupOpen({
            type: `SEE_ALL_${id?.toUpperCase()}`,
            open: true,
            className: 'w-[95%] md:w-[60%] xl:w-[50%] 3xl:w-[65%]',
            details: {
                onTabClick: (...rest) => handleTabClick(...rest),
                heading: id,
                inputPlaceholder: id === 'SKILLS' ? 'Search skill' : 'Search role'
            }
        });
    }

    return (
        <section>
            <div className="default_container max-w-xs sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto">
                <div className="roles flex flex-col gap-6 py-10">
                    <div className="heading">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
                                <span className="font-figtree text-xl lg:text-2xl font-bold">Explore by</span>
                                <span className="font-figtree text-xl lg:text-2xl font-bold text-gradient">{name}</span>
                            </div>
                            <NavigatePage id={name?.toLowerCase()} type="dispachAction" dispatchFun={openPopup(name)} className="flex justify-center items-center">
                                <div>
                                    <PlusIcon className="w-4 h-4 stroke-[#4361EE]" />
                                </div>
                                <div>
                                    <span className="font-figtree font-semibold text-sm text-[#4361EE]" >See more {name}</span>
                                </div>
                            </NavigatePage>
                        </div>
                    </div>

                    <RollSkillTagList list={rolesAndSkillsList}
                        deleteIconShow={false}
                        imageClassName='w-6 h-6'
                        containerClass='shadow-[0_0_35px_0_#AEAEAE1A] bg-[#FFFFFF] rounded-3xl px-2.5 py-2'
                        LabelClassName='cursor-pointer'
                        onClick={(event) => handleTabClick(event.currentTarget.dataset.tagdata, event)}
                    />
                </div>
            </div>
        </section>
    )
}

export default RolesAndSkillsSection