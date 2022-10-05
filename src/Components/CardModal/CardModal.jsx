import React, { useEffect } from 'react'
import styles from "./styles.module.css"

const CardModal = (props) => {
    useEffect(()=>{
        document.querySelector("body").style.overflow="hidden"
    },[])
    let url = "https://www.youtube.com/embed/"+props.url+"?controls=0"
    window.addEventListener("click",(e)=>{
        if(e.target.classList.contains("overlay")){
            props.setUrl("")
            document.querySelector("body").style.overflow="visible"
        }

    })
    return (
        <>
            <div className='overlay' id="overlay"></div>
            <div className={styles.card}>
                <iframe src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
        </>
    )
}

export default CardModal