import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        style={{height:"350px",background:"#1E1E1E",marginBottom:"5%"}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        resistance="100%"
        onTouchMove={(x,y)=>{
          console.log(x,y)
        }}
      >
        <SwiperSlide>
          <iframe width="560" height="350" src="https://www.youtube.com/embed/jF5rJAXUY4A?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe width="560" height="350" src="https://www.youtube.com/embed/hpwnlr-ZHB0?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe width="560" height="350" src="https://www.youtube.com/embed/mqqft2x_Aa4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
