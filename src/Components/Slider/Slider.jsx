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
import useWindowDimensions from "../../Assets/hooks/useWindowDimensions";

export default function Slider(props) {
  const [click,setClick] = useState(Array(9).fill(false))
  const dimensions = useWindowDimensions();
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
        ref = {props.movieRef}
        slidesPerView={dimensions.width>800?2.5:(dimensions.width>600?1.5:1)}
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
      {details.map((detail,ind)=>{
        return (
          <SwiperSlide onClick={(e)=>{
          console.log(e)
          let x = [...click]
          x[0]=true
          console.log(x)
          setClick(click)
          props.setDetail(detail)
        }} style={{backgroundImage:`url('https://img.youtube.com/vi/${detail.url}/0.jpg')`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}></SwiperSlide>
        )
      })}
      </Swiper>
    </>
  );
}
