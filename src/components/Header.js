import React from "react";

function Header() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-400 text-white font-bold py-4 px-6 rounded-lg">
      <h4>Welcome to Automat Visualizer!</h4>
      <p>A tool for visualizing DFA's and NFA's for Automats!</p>
    </div>
  );
}

export default Header;
