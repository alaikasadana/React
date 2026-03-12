import { useState } from "react"
import { Link } from "react-router-dom"

function Home(){

    let [val,setVal] = useState(true)

    function display(){
        setVal(!val)
    }

    return(
        <>
        <h1>Home page</h1>
        <Link to="/" > Home</Link>
        <Link to="/about" > About </Link>
        
        {val ? <h1>Get Ready</h1> : <h1>Not Ready</h1>}

        <button onClick={display}>Change</button>
        </>
    )
}

export default Home