import React, { useState } from 'react'
import './style.css'

const Signin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState();

  function success(){
    document.getElementById('confirm').innerHTML = "You signin Succesfully"
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name, "password", password)
  }
  return (
    <div className='page_width'>
        <div className="signin">
          <form action="">
            <h3>Sign in</h3>
            <label htmlFor="userName">UserName</label>
            <input type="text" placeholder='Email or Phone' value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <p id='confirm'></p>
            <button onClick={success && handleSubmit}>Sign in</button>
            <a href="sign_up">Not have an account?</a>
        </form>
        </div>
    </div>
  )
}

export default Signin