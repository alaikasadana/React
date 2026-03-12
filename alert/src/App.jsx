import { toast } from "react-toastify"

function App() {

  function demo(){
    toast("Helllooo",{
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
      type:"success"
     
    })
  }

  return (
    <>

    <button onClick={demo}>CLICK</button>

    </>
  )
}

export default App
