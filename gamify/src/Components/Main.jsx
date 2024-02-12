import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <div className='container' id='new'>
      <h2 >New Generation of Games</h2>
      <h1 style={{ marginTop: '1rem' }}>Your Game, Our Zone, Let's Goo !!</h1>

      <div className="inner-container">
        <div className="cont">
          <img src="./game.png" style={{width:'6rem', marginBottom:'1rem'}} alt="" />
          <h2>1500+ Games</h2>
          <h4>
            GeForce NOW connects to digital PC game stores so you can stream the games you already own. Plus, game purchases you make on your personal store accounts will always stay with you.</h4>
        </div>
        <div className="cont">
          <img src="./computer.png " style={{width:'6rem', marginBottom:'1rem'}} alt="" />
          <h2>1500+ Games</h2>
          <h4>
 NOW instantly transforms your laptop, desktop, Mac, TV, Android device, iPhone, or iPad into the powerful PC gaming rig you’ve always dreamed of.​</h4>
        </div>
        <div className="cont">
          <img style={{width:'6rem', marginBottom:'1rem'}} src="./cloud.png" alt="" />
          <h2>1500+ Games</h2>
          <h4>
          Say goodbye to large game downloads, updates, and patches. All GeForce NOW games are always up to date, so you can spend less time waiting and more time gaming.</h4>
        </div>
      </div>
      <button className='join'>Join Now</button>
      <div className="slider"  id='games'>
        <div>
          <img id='img1' src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/apps/2nd.jpg" alt="" />
        </div>
        <div>
          <img id='img2' src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/apps/3rd.jpg" alt="" />
        </div>
        <div>
          <img  id='img3'src="https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/overview/apps/1st.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main