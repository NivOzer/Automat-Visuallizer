import State from "./State";
import Transition from "./Transition";
import React, { useState, useEffect } from "react";
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
//TODO: Add Transition positioning from an state to itself
function Automat({ statesString, transitionsString }) {
  //Q - States
  const [states, setStates] = useState([]);
  useEffect(() => {
    const isValidFormat =
      /^\((\w+),(true|false)\)(,\(\w+,(true|false)\))*$/g.test(statesString);
    if (!isValidFormat) {
      return;
    }
    // Parse the statesString
    const parsedStates = statesString
      .split("),") // Split by tuple
      .map((tuple) => {
        const [id, accepting] = tuple.replace(/[()]/g, "").split(","); // Split tuple by comma
        return {
          id,
          accepting: accepting === "true",
          isVisible: false,
          loopInput: "",
        };
      });
    // Update the states state with the parsed states
    setStates(parsedStates);
  }, [statesString, transitionsString]);

  //δ - Transitions
  const [transitions, setTransitions] = useState([]);
  useEffect(() => {
    // If transitionsString is empty, set transitions to an empty array and return
    if (transitionsString.trim() === "") {
      setTransitions([]);
      return;
    }

    const isValidFormat =
      /^(\(\w+,\w+,[\w\s]*\),)*(\(\w+,\w+,[\w\s]*\))$/g.test(transitionsString);

    if (!isValidFormat) {
      return;
    }

    const parsedTransitions = transitionsString.split("),").map((tuple) => {
      const [fromState, toState, input] = tuple.replace(/[()]/g, "").split(",");
      return {
        fromState,
        toState,
        input,
      };
    });

    setTransitions(parsedTransitions);
  }, [transitionsString, statesString]);
  console.log(transitions);

  // Function to toggle loop visibility
  const toggleLoopVisibility = (id, input) => {
    setStates((prevStates) => {
      const newState = prevStates.map((state) =>
        state.id === id
          ? { ...state, isVisible: true, loopInput: input }
          : state
      );
      return newState;
    });
  };

  useEffect(() => {
    // Call toggleLoopVisibility function here with necessary parameters
    transitions.forEach((transition) => {
      if (transition.fromState === transition.toState) {
        toggleLoopVisibility(transition.toState, transition.input);
      }
    });
  }, [transitions]);

  return (
    <div className="Automat" id="automat">
      {transitions.map((transition, index) => (
        <Transition
          key={index}
          fromState={transition.fromState}
          toState={transition.toState}
          input={transition.input}
          isVisible={transition.isVisible}
          toggleLoopVisibility={() =>
            toggleLoopVisibility(
              transition.toState,
              transition.fromState,
              transition.input
            )
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

export default Automat;
