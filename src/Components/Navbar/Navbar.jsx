import React from 'react'
import "./Navbar.css"
import logo from "../../Assets/Logo.svg"
const Navbar = (props) => {
  return (
    <>
    <nav >
        <img src={logo} alt="Sainath Productions" className='logo'/>
        <ul className="links">
            <li onClick={props.movieLink} >Movie</li>
            <li onClick={props.eventsLink}>Events</li>
            <li onClick={props.contactLink}>Contact Us</li>
        </ul>
        <button onClick={()=>{
          document.querySelector(".hamMenu").classList.toggle("activeHam")
        }}>
          <i className="fa fa-bars"></i>
        </button>
    </nav>
    <div className='hamMenu'>
      <ul className="links">
        <button onClick={()=>{
          document.querySelector(".hamMenu").classList.toggle("activeHam")
        }}>&times;</button>
        <li onClick={()=>{
          document.querySelector(".hamMenu").classList.toggle("activeHam")
          props.movieLink()
          }} >Movie</li>
        <li onClick={()=>{
          document.querySelector(".hamMenu").classList.toggle("activeHam")
          props.eventsLink()
          }}>Events</li>
        <li onClick={()=>{
          document.querySelector(".hamMenu").classList.toggle("activeHam")
          props.contactLink()
          }}>Contact Us</li>
      </ul>
    </div>
    </>
    
  )
}

export default Navbar