import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import { MdOutlinePostAdd } from "react-icons/md";

function HomeLayout() {
  return (
    <div>
     <header>
      <nav id='nave'>
      <h1>Book Search</h1>
      
       <NavLink  to="/Creation"><MdOutlinePostAdd size='30'/></NavLink>
       
       </nav>
     </header>
     <main>
     <Outlet/>
     </main>

    </div>
  )
}

export default HomeLayout