import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider(props) {
  const [click,setClick] = useState(Array(9).fill(false))
  // eslint-disable-next-line no-unused-vars
  const [urls,setUrls] = useState(["jF5rJAXUY4A","hpwnlr-ZHB0","mqqft2x_Aa4","eLucCWmf6V4","_Z3QKkl1WyM"])

  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        style={{height:"17em",background:"#1E1E1E",marginBottom:"5%",marginLeft:"5%",width:"90%",marginRight:"5%"}}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        resistance="100%"
        onTouchMove={(x,y)=>{
          console.log(x,y)
        }}
      >
      {urls.map((url,ind)=>{
        return (
          <SwiperSlide onClick={(e)=>{
          console.log(e)
          let x = [...click]
          x[0]=true
          console.log(x)
          setClick(click)
          props.setUrl(url)
        }} style={{backgroundImage:`url('https://img.youtube.com/vi/${url}/0.jpg')`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></SwiperSlide>
        )
      })}
      </Swiper>
    </>
  );
}
