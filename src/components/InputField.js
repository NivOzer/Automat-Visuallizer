import React from "react";
function InputField({ inputLabel, onChange }) {
  return (
    <input
      className="box-border text-xl shadow w-full border-none py-2 px-3 text-gray-700 border"
      type="text"
      placeholder={inputLabel}
      onChange={onChange}
    ></input>
  );
}

export default InputField;
