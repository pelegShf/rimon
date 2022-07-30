import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo_transp.png';
import './navbar.css';
import { Link, NavLink,useLocation   } from 'react-router-dom';

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

  let location = useLocation();
  return (
    <div className="rimon__navbar">

      {/*LOGO + LINKS*/}
      <div className="rimon__navbar-links">
        {/*Donate money button*/}
        <div className="rimon__navbar-sign">
          <button type="button">?רוצה לתרום</button>
        </div>
        {/*LINKS*/}
        {/* main page */}
       
        {location.pathname == main && (
          <div className="rimon__navbar-links_container">
            <p><NavLink className='link' to="/contactUs" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>צור קשר</NavLink> </p>
            {/* <p><NavLink className='link' to="/activities" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>מה קורה בחווה</NavLink></p> */}
            <p><NavLink className='link' to="/aboutUs" style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>מי אנחנו</NavLink></p>
          </div>
        )}
        {/* who we are page */}
        {location.pathname == aboutUs && (
          <div className="rimon__navbar-links_container">
            <p><a href="#summary">תקציר מנהלים</a></p>
            <p><a href="#directors">ועד מנהל</a></p>
            <p><a href="#trustees">חבר נאמנים</a></p>
            <p><a href="#staff">סגל החווה</a></p>
          </div>
        )}
        {/* activites page */}
        {location.pathname == activities && (
          <div className="rimon__navbar-links_container">
            <p><a href="#events">אירועים</a></p>
            <p><a href="#workshops">סדנאות</a></p>
            <p><a href="#gallery">גלריה</a></p>
          </div>
        )}
        {/*contact Us page */}
        {location.pathname == contactUs && (
          <div className="rimon__navbar-links_container">
            <p><a href="#visits">ביקורים</a></p>
            <p><a href="#volunteering">התנדבות</a></p>
            <p><a href="#service">שנה שירות ושירות לאומי</a></p>
          </div>
        )}
      </div>
      {/*LOGO*/}
      <div className="rimon__navbar_logo-container">
      <NavLink className='link' to="/" > <img src={logo} class="rimon__navbar_logo"/></NavLink>
      </div>
      <div className="rimon__navbar-menu">

        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {/* TODO:  phone version for every page*/}
        {toggleMenu && (
          <div className="rimon__navbar-menu_container scale-up-center">
            <div className="rimon__navbar-menu_container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#wrimon">What is rimon?</a></p>
              <p><a href="#possibility">Open AI</a></p>
              <p><a href="#features">Case Studies</a></p>
              <p><a href="#blog">Library</a></p>
            </div>
            <div className="rimon__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;