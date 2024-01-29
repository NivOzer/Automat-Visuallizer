import React from "react"
import LoopWithLabel from './LoopWithLabel';
export default function State(props){

    return(
        <div className="stateContainer">
        {props.accepting
        ?
        <div className="state">
        <LoopWithLabel className="loopWithLabel" stateId={"q1"} />
        <div id={props.id} className="stateCircle">
                <div className="acceptingCircle">
                <h1 className="stateText">{props.id}</h1>
                </div>
            </div>
        </div>
        :   
        <div className="state">
        <LoopWithLabel className="loopWithLabel" stateId={"q1"} />
        <div id={props.id} className="stateCircle">
                <h1 className="stateText">{props.id}</h1>
            </div>
            </div>
            }
        </div>
    )
}