import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex gap-2 cursor-pointer" onClick={toggleTheme}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center 
          ${theme === "light" ? "bg-yellow-400" : "bg-gray-700"}`}>
        <MdOutlineLightMode className={`${theme === "light" ? "text-black" : "text-white"}`} />
      </div>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center 
          ${theme === "dark" ? "bg-blue-900" : "bg-gray-300"}`}>
        <MdOutlineDarkMode className={`${theme === "dark" ? "text-white" : "text-black"}`} />
      </div>
    </div>
  );
};

export default DarkModeToggle;
