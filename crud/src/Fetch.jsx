import axios from "axios"
import { useEffect, useState } from "react"

function Fetch(){

    let [apidata,setApidata] = useState([])
    let [show,setShow] = useState(false)
    let [edit,setEdit] = useState()

    function mydelete(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then((e)=>alert("deletedd..."))
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((r)=>setApidata(r.data))
    },[mydelete])


    function editinput(e){
        const {name,value} = e.target
        setEdit({...edit,[name]:value})
    }

    function finalsubmit(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${edit.id}`,edit)
        .then((e)=>alert("Updated successfullyy!!!!!"))
    }


    return(
        <>
        <h1>Get Data</h1>

        <table border="2px">
            <tr>
                
                <th>ID</th>
                 <th>Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                   <th>City</th>
                   <th>Delete</th>
                   <th>Edit</th>                

            </tr>

            {
                apidata.map((e)=>(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.contact}</td>
                        <td>{e.city}</td>
                        <td><button onClick={()=>mydelete(e.id)}>Delete</button></td>
                        <td><button onClick={()=>(setShow(true),setEdit(e))}>Edit</button></td>
                    </tr>
                ))
            }
        </table>



        <br /> <br />  <br />  <br /> <br /> <br />

{
        show && <form action="" onSubmit={finalsubmit}>
            <label htmlFor="">Name : </label>
            <input type="text" value={edit.name} name="name" onChange={editinput}/>     <br /> <br />

            <label htmlFor="">Age : </label>
            <input type="text" value={edit.age}  name="age" onChange={editinput}/> <br /> <br />

            <label htmlFor="">Contact : </label>
            <input type="text" value={edit.contact}  name="contact" onChange={editinput}/> <br /> <br />

            <label htmlFor="">City : </label>
            <input type="text" value={edit.city} name="city" onChange={editinput} /> <br /> <br />

            <input type="submit" />

            


        </form>

}
        </>
    )
}

export default Fetch