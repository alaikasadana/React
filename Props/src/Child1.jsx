import Child from './Child' 

function Child1(props){
    return(
        <>
        <h1>This is Child</h1>

        <h1>{props.name}</h1>

        <Child  name="alaika"/>
        </>
    )
}

export default Child1