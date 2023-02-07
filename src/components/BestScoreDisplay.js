import React from 'react'

export const BestScoreDisplay = ({ bestScore }) => {
    const minutes = ("0" + Math.floor(bestScore / 60)).slice(-2)
    const seconds = ("0" + bestScore % 60).slice(-2)
  return (
    <div className='best-score'>
        <h4>Your best</h4>
        <span className='best-time'>{minutes} : {seconds}</span>
    </div>
  )
}
