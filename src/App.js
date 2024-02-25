import "./App.css";
import State from "./components/State";
import Transition from "./components/Transition";
import React, { useState } from "react";

function App() {
  /*
Automat = (Σ,Q,q0,F,δ)
Σ - The Automat Alphabet
Q - A finite list of states
q0 - first state of the automat
F - A list of the automat accepting states
δ - Transitions Function δ:Σ X Q -> Q
*/
  // const states = []
  // for (let i = 0; i < 5; i++){
  //   const stateId = `q${i}`
  //   states.push(<State key={i} id={stateId} accepting={true}/>)
  // }

  //Q - States
  const [states, setStates] = useState([
    { id: "q0", accepting: false, isVisible: false },
    { id: "q1", accepting: true, isVisible: false },
  ]);

  //δ - Transitions
  const [transitions, setTransitions] = useState([
    { fromState: "starting_point", toState: "q0", input: "" },
    { fromState: "q0", toState: "q1", input: "a" },
  ]);

  const [loopVisibility, setLoopVisibility] = useState(false);

  // Function to toggle loop visibility
  const toggleLoopVisibility = (id) => {
    console.log(id);
    setStates(
      states.map((state) => {
        if (state.id === id) {
          return { ...state, isVisible: true };
        }
        return state;
      })
    );
  };

  return (
    <div className="Automat">
      {transitions.map((transition, index) => (
        <Transition
          key={index}
          fromState={transition.fromState}
          toState={transition.toState}
          input={transition.input}
          isVisible={transition.isVisible}
          toggleLoopVisibility={() => toggleLoopVisibility(transition.toState)}
        />
      ))}
      {states.map((state, index) => (
        <State
          key={index}
          id={state.id}
          accepting={state.accepting}
          isVisible={state.isVisible}
          toggleLoopVisibility={() => toggleLoopVisibility(state.id)}
        />
      ))}
    </div>
  );
}

export default App;
