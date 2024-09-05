import React, { memo, useEffect, useState } from 'react';
import PageHeading from '@/layouts/pageHeading';
import { SelectField } from '@/components/formFields';
import { GradientButton, OutlineButton } from '@/components/buttons';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsHistory } from '../../globalStates/actions/transactionsAction';
import { resetReduxState } from '../../globalStates/actions/commanAction';
import CommonTable from '../../components/commonTable';
import CustomDatePicker from '../../components/dateRangePicker';

const Transactions = () => {
    const dispatch = useDispatch()
    const transactions = useSelector(state => state?.transactions?.transactions)
    const isLoading = useSelector((state => state.loader?.isLoading))

    useEffect(() => {
        dispatch(getTransactionsHistory())

        return (() => {
            dispatch(resetReduxState('transactions'))
        })
    }, [])

    let columns = [
        {
            label: 'DATE',
            valueKey: 'date',
            className: 'pt-3 px-8',
            tdClassname: 'pt-3 px-8'
        },
        {
            label: 'TYPE',
            valueKey: 'transaction_type',
            tdClassname: 'pr-2',
            className: 'pr-2',
        },
        {
            label: 'CLOUD EXPERT',
            valueKey: 'cloud_expert_name',
            tdClassname: 'pr-2',
            className: 'pr-2',
        },
        {
            label: 'AMOUNT/BALANCE',
            valueKey: 'amount/balance',
            tdClassname: 'pr-2',
            className: 'pr-2',
        },
        {
            label: 'REF ID',
            valueKey: 'reference_id',
            tdClassname: 'pr-2 text-[#4361EE]',
            render: (item) => (
                <button onClick={() => handleReferenceIdClick(item.reference_id)}>
                    {item.reference_id}
                </button>
            ),
            className: 'pr-2 ',
        },
        {
            label: 'PAYMENT MODE',
            valueKey: 'payment_mode',
            tdClassname: 'pr-2',
            className: 'pr-2',
        }
    ]

    const handleReferenceIdClick = (referenceId) => {
        alert(`Reference ID clicked: ${referenceId}`);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form)
        let data = Object.fromEntries(formData.entries())
        console.log(": data :::", data);
    }

    return (
        <main className='overflow-hidden'>
            <PageHeading title='Payment' />
            <section className="py-6">
                <div
                    className="default_container max-w-md sm:max-w-[calc(100%-80px)] lg:max-w-[calc(100%-80px)] 3xl:max-w-[1440px] mx-auto overflow-hidden"
                >
                    <div className="p-10 bg-[#FFFFFF] rounded-lg border border-slate-300">
                        <form onSubmit={handleFormSubmit}>
                            <div className="flex flex-col lg:flex-row gap-5 flex-wrap lg:flex-nowrap">
                                <div className="flex flex-col lg:flex-row gap-5 lg:w-full" >
                                    <div className="flex flex-col lg:flex-row lg:items-start gap-5 w-full">
                                        <CustomDatePicker
                                            label='Statement Period'
                                        />

                                        <SelectField
                                            label='Transaction Type'
                                            name='transaction_type'
                                            placeholder='Filter by transaction type'
                                            options={['Hourly', 'Fixed']}
                                        />

                                        <SelectField
                                            label='Cloud Expert'
                                            name='cloudExpert'
                                            placeholder='Filter by cloud expert'
                                            options={['Shiv', 'Shivam', 'Rohan']}
                                        />

                                    </div>
                                </div>

                                <div className="flex gap-2 justify-between lg:items-end lg:w-full mb-4">
                                    <div>
                                        <OutlineButton
                                            type='submit'
                                        >
                                            Apply
                                        </OutlineButton>
                                    </div>
                                    <div className="">
                                        <GradientButton
                                            type='button'
                                        >
                                            Download Invoices
                                        </GradientButton>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <CommonTable
                        columns={columns}
                        theadClassName="font-figtree font-semibold text-sm leading-[20px] text-justify bg-[#F1F2F4] rounded-lg text-nowrap whitespace-nowrap"
                        tbodyClassName="font-figtree font-normal text-sm leading-[21px] text-justify text-nowrap whitespace-nowrap"
                        data={transactions}
                        noDataAvailableMessage={'No data available'}
                        isLoading={isLoading}
                    // pagination={true}
                    // totalItems={10}
                    />
                </div>
            </section>
        </main>
    );
};

export default memo(Transactions);

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