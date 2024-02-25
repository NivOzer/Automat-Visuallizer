import "./App.css";
import State from "./components/State";
import Transition from "./components/Transition";
import React, { useState, useEffect } from "react";

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
    { id: "q0", accepting: false, isVisible: false, loopInput: "" },
    { id: "q1", accepting: true, isVisible: false, loopInput: "" },
    { id: "q2", accepting: false, isVisible: false, loopInput: "" },
    { id: "q3", accepting: true, isVisible: false, loopInput: "" },
  ]);

  //δ - Transitions
  //FIXME: when added more than 1 transition the other disappears
  //FIXME: when p1 is the loop it goes "props" on label
  const [transitions, setTransitions] = useState([
    { fromState: "starting_point", toState: "q0", input: "" },
    { fromState: "q0", toState: "q0", input: "a" },
    { fromState: "q2", toState: "q2", input: "c" },
    { fromState: "q1", toState: "q2", input: "b" },
  ]);

  // Function to toggle loop visibility
  const toggleLoopVisibility = (id, input) => {
    setStates((prevStates) =>
      prevStates.map((state) =>
        state.id === id
          ? { ...state, isVisible: true, loopInput: input }
          : state
      )
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
          toggleLoopVisibility={() =>
            toggleLoopVisibility(transition.toState, transition.input)
          }
        />
      ))}
      {states.map((state, index) => (
        <State
          key={index}
          id={state.id}
          accepting={state.accepting}
          isVisible={state.isVisible}
          loopInput={state.loopInput}
          toggleLoopVisibility={() => toggleLoopVisibility(state.id)}
        />
      ))}
    </div>
  );
}

export default App;
