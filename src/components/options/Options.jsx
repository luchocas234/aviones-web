import React from 'react'
import './OptionsStyles.css'

export const Options = () => {
  return (
    <div className='options'>
        <div className="container">
            <div className="top">
                <h1>Options</h1>
            </div>
            <div className="bottom">
                <button className='btn btn-dark'>Drive</button>
                <button className='btn'>Ride</button>
            </div>
        </div>
    </div>
  )
}
