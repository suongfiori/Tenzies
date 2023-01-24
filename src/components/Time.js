import React from "react"

export default function Time (props) {
    const minutes = ("0" + Math.floor(props.timer / 60)).slice(-2)
    const seconds = ("0" + props.timer % 60).slice(-2)

    return (
        <div className="timer">
            <h3>{minutes} : {seconds}</h3>  
        </div>
    )
}
    