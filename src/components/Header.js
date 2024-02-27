import React from "react";
import AutomatConstructorToolbar from "./AutomatConstructorToolbar";
function Header() {
  return (
    <div className="mb-4 flex flex-col items-center justify-center bg-slate-400 text-white font-bold py-4 px-6 rounded-lg">
      <h4>Welcome to Automat Visualizer!</h4>
      <p className="mb-2">
        A tool for visualizing DFA's and NFA's for Automats!
      </p>
      <AutomatConstructorToolbar />
    </div>
  );
}

export default Header;
