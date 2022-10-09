import React from 'react'
import styles from "./styles.module.css"
import img from "../../../Assets/events.png"

const EventsCard = () => {
  return (
    <div className={styles.eventsCard}>
    <img src={img} alt="frame"></img>
    <div>
        <h2>NTR</h2>
        <p>Now playing Exclusively in movie theaters</p>
    </div>
</div>
  )
}

export default EventsCard