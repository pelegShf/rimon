import React from 'react'
import { Col, Row, Icon } from 'react-bootstrap';
import './footer.css';
import logo from '../../assets/logo.png';
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Footer = ({setMain,setAboutUs,setContactUs}) => {
  return (
    <div className='footer'>
      <img className="footer_logo" src={logo} />
      <div className='social_icons_container'>
        <h3 className='social_title'>עקוב אחרינו </h3>
        <div className='social_icons'>
          <a href="https://www.facebook.com/rimon.farm.crew" className="social">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/rimon.farm/" className="social">
            <BsInstagram />
          </a>
          <a href="https://www.youtube.com/channel/UC7WlmJzkphFtPZwJtAvc_9w" className="social">
            <BsYoutube />
          </a>
        </div>
      </div>

      <div className='website_directory' >
        <button className='footer_link' activeStyle={{ color: '#B0C15B' }}
          onClick={() => {
          
            setContactUs(false);
            setMain(true);
            setAboutUs(false);
          }}>
          דף הבית
        </button>
        <button className='footer_link'
          onClick={() => {
            setContactUs(false);
            setMain(false);
            setAboutUs(true);
          }}>
          מי אנחנו
        </button>
        {/* <button className='footer_link' to="/activities">פעילויות החווה</button> */}
        <button className='footer_link' activeStyle={{ color: '#B0C15B' }}
          onClick={() => {
            setContactUs(true);
            setMain(false);
            setAboutUs(false);
          }}>
          צור קשר
        </button>
      </div>
      <div className='misc' >
        <p className='footer_link'>דוחות כספים </p> {/*//TODO:change to <a></a> once there are links */}
        <p className='footer_link' >אישורים </p> {/*//TODO:change to <a></a> once there are links */}
      </div>
      <div className='copyrights' >
        <a href='' >&copy; SHEFI </a>
      </div>
    </div>
  )
}

export default Footer