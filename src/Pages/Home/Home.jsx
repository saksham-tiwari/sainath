import React, { useState,useRef } from 'react'
import Caraousel from '../../Components/Caraousel/Caraousel'
import CardModal from '../../Components/CardModal/CardModal'
import Footer from '../../Components/Footer/Footer'
import NewsAndEvents from '../../Components/NewsAndEvents/NewsAndEvents'
import Slider from '../../Components/Slider/Slider'
import Subscribe from '../../Components/Subscribe/Subscribe'
import _ from "lodash"

const Home = (props) => {
  const [detail,setDetail]=useState({})

  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
      <>
          <Caraousel topRef={topRef}/>
          <h1>Trailers</h1>
          <Slider movieRef={props.movieRef} setDetail={setDetail}/>
          {!_.isEmpty(detail)&&<CardModal detail={detail} setDetail={setDetail}/>}

          <h1>News and Events</h1>
          <NewsAndEvents eventsRef = {props.eventsRef}/>
          {/* <CardModal/> */}
          <h1>Our Story</h1>
          <p className='story'>
          Sainath international is an Indian Film Producing Company Owned by Anjana Srivastava. She has been in and around the entertainment world for a quite a long time. Having completed her Master's degree in Vocal music from Prayag Sangeet Samiti, she now plans to move the venture ahead and provide quality entertainment contents (T.V. Series, Web Series and Movies etc.). Currently we are into producing a feature film "Dil Dhadakta Hai Tumhare Naam Se".
          </p>
          <h1>Our Mission</h1>
          <p className='story'>
          To promote new faces and fresh talents to the bollywood.
          </p>
          <h1>Our Vision</h1>
          <p className='story'>
          Produce outstanding content (movies, T.V. shows, web series, live events) for the people.
          </p>
          
          <Subscribe/>
          <Footer contactRef={props.contactRef} backToTop={scrollToTop}/>
      </>
  )
}

export default Home