import React from "react";
import{useState}from'react'
export default function Change(){
    const[name,setname]=useState("Guest")
    function handlechange(){
        setname("Kirthick")
    }
    return(
        <div>
            <h1>Welcome{name}</h1><br></br>
            <button onClick={handlechange}>Change</button>
        </div>
    )
}