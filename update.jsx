
import { useState } from "react";


function Update(){

    
    const[fdata,setFdata]=useState("")
    const[ldata,setLdata]=useState("")
    const[fshow,setFshow]=useState("")
    const[lshow,setLshow]=useState("")

    function handleInfo(event){
        event.preventDefault()
        setFshow(fdata)
        setLshow(ldata)
    }
     function handlefname(e){
        setFdata(e.target.value)
    }
    function handlelname(e){
        setLdata(e.target.value)
    }

    return(
    <>
    <form id="myform"onSubmit={handleInfo}>
        <h1>Hello {fshow} {lshow}</h1>
        <label>First Name<br></br><input type="text" value={fdata} onChange={handlefname}/>
        <br></br></label>
        <label>Last Name<br></br><input type="text" value={ldata} onChange={handlelname}/>
        <br></br><br></br></label>
        
        <button>Submit</button>
    </form>
    </>)
}
export default Update;