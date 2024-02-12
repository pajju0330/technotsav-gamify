import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div>
            <img className='headerimg' src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/geforce-now-ecosystem-bb580_440-d.jpg" alt="" />
            <h1 className='title' style={{color:'white'}}> <span className='gamify'>Gamify</span><br/> Your Gaming Journey Begins !
            <br/>
            <button className='play'>Play Now</button>
            </h1>
        </div>
    </div>
  )
}

export default Header