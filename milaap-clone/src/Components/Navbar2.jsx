import React from 'react'
import "../Components/Navbar.css";
import { Link } from 'react-router-dom'

const Navbar2 = () => {
    const [active, setActive] = React.useState("");
  return (
    <div className="NavBar">
        <div className="NavBar-leftGrid">
      <Link
         to='/home'  >Home</Link>
        

          
        <Link to='/donate'>Donate</Link>
        <Link to='/lend' >Lend</Link>
        <Link to='/contact'>Contact us</Link>
        </div>
    </div>
  )
}

export default Navbar2