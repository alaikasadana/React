// import { dataobject } from "./App"

import { useContext } from "react"
import { mainobject } from "./main"


function Child2() {
  // let store = useContext(mainobject)
 let {name,age,city} = useContext(mainobject)

  return (
    <>

    <h1>{name} {age} {city}</h1>

{/* <h1>{store}</h1> */}
      <hr />
    {/* <dataobject.Consumer>
        {
            (data)=>{
                return <h1>{data.name} {data.batch} {data.year} {data.city} {data.gender}</h1> 

            }
        }
    </dataobject.Consumer> */}

{/* <mainobject.Consumer>
  {
    (store) => {
      return <h1>{store}</h1>
  }}
</mainobject.Consumer> */}





    </>
  )
}

export default Child2