import About from "./About"


function Home() {
const name = "alaika"

  return (
    <>
     <h1>This is Home Page</h1> <hr />

     <About name={name}/>
   
    </>
  )
} 

export default Home