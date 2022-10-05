import React from 'react'
import styles from "./styles.module.css"
import img from "../../../Assets/Frame.png"

const NewsCard = () => {
  return (
    <div className={styles.newsCard}>
        <img src={img} alt="frame"></img>
        <div>
            <h2>Vikram Vedha</h2>
            <p>Releasing on 28th October</p>
        </div>
    </div>
  )
}

export default NewsCard