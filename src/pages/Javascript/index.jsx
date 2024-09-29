import React, { Children, useState } from 'react'
import { Button } from 'react-bootstrap'

const Javascript = () => {
  const [sum, setSum] = useState('')
  const [child, setChild] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  function add(a,b) {
    return a + b;
  }
  const handleChange = () =>{
    const x = add(10,20);
    setSum(x)
  }

  // Object
  const Car = {type: "Fiat", model:"500", color:"White"}
  const Family = {
    father: "Maqbool Ahmad",
    children: {
      brother1: "Farhan Ahmad",
      brother2: "Junaid Ahmad",
      brother3: "Moeez Ahmad",
      brother4: "Mubashir Ahmad",
      allChild: function() {
        return this.brother1 + " " + this.brother2 + " " + this.brother3; 
      }
    }
  }
  const handleChild = () => {
    const All = Family.children.brother1
    setChild(All)
  }

  // Date and Time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const handleDate = () => {
    const date = formattedDate
    const time = formattedTime
    setDate(date)
    setTime(time)
  }

  const  arr= [50, 45, 70, 82]
  // let a = arr.map((value, index, array)=> {
  //   console.log(value, index, array)
  // })

  return (
    <div className='page_width'>
      <Button onClick={handleChange}>Add me</Button>
      <h2>Sum is {sum} </h2>
      <Button type="button" onClick={handleChild}>Click e</Button>
      <p>{child} </p>
      <Button type="button" onClick={handleDate}>Click to display Date and time</Button>
      <p><strong>Date:</strong> {date} </p>
      <p><strong>Time:</strong> {time} </p>

    <ol>
      {arr.map((value, index, array)=>(
        <li key={index}>{index} {value} </li>
      ))}
    </ol>
    </div>
  )
}
  


export default Javascript