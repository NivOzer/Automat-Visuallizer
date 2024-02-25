import React, { useEffect } from "react";
import Xarrow from "react-xarrows";
//https://github.com/Eliav2/react-xarrows/blob/master/README.md#path
export default function Transition(props) {
  //Looks for a loop
  const { fromState, toState, toggleLoopVisibility, input, isVisible } = props;
  useEffect(() => {
    if (fromState === toState && !isVisible) {
      console.log(input);
      toggleLoopVisibility(toState, input);
    }
  }, [fromState, toState, input, isVisible]);

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

  if (props.fromState === "starting_point") {
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
