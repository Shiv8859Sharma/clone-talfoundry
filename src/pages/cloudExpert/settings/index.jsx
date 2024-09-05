import PageHeading from "@/layouts/pageHeading"
import { lazy, memo } from "react";
import Sidebar from "@/components/tabs/sideBarTab";
import { TabGroup, TabPanel } from "@headlessui/react";
import HorinatalTabs from "@/components/tabs/horizontalTabs";
import { useSelector } from "react-redux";
const MyProfile = lazy(() => import('./myProfile'))

const CESettings = () => {

    const sideTabState = useSelector((state) => state?.tabsState?.sidebar_profileItems);

    return (
        <main className="">
            <PageHeading title='Settings' />
            <section className="py-6">
                <div className="default_container max-w-[calc(100%-1rem)] md:max-w-[calc(100%-5rem)] mx-auto">
                    <TabGroup selectedIndex={sideTabState?.selectedIndex}>
                        <div className="content w-full flex flex-col lg:flex-row gap-4">
                            <Sidebar
                                className='lg:w-1/5'
                                name='profileItems'
                            />
                            <div className="steps lg:w-4/5">
                                <TabPanel>
                                    <div id="tab1" className="tab-content right_content rounded-2xl">
                                        <TabGroup>
                                            <div className="flex flex-col gap-4">
                                                <HorinatalTabs
                                                    name='profileItems'
                                                    className='justify-between md:justify-start gap-8 pb-2 px-3 border-b border-[#e4c9f5] bg-white rounded'
                                                    tabClassName='p-2 text-nowrap'
                                                    tabUnActiveClassName='border-b-2 border-transparent'
                                                    tabActiveClassName='border-b-2 border-[#4361EE]'
                                                />
                                                <TabPanel>
                                                    <MyProfile />
                                                </TabPanel>
                                                <TabPanel>
                                                    <div>Content for Horizontal Tab 2</div>
                                                </TabPanel>
                                            </div>
                                        </TabGroup>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div>Password and Security</div>
                                </TabPanel>
                                <TabPanel>
                                    <div>Get Paid</div>
                                </TabPanel>
                                <TabPanel>
                                    <div>Membership</div>
                                </TabPanel>
                                <TabPanel>
                                    <div>Tax Information</div>
                                </TabPanel>
                                <TabPanel>
                                    <div>Notifications Settings</div>
                                </TabPanel>
                            </div>
                        </div>
                    </TabGroup>
                </div>
            </section>
        </main>
    )
}

export default memo(CESettings);