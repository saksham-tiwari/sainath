import React, { useState,useRef } from 'react'
import Caraousel from '../../Components/Caraousel/Caraousel'
import CardModal from '../../Components/CardModal/CardModal'
import Footer from '../../Components/Footer/Footer'
import NewsAndEvents from '../../Components/NewsAndEvents/NewsAndEvents'
import Slider from '../../Components/Slider/Slider'
import Subscribe from '../../Components/Subscribe/Subscribe'

const Home = (props) => {
  const [url,setUrl]=useState("")

  const topRef = useRef(null);

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
      <>
          <Caraousel topRef={topRef}/>
          <h1>Trailers</h1>
          <Slider movieRef={props.movieRef} setUrl={setUrl}/>
      {url!==""&&<CardModal url={url} setUrl={setUrl}/>}

          <h1>News and Events</h1>
          <NewsAndEvents eventsRef = {props.eventsRef}/>
          {/* <CardModal/> */}
          <h1>Our story</h1>
          <p className='story'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <Subscribe/>
          <Footer contactRef={props.contactRef} backToTop={scrollToTop}/>
      </>
  )
}

export default Home