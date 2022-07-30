import React from 'react';
import './aboutUs.css';
import {Directors,Trustees,WhoWeAre,Staff} from './components';



const AboutUs = () => {
  return (
  <div>
    <WhoWeAre />
    <Directors />
    <Trustees />
    <Staff />
  </div>
  )
}

export default AboutUs