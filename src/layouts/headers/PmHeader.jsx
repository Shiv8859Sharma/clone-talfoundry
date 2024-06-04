import React, { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon, Cog6ToothIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SvgIcon from "@/assets/svg";
import { GradientButton } from '@/components/buttons';
import Image from '@/components/ImageElement';
import { logOutUser } from '@/globalStates/actions/authAction';
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

    const dropDownLinks = [
        {
            label: 'Hire', icon: <SvgIcon name='user-left-dot-circle' />,
            dropDownList: [
                { label: 'Post a job', href: "/post-a-job" },
                { label: 'My jobs', href: "/my-jobs" },
                { label: 'Cloud Expert', href: "/find-freelancers/search" }
            ]
        },
        {
            label: 'Manage', icon: <SvgIcon name='double-user' />,
            dropDownList: [
                { label: 'My cloud experts', href: "/find-freelancers/hired" },
                { label: 'My proposals', href: "/my-proposals" },
                { label: 'All contracts', href: "/all-contracts" }
            ]
        },
    ]

    const handleHideMobileTab = (event) => {
        const clickedElement = event.target;
        let targetedID = clickedElement.closest('[id]')?.getAttribute('id')
        console.log("elementID :::", targetedID);
        let id = ["findExperts", 'analytics', 'my_jobs', 'post_a_job', 'cloud_expert', 'my_cloud_experts', ' my_proposals', 'all_contracts', 'payments', 'notifications']
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
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6" onClick={handleHideMobileTab}>
                                    <NavigationItem id='findExperts' url='/find-freelancers/search' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                        <div><SvgIcon name='search-dot' /></div>
                                        <div className="text-center">
                                            <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                Search
                                            </span>
                                        </div>
                                    </NavigationItem>
                                    <NavigationItem id='analytics' url='/analytics' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                        <div><SvgIcon name='analytics-graph' /></div>
                                        <div className="text-center">
                                            <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                Analytics
                                            </span>
                                        </div>
                                    </NavigationItem>
                                    {dropDownLinks.map((link) => (
                                        <Menu as="div" className="relative" key={link.label}>
                                            <Menu.Button className="flex gap-2 items-center">
                                                <div className='flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4'>
                                                    <div>{link.icon}</div>
                                                    <div className="text-center">
                                                        <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                            {link.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Menu.Button>
                                            <Transition
                                                as={React.Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute left-0 mt-2 z-10 w-56 origin-top-right bg-gray-800 divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        {
                                                            link.dropDownList.map((list) => {
                                                                return (
                                                                    <Menu.Item key={list.label} as='div'
                                                                        className={`px-8 py-3 text-[#FFFFFF] block transition-all duration-300 hover:bg-[#4361EE] hover:scale-105`}
                                                                    >
                                                                        <NavigationItem id={list.label.split(' ').join('_').toLowerCase()} url={list.href}>
                                                                            {list.label}
                                                                        </NavigationItem>
                                                                    </Menu.Item>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    ))}
                                    <NavigationItem id='payments' url='/transactions' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                        <div><SvgIcon name='wallet-payment' /></div>
                                        <div className="text-center">
                                            <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                Payments
                                            </span>
                                        </div>
                                    </NavigationItem>
                                </div>
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6" onClick={handleHideMobileTab}>
                                    <div className="job w-full flex justify-center items-center">
                                        <GradientButton>
                                            <NavigationItem id='post_a_job' url='/post-a-job'>
                                                Post a Job
                                            </NavigationItem>
                                        </GradientButton>
                                    </div>
                                    <div className="icon w-full flex flex-row-reverse lg:flex-row items-center justify-around lg:justify-normal lg:gap-5">
                                        <Menu as="div" className="relative">
                                            <Menu.Button className="transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 p-2 rounded-full">
                                                <Cog6ToothIcon className="w-6 h-6 text-white" />
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

            <header className="bg-[#17181C] py-2">
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
                                    <NavigationItem id='findExperts' url='/find-freelancers/search' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                        <div><SvgIcon name='search-dot' /></div>
                                        <div className="text-center">
                                            <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                Search
                                            </span>
                                        </div>
                                    </NavigationItem>
                                    <NavigationItem id='analytics' url='analytics' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                        <div><SvgIcon name='analytics-graph' /></div>
                                        <div className="text-center">
                                            <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                Analytics
                                            </span>
                                        </div>
                                    </NavigationItem>
                                    {dropDownLinks.map((link) => (
                                        <Menu as="div" className="relative" key={link.label}>
                                            <Menu.Button className="flex gap-2 items-center">
                                                <div className='flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4'>
                                                    <div>{link.icon}</div>
                                                    <div className="text-center">
                                                        <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                            {link.label}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Menu.Button>
                                            <Transition
                                                as={React.Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute left-0 mt-2 z-10 w-56 origin-top-right bg-gray-800 divide-y divide-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1">
                                                        {
                                                            link.dropDownList.map((list) => {
                                                                return (
                                                                    <Menu.Item key={list.label} as='div'
                                                                        className={`px-8 py-3 text-[#FFFFFF] block transition-all duration-300 hover:bg-[#4361EE] hover:scale-105`}
                                                                    >
                                                                        <NavigationItem id={list.label} url={list.href}>
                                                                            {list.label}
                                                                        </NavigationItem>
                                                                    </Menu.Item>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    ))}
                                    <NavigationItem id='payments' url='/transactions' className="flex items-center gap-3 lg:flex-col gap-1 transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 px-4">
                                        <div><SvgIcon name='wallet-payment' /></div>
                                        <div className="text-center">
                                            <span className="font-figtree text-right text-sm text-[#FFFFFF]">
                                                Payments
                                            </span>
                                        </div>
                                    </NavigationItem>
                                </div>
                            </div>

                            <div className="ml-auto flex items-center">

                                <div className="profile hidden lg:flex items-center gap-6 px-5 lg:px-0">
                                    <div className="job w-full flex justify-center items-center">
                                        <GradientButton>
                                            <NavigationItem id='postAJob' url='/post-a-job'>
                                                Post a Job
                                            </NavigationItem>
                                        </GradientButton>
                                    </div>

                                    <div className="icon w-full flex flex-row-reverse lg:flex-row items-center justify-around lg:justify-normal lg:gap-5">
                                        <Menu as="div" className="relative">
                                            <Menu.Button className="transition-all duration-300 hover:bg-[#FFFFFF1A] opacity-75 hover:opacity-100 p-2 rounded-full">
                                                <Cog6ToothIcon className="w-6 h-6 text-white" />
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
