import axios from "axios"
import { useEffect, useState } from "react"


function App() {
  
  let [data,setData] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((r)=>setData(r.data))
  },[])

  return (
    <>

    <table border="1cmd2px"> 
      <tr>
      <th>userID</th>
      <th>ID</th>
      <th>Title</th>
      <th>Body</th>
      </tr>

      {
        data.map((e)=>(
        <tr>
          <td>{e.userId}</td>
          <td>{e.id}</td>
          <td>{e.title}</td>
          <td>{e.body}</td>

        </tr>

        ))
        
      }
    </table>




    </>
  )
}

export default App
