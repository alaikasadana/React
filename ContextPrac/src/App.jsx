import Child1 from "./components/Child1"
import Child3 from "./components/Child3"
import { mainobject } from "./main"
import { useContext } from "react"



function App() {
  
let {name,age,city} = useContext(mainobject)
  return (
    <>
  <h1>{name} {age} {city}</h1>

          
        <Child1/>
             <Child3/>

    
            

    </>
  )
}

export default App
