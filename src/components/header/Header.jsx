import React from 'react'
import './header.css';
import { BrowserView, MobileView } from 'react-device-detect';

// import background_video from '../../assets/video_bg.mp4';


const Header = () => {
  return (
    <>
      <BrowserView>
        <div className='rimon__header'>
          <video playsinline loop muted autoPlay id="video" >
            <source src="https://firebasestorage.googleapis.com/v0/b/rimon-122.appspot.com/o/DJI_0861.mp4?alt=media&token=97856706-3b2a-4a03-aabe-d7373c750b79" type="video/mp4" />
          </video>
        </div>
      </BrowserView>
      <MobileView>
        <div className='rimon__header-mobile'>

          <div className='backgroundImage_mobile'></div>
          <div className="textdiv_mobile">
            <h1>חווה חינוכית לנוער</h1>
            <p>.בשביל האדם. דרך האדמה</p>

          </div>
        </div>
      </MobileView>
    </>
  )
}

export default Header