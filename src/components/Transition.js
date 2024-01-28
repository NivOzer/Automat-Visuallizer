import React from "react"
import Xarrow from "react-xarrows";
export default function Transition(props){
    return(
        <div>
            <Xarrow
                start={props.fromState}
                end={props.toState}
                startAnchor="right"
                endAnchor="left"
                labels= {<div className="transitionLabel">a</div>}
                path="smooth"
                color="black"
                strokeWidth={2.5}
            />
        </div>
    )
}