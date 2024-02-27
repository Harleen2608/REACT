// import Update from "./Form/update";
// import Api from "./Api.jsx/apiRan";
// import MyData from "./Mydata/mydata";
// import Form from "./Form/Form"
// import { Counter } from "./Counter/Counter";
 import Todo from"./TodoApp/TodoApp"
// import Mydata from "./Data/Mydata";

// function App(){

//   let mydata=[
//     {
//          name:"Radhe",
//          age:45,
//          id:8051
//    },
//     {
//         name:"krishna",
//       age:58,
//        id:8977
//     },
//     {
        
//          name:"Ram",
//          age:78,
//        id:4567
        
//     }
// ] 
//  return(
//     <>
//     {mydata.map((value)=>(
  
//         <Mydata NAME={value.name} AGE={value.age} ID={value.id}/>
//     ))}
//     {/* <Update/> */}
//     {/* <Counter/> */}
//     {/* <Form/> */}
//     {/* <Api/> */}
//     {/* < MyData /> */}
//     </>
//   )
//}
//export default App;

function App(){
  return(<>
  <Todo/>
  </>)
}
export default App;