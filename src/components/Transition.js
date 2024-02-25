import React, { useEffect } from "react";
import Xarrow from "react-xarrows";
import LoopWithLabel from "./LoopWithLabel";
//https://github.com/Eliav2/react-xarrows/blob/master/README.md#path
export default function Transition(props) {
  //Looks for a loop
  const { fromState, toState, toggleLoopVisibility } = props;
  useEffect(() => {
    if (fromState === toState && !props.isVisible) {
      // Check if loop visibility has not been toggled
      console.log("started transition toggleLoopVisibility");
      toggleLoopVisibility(toState);
      console.log("ended transition toggleLoopVisibility");
    }
  }, []);

  let transitionProps = {
    start: props.fromState,
    end: props.toState,
    startAnchor: "right",
    endAnchor: "left",
    labels: <div className="transitionLabel">{props.input}</div>,
    path: "smooth",
    color: "black",
    strokeWidth: 2.5,
  };

  if (props.fromState === "startingpoint") {
    transitionProps.dashness = true;
    transitionProps.strokeWidth = 1.4;
    transitionProps.headSize = 5;
  }

  return (
    <div>
      {props.fromState === props.toState ? null : (
        <Xarrow className="transition" {...transitionProps} />
      )}
    </div>
  );
}
