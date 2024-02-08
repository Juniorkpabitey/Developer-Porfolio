import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Web from "../../img/WEB.png";
import Photography from "../../img/Photography.jpg";
import Adobe from "../../img/AdobeUI.png";
import Study from "../../img/study.png";
import CampusMart from "../../img/CampusMart.png";
import Credit from "../../img/Creditcard.png";


import 'swiper/css'

const Portfolio = () => {
  return (
<div className="portfolio">

    {/*heading*/}
    <span>Recent Projects</span>
    <span>Portfolios</span>

    {/*Swiper*/}
    <Swiper spaceBetween={30}
    slidesPerView={2}
    grabCursor={true}
    className='portfolio-slider'>
        <SwiperSlide>
            <img src={Web} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={CampusMart} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Photography} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Adobe} alt="" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={Study} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={Credit} alt="" />
        </SwiperSlide>
    </Swiper>
    
</div>  )
}

export default Portfolio