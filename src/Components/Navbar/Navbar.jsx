import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <>
<nav>
        <h2>Navbar</h2>
        <ul>
            <li>Movie</li>
            <li>Events</li>
            <li>Contact Us</li>
        </ul>
        <button onClick={()=>{
          document.querySelector(".hamMenu").classList.toggle("activeHam")
        }}>
          <i class="fa fa-bars"></i>
        </button>
    </nav>
    <div className='hamMenu'>
      <ul>
        <button onClick={()=>{
          document.querySelector(".hamMenu").classList.toggle("activeHam")
        }}>&times;</button>
        <li>Movie</li>
        <li>Events</li>
        <li>Contact Us</li>
      </ul>
    </div>
    </>
    
  )
}

export default Navbar