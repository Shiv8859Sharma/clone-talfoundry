import React, { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, ChatBubbleLeftRightIcon, ChevronDownIcon, Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SvgIcon from "@/assets/svg";
import Image from '@/components/ImageElement';
import { logOutUser } from '@/globalStates/actions/authAction';
import { InputField } from '@/components/formFields';
import MenuDropDown from '@/components/dropDown';
import NotificationDropDown from '@/components/notificationDropDown';

// Helper component to handle navigation and dialog
const NavigationItem = ({ id, url, children, className }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        if (id === 'logout') {
            dispatch(logOutUser())
        } else if (url) {
            navigate(url);
        }
    };

    return (
        <div id={id} data-url={url} className={`cursor-pointer ${className}`} onClick={handleClick}>
            {children}
        </div>
    );
};

// Main ProjectManagerHeader component
const ProjectManagerHeader = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { pathname } = useLocation()
    let showSearchField = pathname !== '/find-work';

    const centerLinks = [
        { href: '/my-jobs', label: 'My Jobs', iconName: 'outline-briefcase' },
        { href: '/all-contracts', label: 'Contracts', iconName: 'header-contract-icon' },
        { href: '/transactions', label: 'Payments', iconName: 'wallet-payment' },
        { href: '/analytics', label: 'Analytics', iconName: 'analytics-graph' },
    ]

    let searchIcon = <div className="bg-gradient-to-r from-[#4361EE] to-[#7209B7] cursor-pointer rounded-full p-2">
        <button type='submit'>
            <SvgIcon name='search-dot' />
        </button>
    </div>

    const hadnleFindFreelancer = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let data = Object.fromEntries(formData.entries());
        navigate('/find-work', {
            state: { search: data?.find_work },
        })
        setOpen(false)
    }

    const handleHideMobileTab = (event) => {
        const clickedElement = event.target;
        let targetedID = clickedElement.closest('[id]')?.getAttribute('id')
        let id = ["messages", 'settings', 'profile', 'notifications', 'my_jobs', 'contracts', 'payments', 'analytics']
        if (id.includes(targetedID) && open) {
            setOpen(false)
        }
    }

    return (
        <div className="bg-[#17181C] w-full">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#17181C] bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-700 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full flex-col overflow-y-auto overflow-x-hidden bg-[#17181C] pb-12 shadow-xl">
                                <div className="lg:hidden floating_item_3 bg-[#4CC9F066] -rotate-[10deg] blur-[150px] w-64 h-64 absolute top-[0%] -left-[30%]" />
                                <div className="lg:hidden floating_item_4 bg-[#7209B766] rotate-[10deg] blur-[150px] w-64 h-64 absolute bottom-[0%] -right-[30%]" />
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Mobile Navigation Links */}
                                {showSearchField &&
                                    <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                        <div className="freelancer-serach w-full flex justify-center items-center">
                                            <form onSubmit={hadnleFindFreelancer}>
                                                <InputField name='find_work' type='text' inputClass='text-[#BBBDC8] w-full px-2.5 font-figtree font-normal text-base leading-[18px]' rightIcon={searchIcon} rightIconClass={'w-auto'} />
                                            </form>
                                        </div>
                                    </div>
                                }


                                <div className="space-y-6 border-t border-gray-200 px-4 py-6" onClick={handleHideMobileTab}>
                                    {centerLinks.map(({ label, href, iconName }) => {
                                        return (
                                            <NavigationItem key={label} id={label.split(' ').join('_').toLowerCase()} url={href} className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                                <div><SvgIcon name={iconName} /></div>
                                                <div className="text-center">
                                                    <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                        {label}
                                                    </span>
                                                </div>
                                            </NavigationItem>
                                        )
                                    })}
                                </div>
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6" onClick={handleHideMobileTab}>
                                    <div className="icon w-full flex flex-row-reverse lg:flex-row items-center justify-around lg:justify-normal lg:gap-5">
                                        <Menu as="div" className="relative">
                                            <Menu.Button className="transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 p-2 rounded-full">
                                                <NavigationItem id='messages' url='/messages' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                                                </NavigationItem>
                                            </Menu.Button>
                                        </Menu>

                                        <Menu as="div" className="relative">
                                            <Menu.Button className="transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 p-2 rounded-full">
                                                <NavigationItem id='settings' url='/settings' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                                    <Cog6ToothIcon className="w-6 h-6 text-white" />
                                                </NavigationItem>
                                            </Menu.Button>
                                        </Menu>

                                        <NotificationDropDown />

                                        <ProfileMenuButton dropDownClass='' />

                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="bg-[#17181C] py-3">
                <nav aria-label="Top" className="mx-auto max-w-[95rem] px-4 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="flex h-16 items-center justify-center lg:justify-between">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                className="relative rounded-md bg-[#17181C] p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <div className="m-auto lg:ml-0">
                                <NavigationItem id='home' url='/' className={'cursor-pointer'}>
                                    <div className="flex items-center gap-[6px] hover:opacity-100">
                                        <span className="sr-only">Your Company</span>
                                        <SvgIcon name='logo' folderName='commonAssets' outSide='..' className="w-7 h-5" />
                                        <span className="font-bold text-2xl lg:text-3xl text-[#ffffff] hover:text-[#ffffff]">Talfoundry</span>
                                    </div>
                                </NavigationItem>
                            </div>

                            {/* Desktop Navigation Links */}
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end gap-2">
                                    {showSearchField &&
                                        <div>
                                            <form onSubmit={hadnleFindFreelancer}>
                                                <InputField name='find_work' type='text' inputClass='text-[#BBBDC8] w-full px-2.5 font-figtree font-normal text-base leading-[18px]' rightIcon={searchIcon} rightIconClass={'w-auto'} />
                                            </form>
                                        </div>
                                    }

                                    {centerLinks.map(({ label, href, iconName }) => {
                                        return (
                                            <NavigationItem key={label} id={label.split(' ').join('_').toLowerCase()} url={href} className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                                <div><SvgIcon name={iconName} /></div>
                                                <div className="text-center">
                                                    <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                        {label}
                                                    </span>
                                                </div>
                                            </NavigationItem>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="ml-auto flex items-center">

                                <div className="profile hidden lg:flex items-center gap-6 px-5 lg:px-0">


                                    <div className="icon w-full flex flex-row-reverse lg:flex-row items-center justify-around lg:justify-normal lg:gap-5">
                                        <Menu as="div" className="relative">
                                            <Menu.Button className="transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 p-2 rounded-full">
                                                <NavigationItem id='messages' url='/messages' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                                                </NavigationItem>
                                            </Menu.Button>
                                        </Menu>

                                        <Menu as="div" className="relative">
                                            <Menu.Button className="transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 p-2 rounded-full">
                                                <NavigationItem id='settings' url='/settings' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                                    <Cog6ToothIcon className="w-6 h-6 text-white" />
                                                </NavigationItem>
                                            </Menu.Button>
                                        </Menu>

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

export default ProjectManagerHeader;


const ProfileMenuButton = ({ src = '', dropDownClass = '' }) => {
    let menuTitle = <>
        <Image src={src} type='profile' alt='user-profile' className="w-12 h-12" />
        <ChevronDownIcon className="w-4 h-4 text-white opacity-75 hover:opacity-100" />
    </>
    return <MenuDropDown
        menuButtonTitle={menuTitle}
        menuItems={[{ label: <NavigationItem id='profile' url='/settings'>Profile</NavigationItem> }, { label: <NavigationItem id='logout' url='/'>Logout</NavigationItem> }]}
        menuItemsClass={`bg-gray-800 divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 ${dropDownClass}`}
        itemClass='text-[#FFFFFF] hover:bg-[#4361EE]'
    />
}
