import Child2 from './Child2' 

function Child1(props){
    return(
        <>
        <h1>This is Child</h1>

        <h1>{props.name}</h1>

        <Child2  name="alaika"/>
        </>
    )
}

export default Child1