import React, {useState, useEffect} from "react"
import Die from "./components/Die"
import Time from "./components/Time"
import { BestScoreDisplay } from "./components/BestScoreDisplay"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const storedBestScore = JSON.parse(localStorage.getItem('bestScore')) || null;
    const [dice, setDice] = useState(allNewDice())
    const [tenzies, setTenzies] = useState(false)
    const [running, setRunning] = useState(false)
    const [timer, setTimer] = useState(0)
    const [count, setCount] = useState(0)
    const [bestScore, setBestScore] = useState(storedBestScore)  

 // Effect to check if the game is won or not
    useEffect(() => {
        // if all dice are held
        const allHeld = dice.every(die => die.isHeld)

        // if one of the dice is held
        const someHeld = dice.some(die => die.isHeld)

        // decide when the timer starts counting
        someHeld ? setRunning(true) : setRunning(false)

        // decide when the timer ends counting and game won
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setRunning(false)
            setTenzies(true)

        // determine user's best time score
        if (!storedBestScore || timer < storedBestScore) {
            localStorage.setItem('bestScore', JSON.stringify(timer));
            setBestScore(timer);
        } else {
            setBestScore(storedBestScore);
        }
        }
    }, [dice, bestScore, storedBestScore, timer])

// Effect to start and stop the timer

    useEffect(() => {

      let intervalId;

          if(running) {
            intervalId = setInterval(() => 
              setTimer(prevTimer => prevTimer + 1), 1000);
          } else {
              clearInterval(intervalId)
          }
          return () => clearInterval(intervalId)
      }, [running])

// Helper function to generate a new die

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
// Helper function to generate an array of 10 new dice

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }

  // Function to roll the dice
    
    function rollDice() {

        if(!tenzies) {

            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))

            setCount(prevCount => prevCount + 1)
        } else {
            setTenzies(false)
            setDice(allNewDice())
            setTimer(0)
            setCount(0)
        }
    }
    
// Function to hold a die

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main className="container">

            {tenzies && <Confetti />}

            {tenzies ? 
                <h3 class="congrats blink-1 shake-bottom">
                    You won!
                </h3> :
                <div className="game-intro">
                    <h1 className="title">Tenzies</h1>
                    <p className="instructions">Roll until all dice are the same.</p>
                    <p>Click each die to freeze it at its current value between rolls.</p>
                </div>
            }

            <div className="stats-board">
                <Time timer={timer}/>
                <BestScoreDisplay bestScore={bestScore} />
                <h4 className="count">Number of rolls: {count}</h4>
            </div>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "Reset" : "Roll"}
            </button>
        </main>
    )
}