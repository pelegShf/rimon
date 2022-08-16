import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_transp.png';
import './navbar.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const [main, setMain] = useState(true);
  // const [whoWeAre, setwhoWeAre] = useState(false);
  // const [activities, setActivities] = useState(false);
  // const [contactUs, setContactUs] = useState(false);
  const main = '/';
  const aboutUs = '/aboutUs';
  const activities = '/activities';
  const contactUs = '/contactUs';

  let activeStyle = {
    textDecoration: "underline",
  };

  function toggleMenuFunc() {
    setToggleMenu(!toggleMenu);
  }

  let location = useLocation();
  return (
    <>
      <BrowserView>
        <div className="rimon__navbar">
          {/*LOGO + LINKS*/}
          
          <div className="rimon__navbar-links">
            {/*Donate money button*/}
            <div className="rimon__navbar-sign">
              <button type="button" onClick="location.href ='https://headstart.co.il/project/61596'">?רוצה לתרום</button>
            </div>
            {/*LINKS*/}
            {/* main page */}
            <div className="rimon__navbar-links_container">
              <p><NavLink className='link' activeClassName="selected" to="/contactUs" >צור קשר</NavLink> </p>
              <p><NavLink className='link' activeClassName="selected" to="/aboutUs" onClick={() => setToggleMenu(false)}>מי אנחנו</NavLink></p>
            </div>

          </div>
          <div className="rimon__navbar_logo-container">
            <NavLink className='link' to="/" >
              <img src={logo} class="rimon__navbar_logo" />
            </NavLink>
          </div>
        </div>

      </BrowserView>
      <MobileView>
        <div className="rimon__navbar">
          {/*LOGO*/}
          <div className="rimon__navbar_logo-container">
            <NavLink className='link' to="/" >
              <img src={logo} class="rimon__navbar_logo" />
            </NavLink>
          </div>
          <div className="rimon__navbar-menu">
            {toggleMenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => toggleMenuFunc()} />
              : <RiMenu3Line color="#fff" size={27} onClick={() => toggleMenuFunc()} />}
            {/* TODO:  phone version for every page*/}

          </div>
        </div>
        {toggleMenu && (
          <div className="rimon__navbar-menu_container">
            <div className="rimon__navbar-menu_container-links">
              <p><NavLink className='link' to="/"    activeStyle={{ color: '#B0C15B' }} onClick={() => setToggleMenu(false)}>דף הבית</NavLink></p>
              <p><NavLink className='link' to="/aboutUs"   activeStyle={{ color: 'red' }} onClick={() => setToggleMenu(false)}>מי אנחנו</NavLink></p>
              <p><NavLink className='link' to="/contactUs"   activeStyle={{ color: '#B0C15B' }}onClick={() => setToggleMenu(false)}>צור קשר</NavLink></p>
              <p className='donate_mobile_link'><a href="https://headstart.co.il/project/61596" onClick={() => setToggleMenu(false)}>רוצה לתרום?</a></p>
            </div>
          </div>
        )}
      </MobileView>
    </>



  );
};

export default Navbar;