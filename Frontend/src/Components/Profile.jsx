import React, { useState } from 'react';
import ProfilePopUp from './ProfilePopUp';

const Profile = () => {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfilePopupOpen(true); // Open the ProfilePopup when "My Profile" is clicked
  };

  const closeProfilePopup = () => {
    setIsProfilePopupOpen(false); // Close the ProfilePopup
  };

  return (
    <div className="group relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1721597102419-629da328872f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        className="w-10 h-10 cursor-pointer rounded-full"
        alt="Profile"
      />
      {/* Dropdown menu */}
      <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
          <p
            className="cursor-pointer hover:text-black"
            onClick={handleProfileClick} // Open ProfilePopup
          >
            My Profile
          </p>
          <p className="cursor-pointer hover:text-black">Order</p>
          <p className="cursor-pointer hover:text-black">Logout</p>
        </div>
      </div>

      {/* Render the ProfilePopup */}
      {isProfilePopupOpen && <ProfilePopUp onClose={closeProfilePopup} />}
    </div>
  );
};

export default Profile;
