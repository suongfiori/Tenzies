import React from 'react'

export const BestScoreDisplay = ({ bestScore }) => {
    const minutes = ("0" + Math.floor(bestScore / 60)).slice(-2)
    const seconds = ("0" + bestScore % 60).slice(-2)
  return (
    <div className='best-score'>
         <h4>Your best time: <span className='best-time'>{minutes} : {seconds}</span></h4>
    </div>
  )
}
