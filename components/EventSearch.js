import React, { useRef } from "react";

function EventSearch({ handleFilter }) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();
  const filter = () => {
    let year = yearInputRef.current.value;
    let month = monthInputRef.current.value;
    handleFilter(year, month);
  };
  return (
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <select
          ref={yearInputRef}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div className="relative flex-grow w-full">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <select
          ref={monthInputRef}
          className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <button
        onClick={filter}
        className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Button
      </button>
    </div>
  );
}

export default EventSearch;
