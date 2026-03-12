import { useState } from "react"

function State(){
    let [num,setNum] = useState(8)
    function demo(){
        setNum(87)
    }

    return(
    <>
    <h1>Home Page = {num}</h1>
    
    <button onClick={demo}>Change</button>

    <button onClick={()=>setNum("hello")}>Click here</button>
    </>)
}

export default State