import React, { useState } from "react";
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

export default function Caraousel(props) {
  const [details] = useState([
    {
      name:"Dil Dhadakta Hai Tumhare Naam Se",
      about:"The trailer reveals the film and depicts all characters therein. The film circles around the drama of a middle-class family where the father squanders his future savings on his son in anticipation that when he would get placed highly, his economic crisis come to an end.",
      url:"Iw0W4H2VZ1A"
    },
    {
      name:"Meri Chahat",
      about:"MERI CHAAHAT (PART-1) | BAZIRAO BABBAN YADAV, SAPNA SINGH, ANIL SRIVASTAVA | HINDI NEW MOVIE 2022",
      url:"RCOviQFSVcI"
    }

  ])

  return (
    <>
      <Swiper
        ref={props.topRef} 
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
      {details.map((x)=>{
        return (
          <SwiperSlide style={{backgroundImage:`url('https://img.youtube.com/vi/${x.url}/hqdefault.jpg')`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            <CaraouselDiv detail={x}/>
          </SwiperSlide>
        )
      })}
        {/* <SwiperSlide>
          <CaraouselDiv/>
        </SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide>
        <SwiperSlide><CaraouselDiv/></SwiperSlide> */}
      </Swiper>
    </>
  );
}
