import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){


    let [loginval,setLoginval] = useState({
        email:"",password:""
    })

    // let navigator = useNavigate()

    function logininput(e){
        let {name,value} = e.target
        setLoginval({...loginval,[name]:value})

    }

    function loginsubmit(e){
        e.preventDefault()
        let localdata = JSON.parse(localStorage.getItem("userdata"))
        if(loginval.email != localdata.email || loginval.password != localdata.password){
            alert("not found....")
        }
        else{
            alert("found")
        }
    }

    return(
        <>

        <h1> Login  </h1>
        
        <form  onSubmit={loginsubmit}>

            <label htmlFor=""> Email: </label>
            <input type="text" name="email"  onChange={logininput}/> <br /> <br /> 

            
            <label htmlFor=""> Password: </label>
            <input type="text" name="password"   onChange={logininput}/> <br /> <br /> 

            <input type="submit" />

        
        </form>
        
        </>
    )
}

export default Login