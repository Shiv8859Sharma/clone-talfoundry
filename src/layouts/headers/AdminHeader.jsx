import React, { Fragment, useState } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import SvgIcon from "@/assets/svg";
import Image from '@/components/ImageElement';
import { logOutUser } from '@/globalStates/actions/authAction';
import MenuDropDown from '@/components/dropDown';
import NotificationDropDown from '@/components/notificationDropDown';
import NavigatePage from '@/components/navigatePage';
import HamburgerButton from '@/components/buttons/hamburgerButton';

// Main CloudExperHeader component
const CloudExperHeader = () => {
    const [open, setOpen] = useState(false);
    const centerLinks = [

    ]

    const handleHideMobileTab = (event) => {
        const clickedElement = event.target;
        let targetedID = clickedElement.closest('[id]')?.getAttribute('id')
        let id = ["messages", 'settings', 'profile', 'notifications', 'my_jobs', 'contracts', 'payments', 'analytics']
        if (id.includes(targetedID) && open) {
            setOpen(false)
        }
    }

    return (
        <div className="bg-[#17181C] w-full relative">
            {/* Mobile menu */}
            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40" onClose={setOpen}>
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#17181C] bg-opacity-25" />
                    </TransitionChild>

                    <div className="fixed top-20 inset-0 z-40 flex">
                        <TransitionChild
                            as={Fragment}
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-700 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <DialogPanel className="relative flex w-full flex-col overflow-y-auto overflow-x-hidden bg-[#17181C] pb-12 shadow-xl">
                                <div className="lg:hidden floating_item_3 bg-[#4CC9F066] -rotate-[10deg] blur-[150px] w-64 h-64 absolute top-[0%] -left-[30%]" />
                                <div className="lg:hidden floating_item_4 bg-[#7209B766] rotate-[10deg] blur-[150px] w-64 h-64 absolute bottom-[0%] -right-[30%]" />

                                {/* Mobile Navigation Links */}

                                {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6" onClick={handleHideMobileTab}>
                                    {centerLinks.map(({ label, href, iconName }) => {
                                        return (
                                            <NavigatePage key={label} id={label.split(' ').join('_').toLowerCase()} url={href} className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                                <div><SvgIcon name={iconName} /></div>
                                                <div className="text-center">
                                                    <span className="font-figtree text-right text-sm text-[#FFFFFF] text-nowrap">
                                                        {label}
                                                    </span>
                                                </div>
                                            </NavigatePage>
                                        )
                                    })}
                                </div> */}
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6" onClick={handleHideMobileTab}>
                                    <div className="icon w-full flex flex-row-reverse lg:flex-row items-center justify-around lg:justify-normal lg:gap-5">


                                        <NotificationDropDown />

                                        <ProfileMenuButton dropDownClass='' />

                                    </div>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>

            <header className="bg-[#17181C] py-3">
                <nav aria-label="Top" className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="flex h-16 items-center justify-between gap-3">
                            <div className=" lg:ml-0">
                                <NavigatePage id='home' url='/' className={'cursor-pointer'}>
                                    <div className="flex items-center gap-[6px] hover:opacity-100">
                                        <span className="sr-only">Your Company</span>
                                        <SvgIcon name='logo' folderName='commonAssets' outSide='..' className="w-7 h-5" />
                                        <span className="font-bold text-2xl lg:text-3xl text-[#ffffff] hover:text-[#ffffff]">Talfoundry</span>
                                    </div>
                                </NavigatePage>
                            </div>

                            {/* Mobile menu button */}
                            <HamburgerButton isOpen={open} containerClass='w-12 h-16' setToggelMenu={setOpen} bar1class='w-[70%] bg-white h-1 rounded-md' bar2class='w-full bg-white h-1 rounded-md' bar3class='w-[70%] bg-white h-1 rounded-md-' />

                            {/* Desktop Navigation Links */}
                            <div className="ml-auto hidden lg:flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end gap-2">

                                    {centerLinks.map(({ label, href, iconName }) => {
                                        return (
                                            <NavigatePage key={label} id={label.split(' ').join('_').toLowerCase()} url={href} className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                                <div><SvgIcon name={iconName} /></div>
                                                <div className="text-center">
                                                    <span className="font-figtree text-right text-sm text-[#FFFFFF] text-nowrap">
                                                        {label}
                                                    </span>
                                                </div>
                                            </NavigatePage>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="ml-auto hidden lg:flex items-center">

                                <div className="profile hidden lg:flex items-center gap-6 px-5 lg:px-0">


                                    <div className="icon w-full flex flex-row-reverse lg:flex-row items-center justify-around lg:justify-normal lg:gap-5">

                                        <NotificationDropDown />

                                        <ProfileMenuButton dropDownClass='right-0' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default CloudExperHeader;


const ProfileMenuButton = ({ src = '', dropDownClass = '' }) => {
    let menuTitle = <>
        <Image src={src} type='profile' alt='user-profile' className="w-12 h-12" />
        <ChevronDownIcon className="w-4 h-4 text-white opacity-75 hover:opacity-100" />
    </>
    return <MenuDropDown
        menuButtonTitle={menuTitle}
        menuItems={[{ label: <NavigatePage id='profile' url='/settings'>Profile</NavigatePage> }, { label: <NavigatePage id='logout' url='/' type='dispachAction' dispatchFun={logOutUser()}>Logout</NavigatePage> }]}
        menuItemsClass={`bg-gray-800 divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${dropDownClass}`}
        itemClass='text-[#FFFFFF] hover:bg-[#4361EE]'
    />
}
