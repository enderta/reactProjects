import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
         <nav>
            <img src='https://cdn.worldvectorlogo.com/logos/react-2.svg ' className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    </div>
  )
}

export default Navbar