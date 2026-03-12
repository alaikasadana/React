import { useState } from "react"

function Task(){
     let [count,setCount]= useState(0)
     function Sub(){
        setCount(count + 1)
     }

     function Add(){
        setCount(count - 1)
     }
    return(
   


           <>
           <h1>0</h1>
           <button onClick={Sub}>-</button>
            <button onClick={Add}>+</button>
           
           </>
    )
}

export default Task