import React from "react";
import AutomatConstructorToolbar from "./AutomatConstructorToolbar";

function Header() {
  return (
    <div className="font-raleway text-xl flex flex-col items-center justify-center bg-slate-400 text-white font-bold pb-4">
      <h4 className="m-0 p-1 mt-2">Welcome to Automat Visualizer!</h4>
      <p className="text-xs mb-2 mt-0 p-1 font-16 font-light">
        A tool for visualizing DFA's and NFA's for Automats.
      </p>
      <AutomatConstructorToolbar />
    </div>
  );
}

export default Header;
