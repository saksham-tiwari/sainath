import React from 'react'
import styles from "./styles.module.css"
// import img from "../../../Assets/events.png"

const EventsCard = (props) => {
  return (
    <div className={styles.eventsCard} onClick={()=>window.open(`https://www.youtube.com/watch?v=${props.url}`,'mywindow')} style={{cursor: "pointer"}}>
    <img src={`https://img.youtube.com/vi/${props.url}/hqdefault.jpg`} style={{maxHeight:"30rem"}} alt="frame"></img>
    <div className='pt-2'>
        <h2>Screening</h2>
        <p>Dil Dhadakta Hai Tumhare Naam se</p>
    </div>
</div>
  )
}

export default EventsCard