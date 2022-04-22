import React from 'react'
import './PlusMinusButton.css'

function PlusMinusButton({text, sign, changeAmount}) {
  return (
    <button className={`plusMinusBtn ${sign}`} type='button' onClick={(e) => changeAmount(e)} >{text}</button>
  )
}

export default PlusMinusButton