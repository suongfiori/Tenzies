import React from "react"

export default function Time ({ time, type, timer, bestScore }) {

 // Helper function to format time 
    function formatTime (time){
        return time < 10 ? "0" + time : time;
    } 

    let timeString;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timeString = `${formatTime(minutes)}:${formatTime(seconds)}`;

    const styles = {
        color: type === "bestScore" ? "rgb(64, 160, 64)" : "none"
    }

    return (
        <div >
        <h4 className={`${type==="bestScore" ? "best-score" : ""}`}>{type === "timer" ? "Current" : "Your Best"}</h4>
            <span className="timer" style={styles}>{timeString}</span>  
        </div>
    )
}
    