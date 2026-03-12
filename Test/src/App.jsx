import { Route, Routes } from "react-router-dom"
import Counter from "./Counter"
import About from "./About"
import Home from "./Home"
import Layout from "./Layout"



function App() {


  return (
    <>
     <Routes>
         <Route path="/"element={<Layout/>}>
             <Route path="counter" element={<Counter/>}/>
             <Route path="home" element={<Home/>}/>
             <Route path="about" element={<About/>}/>
         </Route>
     </Routes>

     

  
   
    </>
  )
}

export default App
