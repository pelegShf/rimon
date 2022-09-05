import React from 'react';
import './etc.css';
import { FaCalendarAlt, FaMailBulk, FaMapMarkerAlt } from 'react-icons/fa';
import { MdVolunteerActivism } from "react-icons/md";
import { GiFarmer } from "react-icons/gi";
import { BsHandThumbsUpFill } from "react-icons/bs";



const Etc = () => {

    return (
        <div className='etc-container'>
            <h1 className='meetUs-title'>בואו לחוות את החווה</h1>
            <ul>
                <li className='phone contactList'><MdVolunteerActivism size="3.5vh" className='icon' /><span className='icon_text'>שנת שירות</span></li>
                <li className='email contactList' ><BsHandThumbsUpFill size="3.5vh" className='icon' /><span className='icon_text'>שירות לאומי</span></li>
                <li className='location contactList'><GiFarmer size="3.5vh" className='icon' /><span className='icon_text'>קטיף עצמי</span></li>
                <li className='location contactList'><FaCalendarAlt size="3.5vh" className='icon' /><span className='icon_text'>אירועים לחברות</span></li>

            </ul>
        </div>
    )
}

export default Etc