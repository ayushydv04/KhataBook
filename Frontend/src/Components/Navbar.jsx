import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between m-5 items-center">
      <div className="text-3xl font-bold text-gray-700 dark:text-white">
        {/* Khatabook.com */}
      </div>
      <div>
        <ul className="flex gap-10 items-center">
            <Link to='/home'>
                <li className="dark:text-gray-300 cursor-pointer">Home</li>
            </Link>
            
            <Link to="/collaborative">
                <li className="dark:text-gray-300">Collaborative</li>
            </Link>

            <Link to="/ToPay">
                <li className="dark:text-gray-300">To</li>
            </Link>
          
          
          <DarkModeToggle />
          <li>
            <Profile />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
