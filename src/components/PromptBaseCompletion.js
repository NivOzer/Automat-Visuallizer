import React from "react";
import InputField from "./InputField";

function PromptBaseCompletion() {
  return (
    <div className="flex w-6/12 shadow-lg">
      <div className="w-full ">
        <InputField />
      </div>
    </div>
  );
}

export default PromptBaseCompletion;
