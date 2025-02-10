import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
// import { SlCalender } from "react-icons/sl";

import DatePicker from "react-datepicker"; // Import the DatePicker component
import "react-datepicker/dist/react-datepicker.css"; // Import the date picker styles
import { SlCalender } from "react-icons/sl"; // Your calendar icon
import CustomDatePicker from "./CustomDatePicker";

const Filters = () => {
  const { theme } = useContext(ThemeContext);

  const [selectedDate, setSelectedDate] = useState(null); // State to hold the selected date
  const [showDatePicker, setShowDatePicker] = useState(false); // State to control the visibility of the date picker

  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the state with the selected date
    setShowDatePicker(false); // Hide the date picker after selection
  };

  return (
    <div className="p-4 flex items-center">
      <ul className="flex gap-10 items-center">
        {/* Heading */}
        <li
          className={`text-lg font-bold ${
            theme === "dark" ? "text-white" : "text-gray-600"
          } `}
        >
          Filters
        </li>

        {/* Date Selector */}
        <li className="flex items-center gap-2">
          <label
            className={` text-sm font-medium ${
              theme === "dark" ? "text-white" : "text-gray-600"
            }`}
          >
            By Date
          </label>
          <CustomDatePicker />
        </li>

        {/* Recent Dropdown */}
        <li>
          <div>
            <select className="w-26 px-3 py-1.5 bg-blue-500 text-white rounded-md">
              <option value="today">Recent</option>
              <option value="today">Today</option>
              <option value="this-week">This Week</option>
              <option value="this-month">This Month</option>
              <option value="this-year">Year</option>
            </select>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Filters;
