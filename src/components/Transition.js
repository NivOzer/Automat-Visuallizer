import React from "react"
import Xarrow from "react-xarrows";
export default function Transition(props){
    return(
        <div>
            <Xarrow
                start="q3" //can be react ref
                end="q4" //or an id
                endAnchor="left"
                labels= {<div className="transitionLabel">a</div>}
                path="{smooth}"
                color="black"
                strokeWidth={2.5}
            />
        </div>
    )
}