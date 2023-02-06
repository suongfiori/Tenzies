import React from "react"

export default function Time (props) {
    const minutes = ("0" + Math.floor(props.timer / 60)).slice(-2)
    const seconds = ("0" + props.timer % 60).slice(-2)

    return (
        <div >
            <h4>Current: <span className="timer">{minutes} : {seconds}</span></h4>  
        </div>
    )
}
    