import { Fragment, memo, useState } from 'react';
import { Dialog, DialogPanel, Popover, PopoverPanel, Transition, TransitionChild } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { popupOpen } from '@/globalStates/actions/PopupAction';
import SvgIcon from "@/assets/svg";
import HamburgerButton from '../../components/buttons/hamburgerButton';
import NavigatePage from '../../components/navigatePage';

// Main LandingPageHeader component
const LandingPageHeader = () => {
    const [open, setOpen] = useState(false);

    const handleHideMobileTab = (event) => {
        const clickedElement = event.target;
        let targetedID = clickedElement.closest('[id]')?.getAttribute('id')
        console.log("elementID :::", targetedID);
        let id = ["findExperts", 'findWork', 'awsAdvisory', 'salesforceAdvisory', 'howItWorks', 'helpCenter', 'login', 'signUp', 'payments', 'notifications']
        if (id.includes(targetedID) && open) {
            setOpen(false)
        }
    }

    const openPopup = (id) => {
        return popupOpen({
            type: id,
            open: true,
            className: 'w-[95%] md:w-[90%] xl:w-[80%] 3xl:w-[70%]'
        });
    }
    return (
        <div className="bg-white">
            {/* Mobile menu */}
            <Transition show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <TransitionChild
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-white bg-opacity-25" />
                    </TransitionChild>

                    <div className="fixed top-20 inset-0 z-40 flex">
                        <TransitionChild
                            as={Fragment}
                            enter="transition ease-in-out duration-700 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-700 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <DialogPanel className="relative flex w-full flex-col overflow-y-auto overflow-x-hidden bg-white pb-12 shadow-xl">
                                <div className="lg:hidden floating_item_3 bg-[#4CC9F066] -rotate-[10deg] blur-[150px] w-64 h-64 absolute top-[0%] -left-[30%]" />
                                <div className="lg:hidden floating_item_4 bg-[#7209B766] rotate-[10deg] blur-[150px] w-64 h-64 absolute bottom-[0%] -right-[30%]" />
                                {/* Mobile Navigation Links */}
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6 z-20" onClick={handleHideMobileTab}>
                                    <NavigatePage id='findExperts' url='/search-freelancer' className="flow-root cursor-pointer">
                                        <div className="-m-2 block p-2 font-medium text-gray-900">Find Experts</div>
                                    </NavigatePage>
                                    <NavigatePage id='findWork' url='/search-job' className="flow-root cursor-pointer">
                                        <div className="-m-2 block p-2 font-medium text-gray-900">Find Work</div>
                                    </NavigatePage>
                                    <div className="flow-root max-w-sm">
                                        <Popover className="relative">
                                            {({ open }) => (
                                                <>
                                                    <Popover.Button className='group inline-flex items-center rounded-md'>
                                                        <span>Services</span>
                                                        <ChevronDownIcon className="ml-2 h-5 w-5 transition duration-150 ease-in-out" aria-hidden="true" />
                                                    </Popover.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                                                <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                                                    <NavigatePage id='awsAdvisory' url='/advisory-services/aws-advisory-services' className="-m-3 flex items-center rounded-lg p-2 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                                                        <div className="ml-4">
                                                                            <p className="text-sm font-medium text-gray-900">Aws Advisory</p>
                                                                        </div>
                                                                    </NavigatePage>
                                                                    <NavigatePage id='salesforceAdvisory' url='/advisory-services/salesforce-advisory-services' className="-m-3 flex items-center rounded-lg p-2 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                                                        <div className="ml-4">
                                                                            <p className="text-sm font-medium text-gray-900">Salesforce Advisory</p>
                                                                        </div>
                                                                    </NavigatePage>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    </div>
                                </div>
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6 z-10" onClick={handleHideMobileTab}>
                                    <NavigatePage id='howItWorks' url='/how-it-works' className="flow-root cursor-pointer">
                                        <div className="-m-2 block p-2 font-medium text-gray-900">How It Works</div>
                                    </NavigatePage>
                                    <NavigatePage id='helpCenter' url='/help-center' className="flow-root cursor-pointer">
                                        <div className="-m-2 block p-2 font-medium text-gray-900">Help Center</div>
                                    </NavigatePage>
                                    <NavigatePage id='login' type='dispachAction' dispatchFun={openPopup('login')} className="flow-root cursor-pointer">
                                        <div className="-m-2 block p-2 font-medium text-gray-900">Login</div>
                                    </NavigatePage>
                                    <NavigatePage id='signUp' type='dispachAction' dispatchFun={openPopup('signUp')} className="mx-4 text-center">
                                        <div className="px-6 py-3 cursor-pointer inline whitespace-nowrap rounded-full font-semibold text-[#ECF9FD] hover:text-[#ECF9FD] focus:text-[#ECF9FD] text-base bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] focus:no-underline to-84.4% transition-all duration-200 ease-linear lg:hover:bg-gradient-to-tr">
                                            Sign up
                                        </div>
                                    </NavigatePage>
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>

            <header className="fixed w-full bg-white z-40">
                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center justify-center lg:justify-between">
                            {/* Mobile menu button */}
                            <HamburgerButton setToggelMenu={setOpen} isOpen={open} />

                            {/* Logo */}
                            <div className="ml-4 flex lg:ml-0">
                                <NavigatePage id='logo' url='/' className="flex justify-center items-center cursor-pointer">
                                    <span className="sr-only">Your Company</span>
                                    <SvgIcon name='logo' folderName='commonAssets' outSide='..' className="w-7 h-5" />
                                    <span className="font-bold text-2xl lg:text-3xl text-[#0F2830] hover:text-[#0F2830]">Talfoundry</span>
                                </NavigatePage>
                            </div>

                            {/* Desktop Navigation Links */}
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <NavigatePage id='findExperts' url='/search-freelancer' className="text-[#17181C]">
                                        <div className="text-[#17181C] text-base cursor-pointer px-3 py-2 rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#D9DFFC]">Find Experts</div>
                                    </NavigatePage>
                                    <NavigatePage id='findWork' url='/search-job' className="text-[#17181C]">
                                        <div className="text-[#17181C] text-base cursor-pointer px-3 py-2 rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#D9DFFC]">Find Work</div>
                                    </NavigatePage>
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <div className="text-[#17181C] text-base cursor-pointer rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#D9DFFC]">
                                                    <Popover.Button className='group inline-flex items-center rounded-md outline-0 px-3 py-2'>
                                                        <span>Services</span>
                                                        <ChevronDownIcon className="ml-2 h-5 w-5 transition duration-150 ease-in-out" aria-hidden="true" />
                                                    </Popover.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <PopoverPanel className="absolute left-full z-10 mt-3 w-screen -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-48">
                                                        {({ close }) => (
                                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5" onClick={close}>
                                                                <div className="relative bg-white p-2">
                                                                    <NavigatePage id='awsAdvisory' url='/advisory-services/aws-advisory-services' className="-m-3 flex items-center rounded-lg cursor-pointer p-4 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                                                        <div className="ml-4">
                                                                            <p className="text-sm font-medium text-gray-900">Aws Advisory</p>
                                                                        </div>
                                                                    </NavigatePage>
                                                                    <NavigatePage id='salesforceAdvisory' url='/advisory-services/salesforce-advisory-services' className="-m-3 flex items-center rounded-lg p-4 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">
                                                                        <div className="ml-4">
                                                                            <p className="text-sm font-medium text-gray-900">Salesforce Advisory</p>
                                                                        </div>
                                                                    </NavigatePage>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </PopoverPanel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                    <NavigatePage id='howItWorks' url='/how-it-works' className="text-[#17181C]">
                                        <div className="text-[#17181C] text-base cursor-pointer px-3 py-2 rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#D9DFFC]">How It Works</div>
                                    </NavigatePage>
                                    <NavigatePage id='helpCenter' url='/help-center' className="text-[#17181C]">
                                        <div className="text-[#17181C] text-base cursor-pointer px-3 py-2 rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#D9DFFC]">Help Center</div>
                                    </NavigatePage>
                                </div>
                            </div>

                            {/* Desktop Login and Sign Up */}
                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <NavigatePage id='login' dispatchFun={openPopup('signUp')} type='dispachAction' className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        <div className="text-[#17181C] text-base cursor-pointer px-3 py-2 rounded-full transition-all duration-200 ease-linear lg:hover:bg-[#D9DFFC]">Login</div>
                                    </NavigatePage>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    <NavigatePage id='signUp' dispatchFun={openPopup('signUp')} type='dispachAction' className="px-6 py-3 whitespace-nowrap rounded-full font-semibold text-[#ECF9FD] hover:text-[#ECF9FD] focus:text-[#ECF9FD] text-base cursor-pointer bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] focus:no-underline to-84.4% transition-all duration-200 ease-linear lg:hover:bg-gradient-to-tr">
                                        Sign up
                                    </NavigatePage>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default memo(LandingPageHeader);
