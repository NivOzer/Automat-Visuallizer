import React from "react"
import Xarrow from "react-xarrows";
export default function Transition(props){
    return(
        <div>
            <Xarrow
                start="q2" //can be react ref
                end="q4" //or an id
                endAnchor="left"
            />
        </div>
    )
}