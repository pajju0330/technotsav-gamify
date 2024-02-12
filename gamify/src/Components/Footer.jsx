import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='feedback'>
        <div className="left">
            <div className="form">
                <h2>Your Feedback</h2>
                <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='John Doe' style={{marginLeft:'1rem'}}/>
                </div>
                <div>
                <label htmlFor="">Feedback</label>
                <input type="text" placeholder='John Doe' style={{marginLeft:'1rem'}}/>
                </div>
                <button className='play' type='submit' onClick={()=>
                alert('Form Submitted Successfully !!')
                }>Submit</button>
            </div>
        </div>
        <h3 className='three'>Copyright @all rights reserved</h3>
    </div>
  )
}

export default Footer