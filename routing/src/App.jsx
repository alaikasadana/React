import { Route, Routes } from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Help from "./Help"
import Contact from "./Contact"
import Services from "./Services"
import Profile from "./Profile"
import Dep from "./Dep"




function App() {
  

  return (
    <>
       <Routes>
         <Route  index element={ <Home />}/>
         <Route  path="/home" element={ <Home />}/>
         <Route  path="/about" element={ <About />}/>

         <Route  path="/help" element={ <Help />}/>
         <Route  path="/contact" element={ <Contact />}/>
         <Route  path="/services" element={ <Services />}/>
         <Route  path="/dep" element={ <Dep />}/>
         <Route  path="/profile" element={ <Profile />}/>

       </Routes>
    </>
  )
}

export default App
