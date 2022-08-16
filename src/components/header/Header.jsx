import React from 'react'
import './header.css';
import { BrowserView, MobileView } from 'react-device-detect';

// import background_video from '../../assets/video_bg.mp4';


const Header = () => {
  return (
    <>
      <BrowserView>
        <div className='rimon__header'>
          <video playsInline loop muted autoPlay id="video" >
            <source src="https://firebasestorage.googleapis.com/v0/b/rimon-122.appspot.com/o/DJI_0861.mp4?alt=media&token=97856706-3b2a-4a03-aabe-d7373c750b79" type="video/mp4" />
          </video>
        </div>
      </BrowserView>
      <MobileView>
        <div className='rimon__header-mobile-container'></div>
        <div className='rimon__header-mobile'>

          <div className='backgroundImage_mobile'></div>
          <div className="textdiv_mobile">
            <h1>חווה חינוכית לנוער</h1>
            <p>.בשביל האדם. דרך האדמה</p>
          </div>

        </div>
        <div className='details_mobile'>
          <p className='farm_bluf'>
            ׳חוות רימון׳ הינה מסגרת יום- מניעתית , אשר מטרתה לתת מענה חינוכי-טיפולי לבני נוער ללא מסגרת, המצויים במצבים של קושי נפשי ו/או רגשי ונמצאים בסיכון לקיום התנהגויות הרסניות
          </p>
          <div className="donate">
            <a href='https://headstart.co.il/project/61596' >?רוצה לתרום</a>
          </div>

        </div>
      </MobileView>
    </>
  )
}

export default Header