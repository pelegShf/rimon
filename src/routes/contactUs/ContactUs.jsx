import React from 'react';
import './contactUs.css';
import { Map,MeetUs,Etc } from './components';



const ContactUs = () => {

  return (
    <div className='rimon__contactUs-container'>
      <div className='top_image-container'>
        <div className='top_image'></div>
      </div>
      <div className='bottom_info'>
        <Map className="map" />
        <MeetUs className='meetUs' />
        <Etc className='etc' />
      </div>
    </div>
  )
}

export default ContactUs