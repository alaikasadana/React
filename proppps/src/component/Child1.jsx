function Child1(props){
    return (
        <>
        <h1>Child</h1>
        <hr />


        <h4>{props.name} <br />
            {props.age} <br />
            {props.city}  <br />
            {props.course} <br />
            {props.contact}</h4>
        </>
    )
}


export default Child1