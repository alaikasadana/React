function App(){
  
  function demo(){
    alert("First")
  }

  function demo1(){
    alert("Second")
  }

  function demo2(){
    alert("Third")
  }

  function demo3(){
    alert("Fourth")
  }

  function demo4(){
    alert("Fivth")
  }
  
  return(
  <>
  <button onClick={demo}>Click</button>  <br />  <br />
   <button onDoubleClick={demo1}>Click</button>     <br />  <br />
    <button onMouseOut={demo2}>Click</button>         <br />  <br />
     <button onMouseDown={demo3}>Click</button>      <br />  <br />
      <button onMouseEnter={demo4}>Click</button>      <br />  <br />



      {/* <button onClick={()=>demo(cybrom)}>Click</button> =====  to send an agrgument we use arrow function  */}
  </>  
  )
}




export default App