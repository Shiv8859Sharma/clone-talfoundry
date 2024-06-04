import { Menu, Transition } from "@headlessui/react"
import { Fragment, useId } from "react"

const MenuDropDown = (props) => {
    let { menuButtonTitle = '', menuItems = [], menuItemsClass = '', itemClass = '', onClick = () => { } } = props
    return (
        <Menu as="div" className="relative" >
            <Menu.Button className="flex gap-2 items-center">
                {menuButtonTitle}
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={`absolute mt-2 z-10 w-56 origin-top-right focus:outline-none ${menuItemsClass}`}>
                    <div className="py-1">
                        {
                            menuItems.map(({ label }) => {
                                let id = useId()
                                return (
                                    <Menu.Item as='div'
                                        key={`menu-item-${id}`}
                                        className={`px-8 py-3 block transition-all duration-300 hover:scale-105 cursor-pointer ${itemClass}`}
                                        onClick={onClick}
                                    >
                                        {label}
                                    </Menu.Item>
                                )
                            })
                        }

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default MenuDropDown