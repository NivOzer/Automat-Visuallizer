import React from "react"
export default function State(props){
    return(
        <div id={props.id} className="stateCircle">
            <h1 className="stateText">{props.index}</h1>
        </div>
    )
}