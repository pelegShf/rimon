import React from 'react';


import './gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Gallery = () => {

    return (
        <Swiper
            className='gallery'
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide1'>
                    <div className='text_container' id='text_container1'>
                        <h2 className='slide_title'>דואגים לסביבה</h2>
                        <p>כחלק מהעבודות בחווה אנו דואגים לאסוף ולנקות זבל מהטבע.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide2'>
                    <div className='text_container' id='text_container2'>
                        <h2 className='slide_title'>התנדבות בחווה</h2>
                        <p>חיל התותחנים- התותחים! באו לעזור ולתרום, וסיימנו בטקס מרגש ביחד.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide3'>
                    <div className='text_container' id='text_container3'>

                        <h2 className='slide_title'>היום יום בחווה</h2>
                        <p>.אין דבר יותר מספק משקיעה יפה אחרי יום מלא עשייה בחקלאות</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide4'>
                    <div className='text_container' id='text_container4'>
                        <h2 className='slide_title'>התנדבות בחווה</h2>
                        <p>מכינת ?? באו ליום שלם של התנדבות. התחלנו בשעות המוקדמות בעבודה בשטח - שתלנו, קטפנו, והכנו תשתיות. בשעות החמות עברנו לכיתה וניהלנו שיח על ציונות, התנדבות ומה שבניהם.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide5'>
                    <div className='text_container' id='text_container5'>
                        <h2 className='slide_title'>תרומה לחווה</h2>
                        <p>מושב דביר בא ותרם לנו, ושתלנו ביחד עץ ליישוב.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide not-mobile'>
                <div className='slide' id='slide6'>
                    <div className='text_container' id='text_container6'>
                        <h2 className='slide_title'>התנדבות בחווה</h2>
                        <p>יחידת האופנוענים של משטרת ישראל באה לראות ולעזור לחווה. עבדנו בשדה החסות, תותים וכרוב. </p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide not-mobile'>
                <div className='slide' id='slide7'>
                    <div className='text_container' id='text_container7'>
                        <h2 className='slide_title'>חקלאות</h2>
                        <p>אין כמו עבודת כפיים, ושרואים את הגידולים מול העיניים בכלל! כמה סיפוק, בואו תצטרפו אלינו</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide not-mobile'>
                <div className='slide' id='slide8'>
                    <div className='text_container' id='text_container8'>
                        <h2 className='slide_title'>חקלאות</h2>
                        <p>איזה חסות! 0 הדברה, הכל עבודת ידיים. מהשדה לשולחן.</p>
                    </div>
                </div>
            </SwiperSlide>




        </Swiper>
    )
}

export default Gallery