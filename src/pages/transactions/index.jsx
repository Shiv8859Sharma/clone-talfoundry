import React, { useState } from 'react';
import PageHeading from '../../layouts/pageHeading';
import { SelectField } from '../../components/formFields';
import { GradientButton, OutlineButton } from '../../components/buttons';

const Transactions = () => {
    const [showModal, setShowModal] = useState(false);

    const display = () => {
        setShowModal(!showModal);
    };

    return (
        <main className='overflow-hidden'>
            <PageHeading title='Payment' />
            <section className="py-6">
                <div
                    className="default_container max-w-md sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto overflow-hidden"
                >
                    <div className="p-10 bg-[#FFFFFF] rounded-lg border border-slate-300">
                        <div className="flex flex-col lg:flex-row gap-5 flex-wrap lg:flex-nowrap">
                            <div className="flex flex-col lg:flex-row gap-5 lg:w-full" >
                                <div className="flex flex-col lg:flex-row lg:items-center gap-5 w-full">
                                    <div className="flex flex-col gap-2.5 w-full">
                                        <SelectField
                                            label='Statement Period'
                                            placeholder='May 19, 2024 - Jun 19, 2024'
                                            options={[]}
                                        />
                                    </div>

                                    <div className="relative flex flex-col justify-between items-center gap-2.5 w-full">
                                        <SelectField
                                            label='Transaction Type'
                                            placeholder='Filter by transaction type'
                                            options={[]}
                                        />
                                    </div>

                                    <div className="relative flex flex-col justify-between items-center gap-2.5 w-full">
                                        <SelectField
                                            label='Cloud Expert'
                                            placeholder='Filter by cloud expert'
                                            options={[]}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 justify-between lg:items-end lg:w-full mb-3">
                                <doiv>
                                    <OutlineButton>
                                        Apply
                                    </OutlineButton>
                                </doiv>
                                <div className="">
                                    <GradientButton>
                                        Download Invoices
                                    </GradientButton>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Table --> */}
                    <div className="overflow-x-scroll lg:overflow-x-auto pt-10 mt-4 bg-[#FFFFFF] rounded-lg border border-slate-300">

                        {/* Table */}
                        <div className=" overflow-x-auto">
                            <table class="w-full">
                                <thead class="font-figtree font-semibold text-sm leading-[20px] text-justify bg-[#F1F2F4] rounded-lg">
                                    <tr><th class="pt-3 px-8">DATE</th>
                                        <th>TYPE</th>
                                        <th>CLOUD EXPERT</th>
                                        <th>AMOUNT/BALANCE</th>
                                        <th>REF ID</th>
                                        <th>PAYMENT MODE</th>
                                    </tr></thead>
                                <tbody class="font-figtree font-normal text-sm leading-[21px] text-justify">
                                    <tr>
                                        <td class="py-4 px-8">Jul 24, 2023</td>
                                        <td>Fixed Price</td>
                                        <td>Sherry Donald</td>
                                        <td>$70.00 / $0.00</td>
                                        <td>303948274</td>
                                        <td>Escrow</td>
                                    </tr>

                                    <tr>
                                        <td class="py-4 px-8">Jul 16, 2023</td>
                                        <td>Hourly</td>
                                        <td>Nick Samson</td>
                                        <td>$200.00 / $70.00</td>
                                        <td>303948273</td>
                                        <td>Credit Card</td>
                                    </tr>

                                    <tr>
                                        <td class="py-4 px-8">Jul 16, 2023</td>
                                        <td>Payment</td>
                                        <td>Nick Samson</td>
                                        <td>$200.00 / $70.00</td>
                                        <td>303948272</td>
                                        <td>Escrow</td>
                                    </tr>

                                    <tr>
                                        <td class="py-4 px-8">Jul 16, 2023</td>
                                        <td>Payment</td>
                                        <td>Nick Samson</td>
                                        <td>$70.00 / $0.00</td>
                                        <td>303948271</td>
                                        <td>Escrow</td>
                                    </tr>

                                    <tr>
                                        <td class="py-4 px-8">Jul 16, 2023</td>
                                        <td>Payment</td>
                                        <td>Nick Samson</td>
                                        <td>$30.00 / $270.00</td>
                                        <td>303948270</td>
                                        <td>...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Transactions;

{/* {showModal && (
                        <div className="fixed z-10 overflow-y-auto top-0 w-full left-0 flex justify-center items-center h-full bg-gray-800 bg-opacity-75">
                            <div className="p-10 flex flex-col gap-10 w-full max-w-lg bg-white rounded-lg border border-gray-200">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-2xl">Transaction details</span>
                                    <img
                                        src="../assets/Payment/close-circle.svg"
                                        alt="Close"
                                        className="cursor-pointer"
                                        onClick={display}
                                    />
                                </div>

                                <div className="flex flex-col gap-5">
                                    <div className="flex">
                                        <div className="w-48">
                                            <span className="font-bold text-base text-gray-900">Reference ID</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span>303948271</span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="w-48">
                                            <span className="font-bold text-base text-gray-900">Date</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span>Jul 2, 2023</span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="w-48">
                                            <span className="font-bold text-base text-gray-900">Payment Type</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span>Fixed Price</span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="w-48">
                                            <span className="font-bold text-base text-gray-900">Description</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span>
                                                Fixed Price (USA) - Service Fee - Ref ID 596994963
                                                <br />
                                                Country: USA <br />
                                                Amount: $3000.00 USD
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="w-48">
                                            <span className="font-bold text-base text-gray-900">Client</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span>Abraham Coker</span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="w-48">
                                            <span className="font-bold text-base text-gray-900">Cloud Expert</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span>Nick Samson</span>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="w-48">
                                            <span className="font-bold text-base text-gray-900">Amount</span>
                                        </div>
                                        <div className="text-gray-700">
                                            <span>($3000)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )} */}