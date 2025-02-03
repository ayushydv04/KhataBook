import React, { useState } from "react";

const ProfilePopUp = ({ onClose }) => {
  // Mock existing data for the profile
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    image:
      "https://plus.unsplash.com/premium_photo-1721597102419-629da328872f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[400px] relative">
        <div className="flex gap-6">
          {/* Left Side: Profile Image */}
          <div className="flex flex-col items-center gap-2">
            <img
              src={profileData.image}
              alt="Profile"
              className="w-24 h-24 rounded-full border"
            />
            <button className="text-sm text-blue-600 underline">Edit</button>
          </div>

          {/* Right Side: Profile Info */}
          <div className="flex flex-col gap-4 w-60">
            <div>
              <label className="block text-sm text-gray-600">Name</label>
              <input
                type="text"
                value={profileData.name}
                readOnly
                className="w-full border rounded px-2 py-1 focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={profileData.email}
                readOnly
                className="w-full border rounded px-2 py-1 focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600">Phone</label>
              <input
                type="tel"
                value={profileData.phone}
                readOnly
                className="w-full border rounded px-2 py-1 focus:outline-none bg-gray-100"
              />
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700">
              Edit
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default ProfilePopUp;
