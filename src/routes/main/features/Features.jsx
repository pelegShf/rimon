import React from 'react'
import './features.css';

import recycle from "../../../assets/recycle.jpg";
import tree from "../../../assets/tree.jpg";
import wheat from "../../../assets/wheat.jpg";
import heart from "../../../assets/heart.jpg";



const Features = () => {
  return (
    <div className='rimon__features'>
      <div className='mobile_col'>
        <div className='rimon__features-card'>
          <img src={recycle} />
          <h3>קיימות (0 פסולת)</h3>
          <p>מיחזור, בניה אקולוגית, קומפוסט, אגירת נגר עלי, חשמל סולארי, ביו גז</p>
        </div>
        <div className='rimon__features-card'>
          <img src={wheat} />
          <h3>חקלאות מקומית</h3>
          <p>גינת ירק עונתית לצד בוסתן
            מבוססת עונות שנה עם קשר
            ישיר לקהילה והצרכן</p>
        </div>
      </div>
      <div className='mobile_col'>
        <div className='rimon__features-card'>
          <img src={tree} />
          <h3>רוגע ואסתטיקה</h3>
          <p>קהילה. פינות חמד ושבילים</p>
        </div>

        <div className='rimon__features-card'>
          <img src={heart} />
          <h3>בריאות פיזית</h3>
          <p>ללא ריסוסים או דשנים כימיים</p>
        </div>
      </div>
    </div>
  )
}

export default Features