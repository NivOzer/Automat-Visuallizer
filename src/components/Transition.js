import React from "react"
import Xarrow from "react-xarrows";
//https://github.com/Eliav2/react-xarrows/blob/master/README.md#path
export default function Transition(props){
    let transitionProps = {
        start: props.fromState,
        end: props.toState,
        startAnchor: "right",
        endAnchor: "left",
        labels: <div className="transitionLabel">a</div>,
        path: "smooth",
        color: "black",
        strokeWidth: 2.5,
    };
    if(props.fromState === "startingpoint"){
        transitionProps.dashness = true
        transitionProps.strokeWidth= 1.4
        transitionProps.headSize=5
    }
    return(
        <div>
            <Xarrow {...transitionProps}/>
        </div>
    )
}