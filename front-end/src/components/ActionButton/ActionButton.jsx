import React from 'react'
import './ActionButton.css'

function ActionButton({text, color}) {
  return (
    <button className={`actionBtn ${color}`}>{text}</button>
  )
}

export default ActionButton