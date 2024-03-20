import React from "react";
import Dropdown from "./DropDown.js";
import InputField from "./InputField.js";
function AutomatConstructorToolbar({ onTransitionsChange, onStatesChange }) {
  const handleTransitionsField = (event) => {
    const inputValue = event.target.value.trim();
    onTransitionsChange(inputValue); // Pass input value to Header
  };

  const handleStatesField = (event) => {
    const inputValue = event.target.value.trim();
    onStatesChange(inputValue); // Pass input value to Header
  };

  return (
    <div className="flex w-6/12 h-16 mt-6 mb-6 shadow-lg">
      <Dropdown />
      <InputField onChange={handleStatesField} inputLabel="States" />
      <InputField onChange={handleTransitionsField} inputLabel="Transitions" />
    </div>
  );
}

export default AutomatConstructorToolbar;
