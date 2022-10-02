import React from 'react'

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (
    <footer>
        <div style={{flex:"2"}}>
            Sainath Production
        </div>
        <div style={{flex:"5"}}>
            27th KM Milestone, Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh 201009 <br/><br/>
            +91 65XXXXXXX <br/><br/>
            contact@sainath production <br/>
        </div>
        <div style={{flex:"4"}}>
            <button><i class="fa-brands fa-facebook-f"></i></button>
            <button><i class="fa-brands fa-linkedin-in"></i></button>
            <button><i class="fa-brands fa-twitter"></i></button>
            <br/> 
            <div style={{textAlign:"right", color: "#FFFFFF",opacity: "0.65"}}>© {year} Sainath Production <br/>
            All rights reserved </div> 
            
        </div>

    </footer>
  )
}

export default Footer