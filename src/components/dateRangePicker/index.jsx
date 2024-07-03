
// src/DateRangePicker.js
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { Popover, PopoverButton, PopoverPanel, Transition } from '@headlessui/react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import formatDate from '../../utills/formatDate';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { GradientButton, OutlineButton } from '@/components/buttons';
import { Placeholder } from 'react-select/animated';

const DateRangePicker = (props) => {
  let { labelClass = '', label = '', containerClass = '', placeholder = '', message = '', errorElement = 'span', errorMessageClassName = '', maxDate = new Date(), minDate=new Date(725866200000) } = props
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      color: '#644acb',
    }
  ]);

  const [selectedDateRange, setSelectedDateRange] = useState('')

  const handleApplyData = (closePopup) => {
    let { startDate, endDate } = range[0]
    console.log(startDate, endDate, "range");
    setSelectedDateRange({
      startDate,
      endDate
    })
    closePopup();
  }

  const handleClose = (close) => {
    close();
    setRange(
      [{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
        color: '#644acb',
      }]
    )
  }
  return (
    <Popover className="relative">
      <div className="w-full flex flex-col gap-2.5 z-0">
        <div className="input-container">
          <div className={`flex flex-col gap-2.5 ${containerClass}`}>
            <label className={`text-[#17181C] font-bold text-nowrap ${labelClass}`} htmlFor={`${name}Id`}>{label}</label>
            <PopoverButton className="flex justify-between items-center px-4 py-[0.57rem] border border-[#BBBDC8] rounded-full w-80 focus:outline-none">
              <div className="text-md text-gray-600">
                {selectedDateRange ? `${formatDate(selectedDateRange?.startDate, 'mm dd, yyyy', 'short')} - ${formatDate(selectedDateRange?.endDate, 'mm dd, yyyy', 'short')}` : placeholder || 'Please select a Date range'}
              </div>
              <ChevronDownIcon className="size-8 text-gray-500" />
            </PopoverButton>
            <input
              type="hidden"
              name="startDate"
              value={selectedDateRange?.startDate}
            />
            <input
              type="hidden"
              name="endDate"
              value={selectedDateRange?.endDate}
            />
          </div>
        </div>
        <Transition show={message !== ''} as={errorElement} className={`error-container text-red-700 font-medium text-sm ${errorMessageClassName}`} >
          {message}
        </Transition>
      </div>
      <PopoverPanel className="absolute z-10 mt-2 w-auto bg-white border border-gray-300 rounded-lg shadow-lg">
        {({ close }) => (
          <>
            <DateRange
              ranges={range}
              onChange={(item) => setRange([item.selection])}
              months={1}
              direction="vertical"
              showMonthAndYearPickers={true}
              maxDate={maxDate}
              minDate={minDate}
            />
            <div className="flex gap-2 justify-end lg:items-end lg:w-full mb-4 px-2">
              <div>
                <OutlineButton
                  type='button'
                  className='px-2 py-2'
                  onClick={() => handleClose(close)}
                >
                  Cancel
                </OutlineButton>
              </div>
              <div className="">
                <GradientButton
                  type='button'
                  onClick={() => handleApplyData(close)}
                >
                  Apply
                </GradientButton>
              </div>
            </div>
          </>
        )}
      </PopoverPanel>
    </Popover>
  );
};

export default DateRangePicker;
