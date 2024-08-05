import React from 'react'
import './css/style.css'

const Signup = () => {
  return (
    <div className='page_width'>
      <div className="signup">
        <div>
          <h3>Create new Account</h3>
          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder='Enter your First Name' />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder='Enter your Last Name' />
          <label htmlFor="email">Gmail</label>
          <input type="email" placeholder='Enter your gmail'/>

          <label htmlFor="Password">Password</label>
          <input type="password" placeholder='Create a password'/>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="Password" name="" id="" placeholder='Re-enter your password' />
          <button>Create my account</button>
        </div>
      </div>
    </div>
  )
}

export default Signup