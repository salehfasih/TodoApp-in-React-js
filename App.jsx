// // usestate in react js   Advanced React Topics
// // component name must be upper case //

// import React, { useState } from 'react'
// import      './App'
// import {FirstBook} from './List'

// function App() {


//   const [people ,setPeople]=React.useState({
//     name:"sualeh", age:24, messege:"world"
//   })  //destructure of state  and initial value function
//   const handleClick=()=>{
//   }
//   const remove=(id)=>{
//       let newPeople=people.filter((person)=>person.id !== id)   //filter method to remove indvidual element in a div
      

//       setPeople(newPeople)
//   }
  
//   return (
//     <div  className="container">
//           {people.map((content)=>{
//             const {Author,title,img,id}=content
//             return  <div  key={id}>
//               <h1>{Author}</h1>
//               <h2>{title}</h2>
//               <img src={img} alt=""/>
//               <button  onClick={()=>remove(id)}>remove</button>  
            
//             </div>
//           })}
//                         <button  onClick={()=>setPeople([])}>remove</button>  

//    {/* make a function to change the state ()=> setpeople() */}
           
      
//     </div>
//   )
// }

// export default App

// // use state 2nd trick



// import React, { useState } from 'react'
import './App.css'

// function App() {

//   const [people,setPeople]=useState([{
//     name:"sualeh", fathers_name:"muhammad fasih", age:29
//   } 
// ])
//   const changeMessege=()=>{
//     setPeople({...people,messege:20})
//   }
// counter App
// const [value,setValue]=useState(0);
// const complexChange=()=>{
//   setTimeout(()=>{
//     setValue((prevState)=>prevState+1)
//   },2000)
// }
//   return (
//     <div   className="center">
//          <h2>Regular interval</h2>
//   <h2>{value}</h2>
//   <button  onClick={()=>setValue(value+1)}>increase</button>
//   <button onClick={()=>setValue(value-1)}> decrease</button>
//   <button    onClick={()=>setValue(0)}>reset</button>

//   <br/>
//   <h2>complex counter App</h2>
//   <h2>{value}</h2>
//   <button  onClick={complexChange}>complex increase</button>

//       {/* <h2>{people[0].age}</h2>
//   <h2>{people[0].name}</h2>
//   <h2>{people[0].fathers_name}</h2>
//    <button   onClick={changeMessege}>change</button>       */}
//     </div>
//   )
// }



// export default App

// Todo App
import React, { useState } from 'react'

function App() {

  const [state, setstate] = useState("");
  const [newItem,setnewItem]=useState([]);
  
  const addEvent=(event)=>{
    setstate(event.target.value);
    console.log(state)

  }
  const addList=()=>{
    setnewItem((prevvalue)=>{
      return  [...prevvalue,state]
    })
  
   setstate("")

  }
  const removeItem=(e)=>{
    let item = e.target.parentNode;
       item.remove();
    
        //filter method to remove indvidual element in a div
  
    // setnewItem(newvalue[id]);
  }
  return (
    <div className="center">
      <input type="text"  value={state}  onChange={addEvent}/>
      <button   onClick={addList}>Add Todo</button>
     
       {newItem.map((item,index)=>{
        // {console.log(index)}
         return(
         <ul  key={index}><li >{item} <button  onClick={removeItem}> delete todo</button></li></ul>
         
         )
       })}
    
    </div>
  )
  // Todo App
}

export default App;