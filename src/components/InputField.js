import React from "react";
function InputField(props) {
  return (
    <div>
      <input
        className="shadow appearance-none border rounded h-w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder={props.inputLabel}
      ></input>
    </div>
  );
}

export default InputField;
