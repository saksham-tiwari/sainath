import React from 'react'
import play from "../../Assets/play.svg"

const CaraouselDiv = (props) => {
  return (
    <div className="caraousel-div">
        <h2>{props.detail.name}</h2>
        <p>{props.detail.about} </p>
        <div>
          <a href="/" target="_blank" rel="noreferrer">
            <button className="ticket">
              Get Tickets
            </button>
          </a>
          <a href={`https://www.youtube.com/watch?v=${props.detail.url}`} target="_blank" rel="noreferrer">
            <button className="trailer">
              <img src={play} alt="play" style={{width:"15px", height:"18px", display:"inline", marginBottom:"2px"}}></img> Watch Trailer
            </button>
          </a>
        </div>
    </div>
  )
}

export default CaraouselDiv