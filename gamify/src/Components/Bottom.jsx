import React from 'react'
import './Bottom.css'
const Bottom = () => {
    return (
        <div className='bottom' id='membership'>
            <h1 style={{fontSize:'2.5rem'}}>Get Started</h1>

            <div className="inner-container">
                <div className="cont">
                    <img src="./star.jpg" style={{ width: '6rem', marginBottom: '1rem' }} alt="" />
                    <h2>Get Membership</h2>
                  
                </div>
                <div className="cont">
                    <img src="./computer.png " style={{ width: '6rem', marginBottom: '1rem' }} alt="" />
                    <h2>Go to Downloads</h2>
                </div>
                <div className="cont">
                    <img style={{ width: '6rem', marginBottom: '1rem' }} src="./cloud.png" alt="" />
                    <h2>Games Library</h2>
                    
                </div>
            </div>
        </div>
    )
}

export default Bottom