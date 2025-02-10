import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../api/axiosInstance';
import ProfilePopUp from './ProfilePopUp';
import { ThemeContext } from '../context/ThemeContext';

const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfilePopupOpen(true);
  };

  const closeProfilePopup = () => {
    setIsProfilePopupOpen(false);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await API.post('/auth/logout', {}, { withCredentials: true });
      toast.success('Logged out successfully');
      navigate('/'); // Redirect to login/signup page
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed');
      console.error("Logout Error:", error.response?.data);
    }
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
        <div className={`flex flex-col gap-2 w-36 py-3 px-5 ${theme === "dark" ? "bg-[#2c2c2c] text-[#e9e9e9]" : "bg-slate-100 text-gray-500"} rounded`}>
          <p className="cursor-pointer hover:text-black" onClick={handleProfileClick}>
            My Profile
          </p>
          <p className="cursor-pointer hover:text-black">Order</p>
          <p className="cursor-pointer hover:text-black" onClick={handleLogout}>
            Logout
          </p>
        </div>
      </div>

      {/* Render the ProfilePopup */}
      {isProfilePopupOpen && <ProfilePopUp onClose={closeProfilePopup} />}
    </div>
  );
};

export default Profile;
