import React from 'react'
import ActionButton from '../ActionButton/ActionButton'
import './LoginPopup.css'

function LoginPopup({ setLogin, setLoggedIn }) {  
  return (
    <div className='loginPopup'>
      <div>
        <h2>Username:</h2>
        <input type="text" name="username" id="username" />
      </div>
      <div>
        <h2>Password:</h2>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <ActionButton text="OK" color="orange" setLoggedIn={setLoggedIn} setLogin={setLogin} />
        <ActionButton text="Cancel" color="black" setLogin={setLogin} />
      </div>
    </div>
  )
}

export default LoginPopup