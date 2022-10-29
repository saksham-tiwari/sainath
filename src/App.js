import './App.css';
import React,{useRef} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
// import { propTypes } from 'react-bootstrap/esm/Image';

function App() {

  const movieRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToMovie = () => {
    movieRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEvents = () => {
    eventsRef.current.scrollIntoView({ behavior: "smooth" });
  };
    
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  window.addEventListener("scroll",function(){
    let header = document.querySelector("nav");
    header.classList.toggle("sticky",window.scrollY > 0)
  })

  return (
    <>
      <Navbar movieLink={scrollToMovie} eventsLink = {scrollToEvents} contactLink={scrollToContact} />
      <Home movieRef={movieRef} eventsRef={eventsRef} contactRef={contactRef}/>
    </>
  );
}

export default App;
