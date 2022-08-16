import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_transp.png';
import './navbar.css';
import {  NavLink, useLocation } from 'react-router-dom';
import { BrowserView, MobileView } from 'react-device-detect';

const Navbar = ({setMain,setAboutUs,setContactUs}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
 
  function toggleMenuFunc(props) {
    setToggleMenu(!toggleMenu);
  }
function toggleStates(){

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
              <a href='https://headstart.co.il/project/61596' >?רוצה לתרום</a>
            </div>
            {/*LINKS*/}
            {/* main page */}
            <div className="rimon__navbar-links_container">
              <p><button className='link'  onClick={() => {setContactUs(true);setMain(false);setAboutUs(false);}} >צור קשר</button> </p>
              <p><button className='link'  onClick={() => {setContactUs(false);setMain(false);setAboutUs(true);}} >מי אנחנו</button> </p>

              {/* <p><NavLink className='link'  to="/aboutUs" >מי אנחנו</NavLink></p> */}
            </div>

          </div>
          <div className="rimon__navbar_logo-container">
              <img src={logo} className="rimon__navbar_logo" alt="logo" onClick={() => {setContactUs(false);setMain(true);setAboutUs(false);}}/>
          </div>
        </div>

      </BrowserView>
      <MobileView>
        <div className="rimon__navbar">
          {/*LOGO*/}
          <div className="rimon__navbar_logo-container">
            {/* <NavLink className='link' to="/" > */}
              <img src={logo} className="rimon__navbar_logo" alt="logo" onClick={() => {setContactUs(false);setMain(true);setAboutUs(false);}} />
            {/* </NavLink> */}
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
              <p><button className='link' onClick={() => {setToggleMenu(false);setContactUs(false);setMain(true);setAboutUs(false);}}>דף הבית</button></p>
              <p><button className='link' onClick={() => {setToggleMenu(false);setContactUs(false);setMain(false);setAboutUs(true);}}>מי אנחנו</button></p>
              <p><button className='link' onClick={() => {setToggleMenu(false);setContactUs(true);setMain(false);setAboutUs(false);}}>צור קשר</button></p>
              <p className='donate_mobile_link'><a href="https://headstart.co.il/project/61596" onClick={() => setToggleMenu(false)}>רוצה לתרום?</a></p>
            </div>
          </div>
        )}
      </MobileView>
    </>



  );
};

export default Navbar;