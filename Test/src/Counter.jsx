import { useEffect, useState } from "react"


function Counter() {

      let [val,setval] = useState(0)
      
      function add(){
        setval(val+1)
      }

       function sub(){
        setval(val-1)
      }

  return (
    <>

      
    <h1>{val}</h1>
     <button onClick={add}>+</button>
     <button onClick={sub}>-</button>
      
     
   
    </>
  )
}

export default Counter