import React from 'react'
import './whatRimon.css';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const WhatRimon = () => {
  return (
    <div className='rimon__whatrimon-container'>
       
        <div data-aos="fade-right"  data-aos-duration="700" className='rimon__whatrimon_trapezoid' id="rimon__whatrimon_trapezoid1">
          <p className='rimon__whatrimon_trapezoid-text'>
            <span>  טיפול אישי וקבוצתי </span>
            לשיפור וחיזוק הבטחון העצמי
            , הכישורים והקשרים החברתיים של הנעריים.</p>
        </div>
   
        <div data-aos="fade-left" data-aos-duration="700" className='rimon__whatrimon_trapezoid' id="rimon__whatrimon_trapezoid2">
          <p className='rimon__whatrimon_trapezoid-text'>
            <span>  חיבור לאדמה ולמרחב הפתוח </span>
            תוך השתלבות
            בצוות אורגני, אשר מסייע להם להיות קשובים
            לעצמם ולסביבתם. בנוסף להגברת תחושת
            השייכות, האחריות והמסוגלות.
          </p>
        </div>
      
      
        <div data-aos="fade-right" data-aos-duration="700" data-aos-anchor-placement="center-bottom" className='rimon__whatrimon_trapezoid' id="rimon__whatrimon_trapezoid3">
          <p className='rimon__whatrimon_trapezoid-text'>
            <span> מסגרת המהווה תשתית </span>
            תעסוקתית-חינוכית
            לנוער בסיכון, ומייצרת חוויה חיובית ועוצמתית.
          </p>
        </div>
    </div>
  )
}

export default WhatRimon