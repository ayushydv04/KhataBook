import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const CustomDatePicker = () => {

  const {theme} = useContext(ThemeContext);

  const [selectedDate, setSelectedDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="relative inline-block">
      <button className="flex items-center space-x-2" onClick={() => setIsOpen(!isOpen)}>
        <Calendar className={`w-5 h-5 ${theme === "dark" ? "text-white" : "text-gray-600"}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg p-2">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setIsOpen(false);
            }}
            inline
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
