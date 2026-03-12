import { useEffect, useState } from "react";
function Home(){
    


  const [color, setColor] = useState("black");

  function demo() {
    setColor("red");
  }
   useEffect(()=>alert("hello"),[color])
//    useEffect(()=>alert("hello"),[])  // empty dependency
//    useEffect(()=>alert("hello"))      // without dependency

  return (
    <>
      <h1 style={{ color: color }}>Hello World!!</h1>
      <button onClick={demo}>Click Here</button>
    </>
  )}




export default Home