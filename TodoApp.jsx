import {useState,useEffect} from "react"
import styled from "@emotion/styled"
import {Typography,TextField,Button,Container,Checkbox} from '@mui/material'

function Todo(){
 
 let Text = styled(Typography)({
  fontFamily:"revert-layer",
  color:"brown",
  fontWeight:"500"
 })
    
let Data=JSON.parse(localStorage.getItem("set_Todo"))||[{task:"",complete:false}] 
    const[todo,setTodo]=useState("")
    const[ctask,setCtask]=useState(0)
    const[rtask,setRtask]=useState(0)
    const[myArray,setArray]=useState(Data)
    


    function handleCheck(i){

      let myNewArray=[...myArray]
      myNewArray[i].complete=!myNewArray[i].complete
      setArray(myNewArray)


      let completetask=myNewArray.filter((value)=>{
      return value.complete
    })

      let remainingtask=myNewArray.filter((value)=>{
      return !value.complete
    })

    setCtask(completetask.length)
    setRtask(remainingtask.length)


  }

    function handleDelete(index){
        let deleteTask=myArray.filter((val,id)=>{
               return id !== index
        })
        setArray(deleteTask)

    } 
    

    function handleTask(){


        if(todo){
            setArray([...myArray,{task:todo,complete:false}])

        }
        setTodo("")
        console.log(todo)
    }

  
    useEffect(()=>{
      let myNewArray = [...myArray]
      let completeTask = myNewArray.filter((value, index) => {
          return value.complete;
        });
    
        let remainingTask = myNewArray.filter((value, index) => !value.complete);
  
        setRtask(remainingTask.length)
        setCtask(completeTask.length)
  
        localStorage.setItem("set_Todo", JSON.stringify(myNewArray) )
  
    },[myArray])
  


    return(
    <>
     <Container maxWidth="sm">
     <Text variant="h1" component="h2">
           My Todo List
    </Text>
    <TextField id="standard-basic" label="My New Task" variant="standard"  placeholder="Add task here" value={todo} onChange={(e)=>{setTodo(e.target.value)}}> </TextField><br></br><br></br>
    <Button variant="contained" sx={{backgroundColor:"beige",color:"brown"}} onClick={handleTask}>ADD TASK</Button><br></br><br></br>

        {
        myArray.map((value,index)=>(
            <ul key={index}>
                <Checkbox checked={value.complete} onClick={()=>handleCheck(index)}  color="success" />
                <span style={{textDecoration:value.complete?"line-through":""}}>{value.task}</span>
                <span style={{cursor:"pointer"}}className="material-symbols-outlined" onClick={()=>handleDelete(index)}>
                    delete
                    </span>
            </ul>
        ))
     }

    <Typography variant="h5" component="h2">
      Completed Task :-{ctask}
    </Typography>
    <br></br>
    <Typography variant="h5" component="h2">
      Remaining Task :-{rtask}
    </Typography>
    
   
    </Container>
     
    
    </>)
}
export default Todo;