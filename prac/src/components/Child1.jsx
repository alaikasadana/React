import Child2 from "./Child2"



function Child1(props){
    
    return(<>
    <Child2 nam={props.name}/>
    </>)
}

export default Child1 