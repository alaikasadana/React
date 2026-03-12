import { Link, Outlet } from "react-router-dom"


function Layout() {


  return (
    <>
     <nav>
        <ul>
            <li><Link to="Home/">Home</Link></li>
            <li><Link to="about/">About</Link></li>
            <li><Link to="/">Counter</Link></li>
        </ul>
     </nav>

     <main>
        <Outlet />
     </main>
   

       <footer>
        <h1>This Footer Side </h1>
       </footer>
    </>
  )
}

export default Layout