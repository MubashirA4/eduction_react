import React, { useState } from 'react'
import './css/style.css'

const Signup = () => {
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = () => {
    console.log("Name: ", firstname, lastname)
    console.log("Gmail: ", email)
    console.log("password: ", password)
  }

  return (
    <div className='page_width'>
      <div className="signup">
        <div>
          <h3>Create new Account</h3>
          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder='Enter your First Name' value={firstname} onChange={(e)=> setFirstName(e.target.value)}/>

          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder='Enter your Last Name' value={lastname} onChange={(e) => setLastName(e.target.value)}/>
          <label htmlFor="email">Gmail</label>
          <input type="email" placeholder='Enter your gmail' value={email} onChange={(e) => setEmail(e.target.value)}/>

          <label htmlFor="Password">Password</label>
          <input type="password" placeholder='Create a password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="Password" name="" id="" placeholder='Re-enter your password'  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <button onClick={handleSubmit}>Create my account</button>
        </div>
      </div>
    </div>
  )
}

export default Signup