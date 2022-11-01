import React from 'react'
import styles from "./styles.module.css"
// import img from "../../../Assets/events.png"

const EventsCard = () => {
  return (
    <div className={styles.eventsCard}>
    <img src="https://img.youtube.com/vi/Iw0W4H2VZ1A/hqdefault.jpg" style={{maxHeight:"30rem"}} alt="frame"></img>
    <div>
        <h2>Dil Dhadakta Hai Tumhare Naam se</h2>
        <p>Releasing soon</p>
    </div>
</div>
  )
}

export default EventsCard