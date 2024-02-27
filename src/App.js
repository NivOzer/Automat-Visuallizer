import "./App.css";
import Automat from "./components/Automat";
import Header from "./components/Header";
import React from "react";

//TODO: Add Transition positioning from an state to itself
//TODO: Add input fields that create states
function App() {
  return (
    <div>
      <Header />
      <div className="AutomatPreview overflow w-full border border-gray-400 rounded-lg p-4 bg-white shadow-md">
        <Automat />
      </div>
    </div>
  );
}

export default App;
