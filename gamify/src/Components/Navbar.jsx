import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navhead'>
        <h1>Gamify</h1>
        <GiHamburgerMenu onClick={()=>{
          const hamdiv = document.getElementById('hamdiv');
          if(hamdiv.style.marginLeft == "-9rem"){
            hamdiv.style.marginLeft = "2rem"
          }else{
            hamdiv.style.marginLeft = "-9rem"
          }
        }} className='ham' />
      </div>
      <div className='hamdiv'>
        <ul className='ul'  id='hamdiv'>
          <li><a href='#membership' >Membership</a></li>
          <li ><a href='#games' >Games</a></li>
          <li><a href='#new' >What's New</a></li>
          <li><a href='#feedback' >Feedback</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar