import React from 'react'
import './ActionButton.css'
import md5 from 'blueimp-md5'

function ActionButton({text, color, setLogin, setLoggedIn}) {
  function handleClick(e) {
    if (text.toLowerCase() === "cancel") {
      setLogin(false);
    }
    if (text.toLowerCase() === "ok") {
      setLoggedIn(true);
      setLogin(false);
    }
  }

  return (
    <button className={`actionBtn ${color}`} onClick={handleClick}>{text}</button>
  )
}

export default ActionButton