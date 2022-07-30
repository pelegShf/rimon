import React from 'react'
import { Col, Row, Icon } from 'react-bootstrap';
import './footer.css';
import logo from '../../assets/logo.png';
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const Footer = () => {
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
        <NavLink className='footer_link' to="/">דף הבית</NavLink>
        <NavLink className='footer_link' to="/aboutUs">מי אנחנו</NavLink>
        <NavLink className='footer_link' to="/activities">פעילויות החווה</NavLink>
        <NavLink className='footer_link' to="/contactUs">צור קשר</NavLink>
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