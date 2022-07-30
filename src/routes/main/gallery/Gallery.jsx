import React from 'react';
import FirstImage from '../../../assets/gallery/1.JPEG';
import SecondImage from '../../../assets/gallery/2.jpeg';
import ThirdImage from '../../../assets/gallery/3.jpeg';
import FourthImage from '../../../assets/gallery/4.JPG';
import FifthImage from '../../../assets/gallery/5.jpeg';
import SixthImage from '../../../assets/gallery/6.JPG';
import SeventhImage from '../../../assets/gallery/7.JPG';
import EighthImage from '../../../assets/gallery/8.JPG';



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
                        <h2 className='slide_title'>אירועי הקמת החווה</h2>
                        <p>.בתאריך ככה וככה התקבצו עשרות אנשים והתחלנו להכין את החווה ניקנו, סידרנו גזמנו ושתלנו.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide2'>
                <div className='text_container' id='text_container2'>
                        <h2 className='slide_title'>אירועי הקמת החווה</h2>
                        <p>.בתאריך ככה וככה התקבצו עשרות אנשים והתחלנו להכין את החווה ניקנו, סידרנו גזמנו ושתלנו.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide3'>
                <div className='text_container' id='text_container3'>
                        <h2 className='slide_title'>אירועי הקמת החווה</h2>
                        <p>.בתאריך ככה וככה התקבצו עשרות אנשים והתחלנו להכין את החווה ניקנו, סידרנו גזמנו ושתלנו.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide4'>
                <div className='text_container' id='text_container4'>
                        <h2 className='slide_title'>אירועי הקמת החווה</h2>
                        <p>.בתאריך ככה וככה התקבצו עשרות אנשים והתחלנו להכין את החווה ניקנו, סידרנו גזמנו ושתלנו.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide5'>
                <div className='text_container' id='text_container5'>
                        <h2 className='slide_title'>אירועי הקמת החווה</h2>
                        <p>.בתאריך ככה וככה התקבצו עשרות אנשים והתחלנו להכין את החווה ניקנו, סידרנו גזמנו ושתלנו.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide6'>
                <div className='text_container' id='text_container6'>
                        <h2 className='slide_title'>אירועי הקמת החווה</h2>
                        <p>.בתאריך ככה וככה התקבצו עשרות אנשים והתחלנו להכין את החווה ניקנו, סידרנו גזמנו ושתלנו.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide7'>
                <div className='text_container' id='text_container7'>
                        <h2 className='slide_title'>אירועי הקמת החווה</h2>
                        <p>.בתאריך ככה וככה התקבצו עשרות אנשים והתחלנו להכין את החווה ניקנו, סידרנו גזמנו ושתלנו.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide'>
                <div className='slide' id='slide8'>
                <div className='text_container' id='text_container8'>
                        <h2 className='slide_title'>אירועי הקמת החווה</h2>
                        <p>.בתאריך ככה וככה התקבצו עשרות אנשים והתחלנו להכין את החווה ניקנו, סידרנו גזמנו ושתלנו.</p>
                    </div>
                </div>
            </SwiperSlide>




        </Swiper>
    )
}

export default Gallery