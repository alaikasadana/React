import { useState } from "react"

function Form(){

    let [data,setData] = useState({
        name:"",age:"",city:""
     })


     function inputdata(e) {
        let {name,value} = e.target

        setData({...data,[name]:value})
        
     }

     function handleSubmit(e){
        e.preventDefault()
        console.log(data)
     }



    return(
        <>


         <h1>FORM COMPONENT</h1>

         <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name : </label>
            <input type="text" name="name" onChange={inputdata}/>    <br />  <br />

            <label htmlFor="">Age : </label>
            <input type="text" name="age" onChange={inputdata}/>    <br />  <br />

            <label htmlFor="">City : </label>
            <input type="text" name="city" onChange={inputdata}/>    <br />  <br />

            <input type="submit" />

             
           

         </form>

           {/* <h1>{data}</h1> */}

        </>
    )
}


export default Form