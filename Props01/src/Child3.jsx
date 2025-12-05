import Child4 from "./Child4"
 

function Child3({clg,course}){
    let person = {
        name:"aditya" , age:19 , city:"bhopal"
    }

    return(
        <>
        <h1>{clg} {course}</h1>
         <Child4  userdata={person}/>
        </>
    )
 }


 export default Child3