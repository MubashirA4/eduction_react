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
    // Object Constructor
  // function Man(first, last, age, eye) {
  //   this.firstName = first;
  //   this.lastName = last;
  //   this.age = age;
  //   this.eyeColor = eye;
  // }
  // const myFather = new Man ("Maqbool","Ahmad", 55, "Black");
  // document.getElementById('man').innerHTML = "My Father name is " + myFather.firstName + " " + myFather.lastName +
  //  ". and age is " + myFather.age + ". And eye color is" + myFather.eyeColor;

  const filterData = person.filter((item)=> item?.lastName == "Ahmad" )
  
  let todo =[]
  const handleChange = ()=>{
    alert('Hello');
    todo.push("Mubashir");
  }
// name
  let name = "Ali"
  // document.getElementById('name').innerText = name;

  function check(){
    let iceCream = "Chocolate";
    if(iceCream == "Chocolate"){
      alert("Yay, it chocolate")
    }
    else{
      alert("Alas! not a chocolate")
    }
  }

  function Multiply(a,b){
    let result = a * b;
    return result;
  }
 

  return (
    <div>
      <marquee behavior="" direction="right">Hello</marquee>
    <p id='man'></p>
      {/* name */}
      <p id="name"></p>
      <button onClick={check}>Check</button>
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