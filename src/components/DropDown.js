import React, { useState } from "react";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="border-none shadow h-full px-3 bg-white flex items-center min-w-32"
      >
        <span className="w-full text-gray-700 opacity-75">
          {selectedOption || "Automat Type"}
        </span>
        <svg
          className={`ml-2 fill-current h-4 w-4 transform transition duration-150 ease-in-out ${
            open ? "-rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul
        className={`m-0 p-0 w-full Options-Animation transform transition duration-150 ease-in-out origin-top min-w-32 ${
          open ? "scale-y-100" : "scale-y-0"
        } absolute top- left-0 list-none`}
      >
        <li>
          <button
            onClick={() => handleOptionClick("DFA")}
            className="shadow border-none bg-white w-full px-3 py-2  text-gray-700"
          >
            DFA
          </button>
        </li>
        <li>
          <button
            onClick={() => handleOptionClick("NFA")}
            className="shadow border-none bg-white w-full px-3 py-2  text-gray-700"
          >
            NFA
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
