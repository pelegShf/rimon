import React from 'react';
import './meetUs.css';
import { FaPhone,FaMailBulk,FaMapMarkerAlt } from 'react-icons/fa';




const MeetUs = () => {

    return (
        <div className='meetUs-container'>
            <h1 className='meetUs-title'>דברו איתנו</h1>
            <ul>
                <li className='phone contactList'><FaPhone size="3.5vh" className='icon'/> <a href="tel:+972526755240">0546769535</a></li>
                <li className='email contactList' ><FaMailBulk size="3.5vh" className='icon'/>  <a href="mailto:rimon.farm.crew@gmail.com">rimon.farm.crew@gmail.com</a></li>
                <li className='location contactList'><FaMapMarkerAlt size="3.5vh" className='icon'/>  <a href="https://www.google.ro/maps/place/Rimon+Farm+%D7%97%D7%95%D7%95%D7%AA+%D7%A8%D7%99%D7%9E%D7%95%D7%9F%E2%80%AD/@31.3764231,34.8660065,1660m/data=!3m1!1e3!4m5!3m4!1s0x15028b17f3494b67:0xb118f4044a23cde!8m2!3d31.3749934!4d34.8578395">חוות רימון, להב</a></li>
            </ul>
        </div>
    )
}

export default MeetUs