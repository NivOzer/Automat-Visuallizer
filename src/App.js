import "./App.css";
import Automat from "./components/Automat.js";
import Header from "./components/Header.js";
import { React, useState } from "react";

function App() {
  const [statesString, setStatesString] = useState("");
  const [transitionsString, setTransitionsString] = useState("");

  //Gets the input values from Transition and states
  const handleTransitionsField = (newTransitions) => {
    setTransitionsString(newTransitions);
  };

  const handleStatesField = (newStates) => {
    setStatesString(newStates);
  };

  return (
    <div>
      <Header
        onTransitionsChange={handleTransitionsField}
        onStatesChange={handleStatesField}
      />
      <div className="AutomatPreview shadow-inner flex justify-center m-0 pb-6 overflow w-full">
        <Automat
          statesString={statesString}
          transitionsString={transitionsString}
        />
      </div>
    </div>
  );
}

export default App;
