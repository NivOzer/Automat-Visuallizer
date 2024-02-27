import React from "react";
function InputField(props) {
  return (
    <div>
      <input
        className="shadow border-none h-w-full py-2 px-3 text-gray-700"
        type="text"
        placeholder={props.inputLabel}
      ></input>
    </div>
  );
}

export default InputField;
