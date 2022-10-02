import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";


import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import CaraouselDiv from "./CaraouselDiv";

export default function Caraousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        style={{height:"700px",background:"#1E1E1E",marginBottom:"5%"}}
        autoplay={{
          delay:2000,
        }}
        
      >
        <SwiperSlide>
          <CaraouselDiv/>
        </SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
      </Swiper>
    </>
  );
}
