import React from "react"
export default function State(props){

    return(
        props.accepting
        ?   <div id={props.id} className="stateCircle">
                <div className="acceptingCircle">
                <h1 className="stateText">{props.id}</h1>
                </div>
            </div>
        :   <div id={props.id} className="stateCircle">
                <h1 className="stateText">{props.id}</h1>
            </div>
        
    )
}