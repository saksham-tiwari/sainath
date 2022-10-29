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
  const [urls,setUrls] = useState(["Iw0W4H2VZ1A","hpwnlr-ZHB0","mqqft2x_Aa4","mqqft2x_Aa4","_Z3QKkl1WyM"])
  const [details,setDetails] = useState([
    {
      name:"Dil Dhadakta Hai Tumhare Naam Se",
      about:"The trailer reveals the film and depicts all characters therein. The film circles around the drama of a middle-class family where the father squanders his future savings on his son in anticipation that when he would get placed highly, his economic crisis come to an end.",
      url:"Iw0W4H2VZ1A"
    },
    {
      name:"Vikram Vedha",
      about:"Thirty years after the Battle of Endor, a new threat has risen in the form of the First Orderand the villainous Kylo Ren.",
      url:"hpwnlr-ZHB0"
    },
    {
      name:"Vikram Vedha",
      about:"Thirty years after the Battle of Endor, a new threat has risen in the form of the First Orderand the villainous Kylo Ren.",
      url:"mqqft2x_Aa4"
    },
    {
      name:"Vikram Vedha",
      about:"Thirty years after the Battle of Endor, a new threat has risen in the form of the First Orderand the villainous Kylo Ren.",
      url:"_Z3QKkl1WyM"
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
