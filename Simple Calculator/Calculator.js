import React,{useState}from 'react'
export default function Calulator(){
    const[Cal,setcal]=useState('')
    const handleEvaluate =()=>{
        setcal(eval(Cal))

        
    }
    return(
        <div>
            <input type='text' value={Cal}/><br></br><br></br>
            <button onClick={()=>{setcal(prev=>prev+'1')}}>1</button>
            <button onClick={()=>{setcal(prev=>prev+'2')}}>2</button>
            <button onClick={()=>{setcal(prev=>prev+'3')}}>3</button>
           
            <br></br>
            
            <button onClick={()=>{setcal(prev=>prev+'4')}}>4</button>
            <button onClick={()=>{setcal(prev=>prev+'5')}}>5</button>
            <button onClick={()=>{setcal(prev=>prev+'6')}}>6</button>
            
            <br></br>
            
            <button onClick={()=>{setcal(prev=>prev+'7')}}>7</button>
            <button onClick={()=>{setcal(prev=>prev+'8')}}>8</button>
            <button onClick={()=>{setcal(prev=>prev+'9')}}>9</button>
            <br></br>
            <button onClick={()=>{setcal(prev=>prev+'0')}}>0</button>
            
           
            <br></br>
            
            <button onClick={()=>{setcal(prev=>prev+'+')}}>+</button>
            <button onClick={()=>{setcal(prev=>prev+'-')}}>-</button>
            <button onClick={()=>{setcal(prev=>prev+'*')}}>*</button>
            <button onClick={()=>{setcal(prev=>prev+'/')}}>/</button>
            <br></br>
            <button onClick={()=>{setcal(" ")}}>Clear</button>

            <button onClick={handleEvaluate}>=</button>
        </div>
        
    )
}