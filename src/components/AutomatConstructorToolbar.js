import React, { useState } from "react";
import Dropdown from "./DropDown";
import InputField from "./InputField";
function AutomatConstructorToolbar() {
  return (
    <div className="flex">
      <Dropdown />
      <InputField inputLabel="States" />
      <InputField inputLabel="Transitions" />
    </div>
  );
}

export default AutomatConstructorToolbar;
