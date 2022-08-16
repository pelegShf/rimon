import React, { useState, useEffect } from 'react';
import ReactPlayer from "react-player"
import './news.css';

const News = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <div className='rimon__news_container-wrapper'>
      <div className='rimon__news_container'>
        <div className='rimon__news-row'>
          <div className='video item1'>
            <ReactPlayer
              url="https://www.youtube.com/embed/s6RxUFNAl5E"
              controls
              className='video item1'
              height={windowSize.innerWidth < 700 ? "50vh" : "35vh"}
              width={windowSize.innerWidth < 700 ? "90vw" : "35vw"}
            />
          </div>
          <div className='text'>
            <h3>הכירות את חוות רימון</h3>
            <p>ברוכים הבאים לחוות רימון - מיזם פורץ דרך בדרום.<br />
              מדובר בחווה חקלאית חינוכית לקידום נוער בסיכון - בני/בנות 15-18 אשר נשרו ממסגרות הלימודים ונמצאים במצבי סיכון/מצוקה.<br />
              מטרתנו הראשית היא הגדלת מרחב האפשרויות של הנערות והנערים, בעזרת רכישת כלים פרקטיים, הגדלת תחושת הביטחון והערך העצמי וחשיפה למגוון רבדים בחברה הישראלית.<br />
              כדי להקים את החווה, יצאנו לקמפיין גיוס המונים בהדסטארט.
            </p>
          </div>
        </div>
        <div className='rimon__news-row'>
          <div className='text' >
            <h3>ראיון שלנו בערוץ 14</h3>
            <p>
              החקלאות היא אחד הכלים המרכזיים בהעצמת בני ובנות נוער שמגיעים לחווה. <br />
              יחד אנחנו דואגים לטבע, עובדים את האדמה, ומתחברים לשורשים.<br />
              כדי לאפשר לבני נוער נוספים בסיכון להגיע אלינו ולקחת חלק בחווה הטיפולית, אנחנו צריכים את עזרתכםן.
            </p>
          </div>
          <div className='video item1'>
            <ReactPlayer
              url="https://www.youtube.com/embed/Vt5MhmjhpMg"
              controls
              className='video item1'
              height="35vh"
              width="35vw"
              origin= 'http://localhost:3000'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default News