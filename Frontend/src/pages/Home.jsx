import React from "react";

const Home = () => {
  return (
    <div>
        {/* NAV */}
        <div className="flex justify-between m-5 items-center">
            <div className="text-3xl font-bold text-gray-700">
                Khatabook.com
            </div>
            <div>
                <ul className="flex gap-10">
                    <li>light</li>
                    <li>dark</li>
                    <li>sign out</li>
                </ul>
            </div>
        </div>

        <div>
            <div className="flex h-20">
                <h3 className="w-60 h-10  pt-1.5 ml-5 mt-10 block border rounded-md text-center">Create New Hisaab</h3>
            </div>


            {/* Filters */}
            <div className="p-4 flex items-center">
                <ul className="flex gap-10 items-center">
                    {/* Heading */}
                    <li className="text-lg font-bold text-gray-700">Filters</li>
                    
                    {/* Date Selector */}
                    <li className="flex items-center">
                        <label className="block text-sm font-medium text-gray-600">By Date  </label>
                        <input type="date" name="By Date" id="" className="w-5"/>
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

        </div>


    </div>
  );
};

export default Home;
