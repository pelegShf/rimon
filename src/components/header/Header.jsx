import React from 'react'
import './header.css';

// import background_video from '../../assets/video_bg.mp4';


const Header = () => {
  return (
    <div className='rimon__header'>
        <video loop muted autoPlay id="video" >
          <source src="https://firebasestorage.googleapis.com/v0/b/rimon-122.appspot.com/o/DJI_0861.mp4?alt=media&token=97856706-3b2a-4a03-aabe-d7373c750b79" type="video/mp4" />
        </video>
    </div>
  )
}

export default Header