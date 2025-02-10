import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { ThemeContext } from "../context/ThemeContext";

const CreateHisaab = () => {
  const { theme } = useContext(ThemeContext);

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
      <Navbar />

      <form
        onSubmit={handleSubmit}
        className={`ml-5 max-w-[600px] p-6 rounded space-y-4 ${
          theme === "dark" ? "bg-[#09090b]" : "bg-white"
        }`}
      >
        <h1
          className={`text-xl font-bold ${
            theme === "dark" ? "bg-white]" : "text-gray-800"
          } `}
        >
          Create New Hisaab
        </h1>
        <input
          type="text"
          placeholder="Shopping Hisaab, Ghar ka Kharch..."
          value={hisaabName}
          onChange={(e) => setHisaabName(e.target.value)}
          className={`w-100 rounded px-3 py-2  ${
            theme === "dark"
              ? "bg-[#181a1b] placeholder:text-[#8c8d8d]"
              : "bg-gray-200"
          } focus:outline-blue-500`}
        />
        <textarea
          placeholder="Daal, Aata, Cheeni"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          className={`w-full ${
            theme === "dark"
              ? "bg-[#181a1b] placeholder:text-[#8c8d8d]"
              : "bg-gray-200"
          } rounded px-3 py-2 h-52 focus:outline-blue-500`}
        ></textarea>

        <div className="flex items-center gap-20">
          <div className="flex flex-col gap-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isEncrypted}
                onChange={(e) => setIsEncrypted(e.target.checked)}
                className="form-checkbox"
              />
              <span>Encrypt this file</span>
            </label>

            <input
              type="password"
              placeholder="Passcode"
              value={passcode}
              disabled={!isEncrypted}
              onChange={(e) => setPasscode(e.target.value)}
              className={`w-44   ${
                isEncrypted && theme === "dark"
                  ? "bg-[#181a1b]"
                  : isEncrypted && theme === "light" 
                  ? "bg-gray-200 "
                  : theme === "dark"
                  ? "bg-[#19191a]/50 placeholder-[#363638]" : "bg-gray-100 placeholder:text-gray-300"
                  // : "placeholder-[#363638] bg-[#19191a]/50"
              }  rounded px-3 py-2 focus:outline-blue-500 disabled:cursor-not-allowed`}
            />
          </div>

          <div className="flex flex-col gap-2">
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
        </div>

        <button
          type="submit"
          className="mt-5 w-44 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Create New Hisaab
        </button>
      </form>
    </div>
  );
};

export default CreateHisaab;
