import React, { useState } from "react";

function AutomatConstructorToolbar() {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div className="group inline-block relative">
      <button
        onClick={() => setOpen(!open)}
        className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
      >
        <span className="pr-1 font-semibold flex-1 text-gray-800">
          {selectedOption || "Dropdown"}
        </span>
        <svg
          className={`fill-current h-4 w-4 transform transition duration-150 ease-in-out ${
            open ? "-rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul
        className={`bg-white border rounded-sm transform transition duration-150 ease-in-out origin-top min-w-32 ${
          open ? "scale-y-100" : "scale-y-0"
        } absolute top-full left-0 list-none`}
      >
        <li>
          <button
            onClick={() => handleOptionClick("DFA")}
            className="outline-none focus:outline-none w-full px-3 py-1 hover:bg-gray-100 text-gray-800"
          >
            DFA
          </button>
        </li>
        <li>
          <button
            onClick={() => handleOptionClick("NFA")}
            className="outline-none focus:outline-none w-full px-3 py-1 hover:bg-gray-100 text-gray-800"
          >
            NFA
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AutomatConstructorToolbar;
