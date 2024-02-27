import React from "react";
function InputField(props) {
  return (
    <input
      className="shadow border-none py-2 px-3 text-gray-700"
      type="text"
      placeholder={props.inputLabel}
    ></input>
  );
}

export default InputField;
