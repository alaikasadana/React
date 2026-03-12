import { useState } from "react"
import Form from "./Form"

function App() {

  let [data,frmdata] = useState()
  let [con,setContact] = useState()
  let [ci,setCity] = useState()

  function handledata(e){
    console.log(e.target.value)
    frmdata(e.target.value)
  }

    
  function contact(e){
    setContact(e.target.value)
  }

  function city(e){
    setCity(e.target.value)
  }

  function submit(event){
    event.preventDefault()
    console.log(ci)
  }

  return (
    <>
        <h1>Form</h1>
  
       {/* <h1>  {data} </h1> 
       <h1> {con}</h1>
       <h1>{ci}</h1> */}

        <form action="" onSubmit={submit}>
          <label htmlFor="">Name</label>
          <input type="text" onChange={handledata}/>

          <label htmlFor="">Contact</label>
          <input type="text" onChange={contact} />

          <label htmlFor=""> City </label>
          <input type="text"  onChange={city} />

          <input type="submit" />


        </form>

       <br />
       <hr />
       <br /> <br /> <br />


       <Form />
    </>
  )
}

export default App
