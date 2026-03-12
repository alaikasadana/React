import Child1 from "./component/Child1"
import Child2 from "./component/Child2"
import Child3 from "./component/Child3"



function App(){
  return(
    <>
    <h1>App</h1>

    <Child1 name="alaika" age={20} city="bhopal" course="bca" contact="8817273" />
    <hr />

    <Child2 course="FSD" dura="6-mnth" />
    <hr />

    <Child3 country="india" />

    </>
  )
}


export default App