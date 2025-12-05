import Head from "./Head"



function App(){
  let name = "alaika"

  let person = {
    name:"shakti" ,
    class:"bca"
  }

  let emp = [
    {
      name:"alaika" ,
      city:"bhopal" ,
      contact:909876
    }
    ,
       {
      name:"aditya" ,
      city:"indore" ,
      contact:909998
    }
  ]
  return(
  <>
             <h1>  APP PAGE!!  </h1>
             <h1>{name}</h1>
             <h1>{person.name}</h1>
                  <hr />



                  <ul>
                    {
                      emp.map((e)=>(
                        <li>{e.name}</li>

                      ))
                    }
                  </ul>



                  <hr />

                  <table border="2px">
                    <tr>
                      <th>Name</th>
                      <th>City</th>
                      <th>Contact</th>
                      
                    </tr>


                    {
                      emp.map((e)=>

                        <tr>
                          <td>{e.name}</td>
                          <td>{e.city}</td>
                          <td>{e.contact}</td>
                        </tr>
                      
                      )
                    }
                  </table>



                 < Head />
  </>

)
}

export default App