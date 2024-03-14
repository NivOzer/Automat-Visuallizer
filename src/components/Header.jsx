import React from "react";
import AutomatConstructorToolbar from "./AutomatConstructorToolbar";
import icon from "../images/AutomatVisualizerIconSVG.svg";
import logo from "../images/AutomatVisualizerLogoSVG.svg";
function Header() {
  return (
    <div className="font-raleway text-xl flex flex-col items-center justify-center text-white font-bold pb-4">
      {/* <h4 className="m-0 p-1 mt-2">Welcome to Automat Visualizer!</h4> */}
      <img className="w-4/12 m-4" src={logo}></img>
      <p className="text-purple-950 text-lg mb-2 mt-0 p-1 font-medium">
        A tool for visualizing DFA's and NFA's for Automats.
      </p>
      <AutomatConstructorToolbar />
    </div>
  );
}

export default Header;
