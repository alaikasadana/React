import About from "./About"
import Contact from "./Contact"
import Home from "./Home"
import {Routes , Route} from "react-router-dom"
import Layout from "./Layout"


function App() {
  
  return (
    <>
    <Routes>
      <Route path="/"element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
