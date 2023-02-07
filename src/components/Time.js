import React from "react"

export default function Time (props) {
    const minutes = ("0" + Math.floor(props.timer / 60)).slice(-2)
    const seconds = ("0" + props.timer % 60).slice(-2)

    return (
        <div >
            <h4>Current</h4>
            <span className="timer">{minutes} : {seconds}</span>  
        </div>
    )
}
    