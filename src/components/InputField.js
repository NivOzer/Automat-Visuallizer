import React from "react";
function InputField({ inputLabel, onChange }) {
  return (
    <input
      className="text-xl shadow w-full border-none py-2 px-3 text-gray-700"
      type="text"
      placeholder={inputLabel}
      onChange={onChange}
    ></input>
  );
}

export default InputField;
