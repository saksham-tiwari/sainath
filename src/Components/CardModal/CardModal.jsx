import React, { useEffect } from 'react'
import styles from "./styles.module.css"
import play from "../../Assets/play.svg"


const CardModal = (props) => {
    useEffect(()=>{
        document.querySelector("body").style.overflow="hidden"
    },[])
    let url = "https://www.youtube.com/embed/"+props.detail.url+"?controls=0"
    window.addEventListener("click",(e)=>{
        if(e.target.classList.contains("overlay")){
            props.setDetail("")
            document.querySelector("body").style.overflow="visible"
        }

    })
    return (
        <>
            <div className='overlay' id="overlay"></div>
            <div className={styles.card}>
                <i className='fa-solid fa-x modalCross' onClick={()=>{props.setDetail("")}}/>
                <iframe src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div>
                    <h1>{props.detail.name}</h1>
                    <h3>About</h3>
                    <p>{props.detail.about}</p>
                </div>
                <div>
          <a href="/" target="_blank" rel="noreferrer">
            <button className={styles.ticket}>
              Get Tickets
            </button>
          </a>
          <a href={`https://www.youtube.com/watch?v=${props.detail.url}`} target="_blank" rel="noreferrer">
            <button className={styles.trailer}>
              <img src={play} alt="play" style={{width:"15px", height:"18px", display:"inline", marginBottom:"2px"}}></img> Watch Trailer
            </button>
          </a>
        </div>
            </div>
        </>
    )
}

export default CardModal