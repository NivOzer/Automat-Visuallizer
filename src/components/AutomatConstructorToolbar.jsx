import React, { useState } from "react";
import Dropdown from "./DropDown";
import InputField from "./InputField";
function AutomatConstructorToolbar() {
  return (
    <div className="flex w-6/12 h-16 mt-6 mb-6 shadow-lg">
      <Dropdown />
      <InputField inputLabel="States" />
      <InputField inputLabel="Transitions" />
    </div>
  );
}

export default AutomatConstructorToolbar;
