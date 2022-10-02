import React from 'react'
import Caraousel from '../../Components/Caraousel/Caraousel'
import Footer from '../../Components/Footer/Footer'
import Slider from '../../Components/Slider/Slider'
import Subscribe from '../../Components/Subscribe/Subscribe'

const Home = () => {
  return (
      <>
          <Caraousel/>
          <h1>Trailers</h1>
          <Slider/>
          <h1>News and Events</h1>
          <Subscribe/>
          <Footer/>
      </>
  )
}

export default Home