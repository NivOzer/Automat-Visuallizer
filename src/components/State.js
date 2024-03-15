import React from "react";
import LoopWithLabel from "./LoopWithLabel";
export default function State(props) {
  return (
    // first is accepting circle second is regular
    <div className="stateContainer">
      {props.accepting ? (
        <div className="state">
          {props.isVisible && (
            <LoopWithLabel stateId={props.fromState} input={props.loopInput} />
          )}
          <div id={props.id} className="stateCircle">
            <div className="acceptingCircle">
              <h1 className="stateText">{props.id}</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="state">
          {props.isVisible && (
            <LoopWithLabel stateId={props.fromState} input={props.loopInput} />
          )}
          <div id={props.id} className="stateCircle">
            <h1 className="stateText">{props.id}</h1>
          </div>
        </div>
      )}
    </div>
  );
}
