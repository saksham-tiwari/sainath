import React, { useState } from 'react'
import Caraousel from '../../Components/Caraousel/Caraousel'
import CardModal from '../../Components/CardModal/CardModal'
import Footer from '../../Components/Footer/Footer'
import NewsAndEvents from '../../Components/NewsAndEvents/NewsAndEvents'
import Slider from '../../Components/Slider/Slider'
import Subscribe from '../../Components/Subscribe/Subscribe'

const Home = () => {
  const [url,setUrl]=useState("")
  return (
      <>
          <Caraousel/>
          <h1>Trailers</h1>
          <Slider setUrl={setUrl}/>
      {url!==""&&<CardModal url={url} setUrl={setUrl}/>}

          <h1>News and Events</h1>
          <NewsAndEvents/>
          {/* <CardModal/> */}
          <h1>Our story</h1>
          <p className='story'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          <Subscribe/>
          <Footer/>
      </>
  )
}

export default Home