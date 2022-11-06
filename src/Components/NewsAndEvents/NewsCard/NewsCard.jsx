import React from 'react'
import styles from "./styles.module.css"
import img from "../../../Assets/chaahat.jpg"

const NewsCard = () => {
  return (
    <div className={styles.newsCard} onClick={()=>window.open('https://www.youtube.com/watch?v=JediyKx_Hvk','mywindow')} style={{cursor: "pointer"}}>
        <img src={img} style={{maxHeight:"30rem"}} alt="frame"></img>
        <div className='pt-2'>
            <h2>Chahat</h2>
            <p>Watch Part 1 now on YouTube</p>
        </div>
    </div>
  )
}

export default NewsCard