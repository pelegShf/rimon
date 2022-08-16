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
          <a href="" className="social">
            <BsFacebook />
          </a>
          <a href="" className="social">
            <BsInstagram />
          </a>
          <a href="" className="social">
            <BsYoutube />
          </a>
          <a href="" className="social">
            <BsTwitter />
          </a>
        </div>
      </div>
    
      <div className='website_directory' >
        <button className='footer_link'  activeStyle={{ color: '#B0C15B' }} onClick={() => {setContactUs(false);setMain(true);setAboutUs(false);}}>דף הבית</button>
        <button className='footer_link' onClick={() => {;setContactUs(false);setMain(false);setAboutUs(true);}}>מי אנחנו</button>
        {/* <button className='footer_link' to="/activities">פעילויות החווה</button> */}
        <button className='footer_link' activeStyle={{ color: '#B0C15B' }} onClick={() => {setContactUs(true);setMain(false);setAboutUs(false);}}>צור קשר</button>
      </div>
      <div className='misc' >
        <a className='footer_link' href='' >דוחות כספים </a>
        <a  className='footer_link'href='' >אישורים </a>
        <a className='footer_link' href='' >עוד מעטםת</a>
        <a className='footer_link' href='' >עוד שורה </a>
      </div>
      <div className='copyrights' >
        <a href='' >&copy; SHEFI </a>
      </div>
    </div>
  )
}

export default Footer