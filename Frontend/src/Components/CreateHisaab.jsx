import React, { useState } from "react";
import Navbar from "./Navbar";

const CreateHisaab = () => {
  const [isEncrypted, setIsEncrypted] = useState(false);
  const [isShareable, setIsShareable] = useState(false);
  const [editPermissions, setEditPermissions] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [hisaabName, setHisaabName] = useState("");
  const [items, setItems] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const hisaabData = {
      hisaabName,
      items: items.split(",").map((item) => item.trim()),
      isEncrypted,
      isShareable,
      editPermissions,
      passcode: isEncrypted ? passcode : null,
    };
    console.log(hisaabData);
    // Add further logic to handle the data submission
  };

  return (
    <div className="ml-15">
        <Navbar/>

        <form 
        onSubmit={handleSubmit} 
        className="ml-5 max-w-[630px] p-6 border rounded space-y-4 bg-white"
        >
        <h1 className="text-xl font-bold text-gray-800">Create New Hisaab</h1>
        <input
            type="text"
            placeholder="Shopping Hisaab, Ghar ka Kharch..."
            value={hisaabName}
            onChange={(e) => setHisaabName(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-blue-500"
            />
        <textarea
            placeholder="Daal, Aata, Cheeni"
            value={items}
            onChange={(e) => setItems(e.target.value)}
            className="w-full border rounded px-3 py-2 h-32 focus:outline-blue-500"
            ></textarea>
        <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={isEncrypted}
                onChange={(e) => setIsEncrypted(e.target.checked)}
                className="form-checkbox"
                />
            <span>Encrypt this file</span>
            </label>
            <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={isShareable}
                onChange={(e) => setIsShareable(e.target.checked)}
                className="form-checkbox"
                />
            <span>Shareable file?</span>
            </label>
            <label className="flex items-center space-x-2">
            <input
                type="checkbox"
                checked={editPermissions}
                onChange={(e) => setEditPermissions(e.target.checked)}
                className="form-checkbox"
                />
            <span>Edit permissions</span>
            </label>
        </div>
        {isEncrypted && (
            <input
            type="password"
            placeholder="Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-blue-500"
            />
            )}
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
            Create New Hisaab
        </button>
        </form>
    </div>
  );
};

export default CreateHisaab;
