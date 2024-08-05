import React, { useState, useEffect } from 'react'

const Courses = () => {
  const [color, setColor] = useState("purple");
  const [count,setCount] = useState(0);

  useEffect(() => {
    alert('Hi');
  })

  return (
    <div>
      <h1>My Favorite color is {color}</h1>
      <div style={{ backgroundColor: color, height: '100vh' }}>
      <button onClick={() => setColor('blue')}>Blue</button>
       <button onClick={()=> setColor("Green")}>Green</button>
      <button onClick={()=> setColor("Yellow")}>Yellow</button>
      </div>

      <div>
        <h2>Your Click {count}</h2>
        <button onClick={()=> setCount(count+1)}>Click Me</button>
      </div>




    </div>
  )
}

export default Courses