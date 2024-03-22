import React, { useEffect } from "react";
import Xarrow from "react-xarrows";
//https://github.com/Eliav2/react-xarrows/blob/master/README.md#path
export default function Transition(props) {
  //Looks for a loop
  const { fromState, toState, toggleLoopVisibility, offset, input, isVisible } =
    props;
  useEffect(() => {
    if (fromState === toState && !isVisible) {
      toggleLoopVisibility(toState, input);
    }
  }, []);
  //might need to add empty dependencies array for it to only do it once
  console.log(props.offset);
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
    transitionProps.start = "automat";
    transitionProps.startAnchor = "left";
    transitionProps.dashness = true;
    transitionProps.strokeWidth = 2.5;
    transitionProps.headSize = 5;
    transitionProps.curveness = 0.5;
  }

  //checks for the side of the arrow LTR
  const fromStateNum = parseInt(fromState.replace("q", ""));
  const toStateNum = parseInt(toState.replace("q", ""));
  if (fromStateNum > toStateNum) {
    console.log(fromStateNum, toStateNum);
    console.log(fromStateNum > toStateNum);
    transitionProps.startAnchor = {
      position: "left",
      offset: { y: props.offset },
    };
    transitionProps.endAnchor = {
      position: "right",
      offset: { y: props.offset },
    };
  } else if (offset != 0) {
    transitionProps.startAnchor = {
      position: "right",
      offset: { y: props.offset },
    };
    transitionProps.endAnchor = {
      position: "left",
      offset: { y: props.offset },
    };
  }

  return (
    <div>
      {props.fromState === props.toState ? null : (
        <Xarrow className="transition" {...transitionProps} />
      )}
    </div>
  );
}
