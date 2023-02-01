import React from "react"

export default function Die(props) {
    const dieValue = props.value

    let dots = [];
    switch (dieValue) {
        case 1:
        dots.push(
            <div className="dice first-face">
                <span className="dot" key={1}></span>
            </div>
        );
        break;
        case 2:
        dots.push(
            <div className="dice second-face">
                <span className="dot" key={1}></span>
                <span className="dot" key={2}></span>
            </div>
        );
        break;
        case 3:
        dots.push(
            <div className="dice third-face">
                <span className="dot" key={1}></span>
                <span className="dot" key={2}></span>
                <span className="dot" key={3}></span>
            </div>
        );
        break;
        case 4:
        dots.push(
            <div className="dice fourth-face">
                <div className="column">
                    <span className="dot" key={1}></span>
                    <span className="dot" key={2}></span>
                </div>
                <div className="column">
                    <span className="dot" key={3}></span>
                    <span className="dot" key={4}></span>
                </div> 
            </div>

        );
        break;
        case 5:
        dots.push(
            <div className="fifth-face">
                <div className="column">
                    <span className="dot" key={1}></span>
                    <span className="dot" key={2}></span>
                </div>
                <div className="column">
                    <span className="dot" key={3}></span>
                </div>
                <div className="column">
                    <span className="dot" key={4}></span>
                    <span className="dot" key={5}></span>
                </div>
            </div>
        );
        break;
        case 6:
        dots.push(
            <div className="dice sixth-face">
                <div class="column">
                    <span className="dot" key={1}></span>
                    <span className="dot" key={2}></span>
                    <span className="dot" key={3}></span>
                </div>
                <div class="column">
                    <span className="dot" key={4}></span>
                    <span className="dot" key={5}></span>
                    <span className="dot" key={6}></span>
                </div>
            </div>
        );
        break;
        default:
        break;
        }

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
             {dots}
        </div>
    )
}