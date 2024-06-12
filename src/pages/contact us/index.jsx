import React,{useState} from 'react'

const ContactUs = () => {
  const [fname,setFname] = useState('')
  const [lname,setLname] = useState('')
  const [email,setEmail] = useState('')
  const [pasword,setPasword] = useState('')
  const [number,setNumber] = useState('')
  const [address,setAddress] = useState('')
  const [message,setMessage] = useState('')

  const formData ={
    first_name:fname,
    Last_name:lname,
    Email: email,
    Pasword: pasword,
    Number:number,
    Address:address,
    Message:message
  }

  const handleChange = () =>{
    console.log("form Data", formData);
  }
  return (
    <div>
      <div className="container">
        <h2>Contact Form</h2>
        <div className="form">
          <input type="text" placeholder='First Name' value={fname} onChange={(e)=>setFname(e.target.value)} />
          <input type="text" placeholder='Last Name' value={lname} onChange={(e)=>setLname(e.target.value)}/>
          <input type="email" placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Enter Your Pasword' value={pasword} onChange={(e)=>setPasword(e.target.value)} />
          <input type="number" placeholder='Phone Number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
          <input type="Address" placeholder='Enter your address' value={address} onChange={(e)=>setAddress(e.target.value)} />
          <textarea name="" id="" placeholder='Enter Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
          <button onClick={handleChange}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs