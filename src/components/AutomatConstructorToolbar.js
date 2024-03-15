import React, { useState } from "react";
import Dropdown from "./DropDown";
import InputField from "./InputField";
function AutomatConstructorToolbar({ onTransitionsChange, onStatesChange }) {
  // const [states, setStates] = useState([
  //   { id: "q0", accepting: true, isVisible: false, loopInput: "" },
  //   { id: "q1", accepting: false, isVisible: false, loopInput: "" },
  //   { id: "q2", accepting: false, isVisible: false, loopInput: "" },
  // ]);

  // //δ - Transitions
  // const [transitions, setTransitions] = useState([
  //   { fromState: "starting_point", toState: "q0", input: "" },
  //   { fromState: "q0", toState: "q1", input: "a" },
  //   { fromState: "q2", toState: "q2", input: "a" },
  // ]);
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
