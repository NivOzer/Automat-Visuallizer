import "./App.css";
import State from "./components/State";
import Transition from "./components/Transition";
import Automat from "./components/Automat";
import React, { useState } from "react";

//TODO: Add Transition positioning from an state to itself

function App() {
  return (
    <div>
      <div className="AutomatPreview overflow w-full border border-gray-400 rounded-lg p-4 bg-white shadow-md">
        <Automat className="w-full" />
      </div>
    </div>
  );
}

export default App;
