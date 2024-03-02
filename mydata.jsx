import { useEffect, useState } from "react";
function MyData(){
    const[count,setCount]=useState(0)
    const[title,setTitle]=useState("")
    const[img,setImg]=useState("")


    async function data (){
        let data = await fetch(`https://dummyjson.com/products${count}`)
        let result = await data.json()
        console.log(result)
        setTitle(result.title)
        setImg(result.images[1])
    }
    useEffect(()=>{
       data()
    },[count])

    function handletitle(){
     setCount(count+1)
    }
    return(
        <>
        <h1>{title}</h1>
        <img src={img} alt="Loading"/> 
        <h2>{count}</h2>
        <button onClick={handletitle}>ShowTitle</button>
        </>
    )
}
export default MyData;

