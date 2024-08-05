import React from 'react'
import './style.css'

const Signin = () => {
  function success(){
    document.getElementById('confirm').innerHTML = "You signin Succesfully"
  }
  return (
    <div className='page_width'>
        <div className="signin">
          <form action="">
            <h3>Sign in</h3>
            <label htmlFor="userName">UserName</label>
            <input type="text" placeholder='Email or Phone' />
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="" placeholder='Password' />
            <p id='confirm'></p>
            <button onClick={success}>Sign in</button>
            <a href="sign_up">Not have an account?</a>
        </form>
        </div>
    </div>
  )
}

export default Signin