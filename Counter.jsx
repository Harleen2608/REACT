import React ,{useState}from 'react'

export const Counter = () => {
    const[count,setCount]=useState(0)
    function handleup(){
        setCount(count+1)
    }
    function handledown(){
        if(count>0){
        setCount(count-1)
    }}
  return (
    <>
    {count===10?<h1>You Complete Your First Goal</h1>:<></>}
    <button onClick={handleup}>Counter Up</button>
    <h1>{count}</h1>
    <button onClick={handledown}>Counter Down</button>
    </>
  )
}
