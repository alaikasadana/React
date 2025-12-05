import Child3 from "./Child3"

function Child2(props) {
  const { name } = props

  return (
    <>
    <h1>{name}</h1>
      <Child3 clg="rgc" course="BCA" />
    </>
  )
}

export default Child2;
