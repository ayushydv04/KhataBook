import React from "react";
import { Link } from "react-router-dom";
import HisaabCardAvailable from "../Components/HisaabCardAvailable";
import HisaabCardEncrypted from "../Components/HisaabCardEncrypted";
import Profile from "../Components/Profile";

import Navbar from "../Components/Navbar";
import Filters from "../Components/Filters";

const Home = () => {
  return (
    <div className="ml-15">
        {/* Navbar */}
        <Navbar/>

        <div>
            <div className="flex h-20 ">
            <Link to="/create-hisaab">
            <h3 className="w-60 h-10 pt-1.5 ml-5 mt-10 block border rounded-md text-center cursor-pointer">
              Create New Hisaab
            </h3>
          </Link>
            </div>


            {/* Filters */}
            <Filters />


            {/* Cards ki mapping wth data from backend */}
            <div className="flex p-4 gap-10 flex-wrap">

                <HisaabCardEncrypted/>
                <HisaabCardEncrypted/>

                <HisaabCardAvailable/>
                <HisaabCardAvailable/>
            </div>


        </div>


    </div>
  );
};

export default Home;
