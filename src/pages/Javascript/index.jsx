import React from 'react'

const Javascript = () => {
  const cars =[
    "audi",
    "volvo",
    "saab",
    "Suxuki",
    "Ferari",
    "MG",
    "BMW"
  ];
  const car = new Array("bike");
  const person =[
    {
      firstName: "Mubashir",
       lastName:"Ahmad", 
       age:20
    },
    {
      firstName: "Abdullah",
      lastName: "Ahmad",
      age: 26,
      cousrse: [
        {
          courseName: 'React',
          courseDuration: 2
        }
      ]
    },
    {
      firstName:'Naeem',
      lastName:"Anas",
      age: 30
    }
    ];

  const filterData = person.filter((item)=> item?.lastName == "Ahmad" )
  
  let todo =[]
  const handleChange = ()=>{
    alert('Hello');
    todo.push("Mubashir");
  }
  return (
    <div>
      <h2>Javascript</h2>
      <button>Try it</button>
      <p id="aray"></p>
      <p id="object"></p>
      <ul>
        <li>
          {todo.toString()}
        </li>
        <button onClick={handleChange}>Add me</button>
      </ul> 
      <h2>
        {cars.map((item,index)=>{
          return(
            <p>
              {item}
            </p>
          )
        })}
      </h2>
      {/* {person.map((item,index,array)=>{
        return(
          <li key={index}>
            {item?.firstName} {item?.lastName} {item?.age}
          </li>
        )
      })} */}
      {filterData.map((item,index,array)=>{
        return(
          <li key={index}>
            {item?.firstName} {item?.lastName} {item?.age}
          </li>
        )
      })}
    </div>
  )
}
  


export default Javascript